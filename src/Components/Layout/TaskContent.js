import React, { useEffect } from "react";
import styled from "styled-components";
import DesignGrid from "../../../assets/svg/designgrid.svg";
import { AddTasks } from "../AddTasks";

import { useTasks } from "../../Custom_Hooks";
import { collatedTasks } from "../../Constants";
import { collatedTasksExist, getCollatedTitle, getTitle } from "../../Helpers";
import { useSelectedProjectValue, useProjectsValue } from "../../Contexts";
import Checkbox from "../Checkbox";
//
//
//
const ProjectName = styled.div`
  padding: 1rem 5rem;
  border-bottom: 1px solid #1abc9c33;

  h1 {
    font-size: 2.7rem;
    font-weight: 600;
    color: var(--color-text);
  }
`;

const TasksList = styled.div`
  padding: 2.5rem 5rem;
`;

const TaskContent = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = "";

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  console.log(tasks);

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
    console.log("ProjectName : 2", projectName);
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });

  return (
    <>
      <ProjectName>
        <h1>{projectName}</h1>
        <img src={DesignGrid} />
      </ProjectName>

      <TasksList>
        <ul className="tasks__list">
          {tasks.map(task => (
            <li key={`${task.id}`}>
              <Checkbox id={task.id} />
              <span>{task.task}</span>
            </li>
          ))}
        </ul>

        <AddTasks />
      </TasksList>
    </>
  );
};

export default TaskContent;
