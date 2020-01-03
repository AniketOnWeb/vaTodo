import React, { useState, useEffect } from "react";
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
import { CSSTransition } from "react-transition-group";

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

const QuickAdd = ({
  showQuickNav,
  setShowQuickNav,
  setShowQuickTask,
  showQuickTask
}) => {
  const [showProjectOvrelay, setShowProjectOvrelay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);
  const [taskDate, setTaskDate] = useState("");
  const [task, setTask] = useState("");
  const [project, setProject] = useState("");
  const { selectedProject } = useSelectedProjectValue();

  const addTasK = () => {
    firebase.addTask(
      project,
      selectedProject,
      task,
      setTask,
      setProject,
      taskDate
    );
  };

  return (
    <>
      {showQuickNav || showQuickTask ? (
        <Modal>
          <div className="add-task__modal">
            <div className="add-task__modal-header">
              <h3>Quick Add Task</h3>
              <h2
                onClick={() => {
                  showQuickTask
                    ? setShowQuickTask(false)
                    : showQuickNav
                    ? setShowQuickNav(false)
                    : null;
                }}
              >
                X
              </h2>
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
                  onClick={() => {
                    addTasK();
                    showQuickTask
                      ? setShowQuickTask(false)
                      : showQuickNav
                      ? setShowQuickNav(false)
                      : null;
                  }}
                >
                  Submit
                </button>
                <button
                  style={{ backgroundColor: " #e8290b" }}
                  type="submit"
                  onClick={() => {
                    showQuickTask
                      ? setShowQuickTask(false)
                      : showQuickNav
                      ? setShowQuickNav(false)
                      : null;
                  }}
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

                {/* {showProjectOvrelay && ( */}
                <CSSTransition
                  in={showProjectOvrelay}
                  classNames="add-task__modal__wrapper"
                  timeout={400}
                  unmountOnExit
                  onEnter={() => setShowProjectOvrelay(true)}
                  onExit={() => setShowProjectOvrelay(false)}
                >
                  <ProjectsOverlay
                    showProjectOvrelay={showProjectOvrelay}
                    setShowProjectOvrelay={setShowProjectOvrelay}
                    setProject={setProject}
                  />
                  {/* )} */}
                </CSSTransition>

                <img src={info} />
                <img
                  style={{ width: "2.5rem" }}
                  src={prroject}
                  onClick={() => {
                    setShowTaskDate(!showTaskDate);
                    setShowProjectOvrelay(false);
                  }}
                />

                {/* {showTaskDate && ( */}
                <CSSTransition
                  in={showTaskDate}
                  classNames="project__overlay__wrapper"
                  timeout={400}
                  unmountOnExit
                  onEnter={() => setShowTaskDate(true)}
                  onExit={() => setShowTaskDate(false)}
                >
                  <TaskDate
                    setShowTaskDate={setShowTaskDate}
                    showTaskDate={showTaskDate}
                    taskDate={taskDate}
                    setTaskDate={setTaskDate}
                  />
                  {/* )} */}
                </CSSTransition>
              </Options>
            </Features>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default QuickAdd;
