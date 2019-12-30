import React, { useState } from "react";
import Plus from "../../assets/svg/plusGreen.svg";
import app from "firebase/app";
import { useSelectedProjectValue } from "../Contexts";
import moment from "moment";
import styled from "styled-components";

// Icons
import calender from "../../assets/svg/calender.svg";
import prroject from "../../assets/svg/prroject.svg";
import info from "../../assets/svg/info.svg";

import ProjectsOverlay from "./Overlays/ProjectsOverlay";
import TaskDate from "./TaskDate";

//
//
//
//
//
//
const Features = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40rem;
  margin-top: 1.5rem;
`;
const Buttons = styled.div`
  width: 17rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  justify-content: space-between;
  flex-direction: row;

  button {
    color: white;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 6px;
    font-weight: 400;
    cursor: pointer;
  }
`;
const Options = styled.div`
  display: flex;
  flex-direction: row;
  width: 9rem;
  justify-content: space-between;

  img {
    width: 1.7rem;
    cursor: pointer;
  }

  img:last-child {
    width: 2.4rem;
  }
`;

export const AddTasks = () => {
  const [task, setTask] = useState("");
  const [showTaskMain, setShowTaskMain] = useState(false);
  const [showProjectOvrelay, setShowProjectOvrelay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);
  const [taskDate, setTaskDate] = useState("");
  const [project, setProject] = useState("");
  const { selectedProject } = useSelectedProjectValue();

  const addTask = () => {
    const ProjectId = project || selectedProject;

    let collatedDate = "";

    if (ProjectId === "TODAY") {
      collatedDate = moment().format("DD/MM/YYYY");
    } else if (ProjectId === "NEXT__7") {
      collatedDate = moment()
        .add(7, "days")
        .format("DD/MM/YYYY");
    }

    return (
      task &&
      ProjectId &&
      app
        .firestore()
        .collection("Tasks")
        .add({
          archived: false,
          ProjectId,
          task,
          date: collatedDate || taskDate,
          userId: `${app.auth().currentUser.uid}`
        })
        .then(() => {
          setTask("");
          setProject("");
        })
    );
  };

  return (
    <>
      <div className="add-task">
        <span>
          <img className="add-task-icon" src={Plus} alt="" />
        </span>
        <span
          className="add-task-title"
          onClick={() => setShowTaskMain(!showTaskMain)}
        >
          Add Task
        </span>
      </div>
      {showTaskMain && (
        <>
          <div className="add-task-input-holder">
            <input
              value={task}
              onChange={e => setTask(e.target.value)}
              type="text"
              className="add-task-input"
              placeholder="e.g. Design meeting at 11am p1 #Meeting"
            />
          </div>

          <Features>
            <Buttons>
              <button
                style={{ backgroundColor: " var(--color-main)" }}
                type="submit"
                onClick={addTask}
              >
                Submit
              </button>
              <button
                style={{ backgroundColor: " #e8290b" }}
                type="submit"
                onClick={() => setShowTaskMain(!showTaskMain)}
              >
                Cancel
              </button>
            </Buttons>

            <Options>
              <img
                src={calender}
                onClick={() => setShowProjectOvrelay(!showProjectOvrelay)}
              />

              {showProjectOvrelay && (
                <ProjectsOverlay
                  showProjectOvrelay={showProjectOvrelay}
                  setShowProjectOvrelay={setShowProjectOvrelay}
                  setProject={setProject}
                />
              )}
              <img src={info} />
              <img
                src={prroject}
                onClick={() => setShowTaskDate(!showTaskDate)}
              />

              {showTaskDate && (
                <TaskDate
                  setShowTaskDate={setShowTaskDate}
                  showTaskDate={showTaskDate}
                  taskDate={taskDate}
                  setTaskDate={setTaskDate}
                />
              )}
            </Options>
          </Features>
        </>
      )}
    </>
  );
};
