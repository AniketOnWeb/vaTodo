import React, { useState } from "react";
import styled from "styled-components";
import quickAdd from "../../../assets/svg/quick-add.svg";
import Modal from "../../Modals/index";
import calender from "../../../assets/svg/calender.svg";
import prroject from "../../../assets/svg/prroject.svg";
import info from "../../../assets/svg/info.svg";
import app from "firebase/app";
import firebase from "../../Firebase/firebase";
import { useSelectedProjectValue } from "../../Contexts";
import ProjectsOverlay from "../Overlays/ProjectsOverlay";
import TaskDate from "../TaskDate";

//
//
//
//
//
//
const Features = styled.div`
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 2rem;
`;

const Buttons = styled.div`
  width: 13rem;
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
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 400;
    font-size: 1.1rem;
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

const QuickAdd = () => {
  const [show, setShow] = useState(false);
  const [showProjectOvrelay, setShowProjectOvrelay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);
  const [taskDate, setTaskDate] = useState("");
  const [task, setTask] = useState("");
  const [project, setProject] = useState("");
  const { selectedProject } = useSelectedProjectValue();

  function addTasK() {
    firebase.addTask(
      project,
      selectedProject,
      task,
      setTask,
      setProject,
      taskDate
    );
  }

  return (
    <>
      <img
        src={quickAdd}
        alt="quick-add"
        className="navbar__elements navbar__elements-quick"
        onClick={() => setShow(!show)}
      />

      {show && (
        <Modal>
          <div className="add-task__modal">
            <div className="add-task__modal-header">
              <h3>Quick Add Task</h3>
              <h2 onClick={() => setShow(!show)}>X</h2>
            </div>

            <div className="add-task__modal-body">
              <input
                type="text"
                value={task}
                onChange={e => setTask(e.target.value)}
                placeholder="e.g. Design meeting at 11am p1 #Meeting"
              />
            </div>

            <Features>
              <Buttons>
                <button
                  style={{ backgroundColor: " var(--color-main)" }}
                  type="submit"
                  onClick={addTasK}
                >
                  Submit
                </button>
                <button
                  style={{ backgroundColor: " #e8290b" }}
                  type="submit"
                  onClick={() => setShow(!show)}
                >
                  Cancel
                </button>
              </Buttons>

              <Options>
                <img
                  src={calender}
                  onClick={() => {
                    setShowProjectOvrelay(!showProjectOvrelay);
                    setShowTaskDate(false);
                  }}
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
                  style={{ width: "2.5rem" }}
                  src={prroject}
                  onClick={() => {
                    setShowTaskDate(!showTaskDate);
                    setShowProjectOvrelay(false);
                  }}
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
          </div>
        </Modal>
      )}
    </>
  );
};

export default QuickAdd;
