import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DesignGrid from "../../../assets/svg/designgrid.svg";
import { AddTasks } from "../AddTasks";

import { useTasks } from "../../Custom_Hooks";
import { collatedTasks } from "../../Constants";
import { collatedTasksExist, getCollatedTitle, getTitle } from "../../Helpers";
import { useSelectedProjectValue, useProjectsValue } from "../../Contexts";
import Checkbox from "../Checkbox";
import TaskClear from "../../../assets/svg/taskClear.svg";
import QuickAdd from "../NavbarEle/QuickAdd";
import { CSSTransition } from "react-transition-group";

import calender from "../../../assets/svg/calender.svg";
import prroject from "../../../assets/svg/prroject.svg";
import TaskDate from "../TaskDate";
import ProjectsOverlay from "../Overlays/ProjectsOverlay";
//
//
//

const Container = styled.div`
  padding: 4rem 5rem;

  @media ${props => props.theme.MediaQueries.medium} {
    padding: 3rem 2rem;
  }
`;

const ProjectName = styled.div`
  padding: 1rem 5rem;
  border-bottom: 1px solid #1abc9c33;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media ${props => props.theme.MediaQueries.medium} {
    padding: 1rem 2rem;
  }

  .designgrid {
    @media ${props => props.theme.MediaQueries.medium} {
      width: 35rem;
    }
  }

  h1 {
    font-size: 2.7rem;
    font-weight: 600;
    color: var(--color-text);
  }
`;

const TasksList = styled.div`
  margin-top: 2rem;

  @media ${props => props.theme.MediaQueries.medium} {
    margin-top: 0.5rem;
  }
`;

const TaskContent = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);
  const [showQuickTask, setShowQuickTask] = useState(false);
  const [taskDate, setTaskDate] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);
  const [showProjectOvrelay, setShowProjectOvrelay] = useState(false);
  const [project, setProject] = useState("");

  let projectName = "";
  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: vaTodo`;
  });

  return (
    <>
      <ProjectName>
        <h1>{projectName}</h1>
        <img className="designgrid" src={DesignGrid} />
      </ProjectName>

      <Container>
        <AddTasks />

        {tasks.length !== 0 ? (
          <TasksList>
            <ul className="tasks__list">
              {tasks.map(task => (
                <li
                  key={task.id}
                  onMouseLeave={() => {
                    setShowProjectOvrelay(false);
                    setShowTaskDate(false);
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Checkbox id={task.id} />
                    <span>{task.task}</span>
                  </div>

                  {/* <p className="tasks__list-selectedProject">
                    ⚪ {selectedProject}
                  </p> */}
                  <p className="tasks__list-selectedProject">⚪ Change</p>
                  <div className="tasks__list-features">
                    <img
                      src={prroject}
                      key={task.id}
                      onClick={() => {
                        setShowProjectOvrelay(!showProjectOvrelay);
                        setShowTaskDate(false);
                      }}
                    />
                    <div className="projects__overlay3">
                      <CSSTransition
                        in={showProjectOvrelay}
                        classNames="project__overlay__wrapper"
                        timeout={100}
                        unmountOnExit
                        onEnter={() => setShowProjectOvrelay(true)}
                        onExit={() => setShowProjectOvrelay(false)}
                      >
                        <ProjectsOverlay
                          showProjectOvrelay={showProjectOvrelay}
                          setShowProjectOvrelay={setShowProjectOvrelay}
                          setProject={setProject}
                          task={task}
                        />
                      </CSSTransition>
                    </div>

                    <img
                      src={calender}
                      alt=""
                      onClick={() => {
                        setShowTaskDate(!showTaskDate);
                        setShowProjectOvrelay(false);
                      }}
                    />

                    <div className="task__date3">
                      <CSSTransition
                        in={showTaskDate}
                        classNames="task-date__wrapper"
                        timeout={100}
                        unmountOnExit
                        onEnter={() => setShowTaskDate(true)}
                        onExit={() => setShowTaskDate(false)}
                      >
                        <TaskDate
                          showTaskDate={showTaskDate}
                          taskDate={TaskDate}
                          setTaskDate={setTaskDate}
                          setShowTaskDate={setShowTaskDate}
                        />
                      </CSSTransition>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </TasksList>
        ) : (
          <div className="tasks__completed">
            <img
              src={TaskClear}
              className="tasks__completed-image"
              alt="tasks completed"
            />
            <h3 className="tasks__completed-title">
              Looks like everything's organized in the right place.
            </h3>
            <button
              className="tasks__completed-button"
              onClick={() => setShowQuickTask(!showQuickTask)}
            >
              Add Task
            </button>
            <CSSTransition
              in={showQuickTask}
              classNames="add-task__modal__wrapper"
              timeout={100}
              unmountOnExit
              onEnter={() => setShowQuickTask(true)}
              onExit={() => setShowQuickTask(false)}
            >
              <QuickAdd
                setShowQuickTask={setShowQuickTask}
                showQuickTask={showQuickTask}
              />
            </CSSTransition>
          </div>
        )}
      </Container>
    </>
  );
};

export default TaskContent;
