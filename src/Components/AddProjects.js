import React, { useState } from "react";
import styled from "styled-components";
import app from "firebase/app";
import { generatePushId } from "../Helpers";
import { useProjectsValue } from "../Contexts";
//Icon
import Plus from "../../assets/svg/plus.svg";
//Modal
import Modal from "../Modals/index";

const AddComponent = styled.div`
  cursor: pointer;
`;

export const AddProjects = ({ shouldShow = false }) => {
  const [ProjectName, setProjectName] = useState("");
  const [ProjectColor, setProjectColor] = useState("");
  const [show, setShow] = useState(shouldShow);
  const [showModal, setShowModal] = useState(false);

  //will generate random Project Id
  const ProjectId = generatePushId();

  //coming from custom hooks and context
  const { projects, setProjects } = useProjectsValue();

  const addProject = () => {
    ProjectName &&
      app
        .firestore()
        .collection("Projects")
        //it will generate a rondom document with unique user id as a field
        .add({
          ProjectId,
          name: ProjectName,
          userId: app.auth().currentUser.uid
        })
        .then(() => {
          setProjects([...projects]);
          setProjectName("");
          setShow(false);
        });
  };

  return (
    <>
      <AddComponent className="add-project">
        <span>
          <img className="add-project-plus" src={Plus} alt="" />
        </span>
        <span
          className="add-project-text"
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          Add Projects
        </span>

        {showModal ? (
          <Modal>
            <div className="add-project__modal">
              <div className="add-project__modal-header">
                <h3>ADD PROJECTS</h3>
              </div>
              <div className="add-project__modal-body">
                <span>Project Name</span>
                <input
                  type="text"
                  value={ProjectName}
                  onChange={e => setProjectName(e.target.value.toUpperCase())}
                  placeholder="Name your project"
                />
                <span>Project Color</span>
                <input
                  type="text"
                  value={ProjectColor}
                  onChange={e => setProjectColor(e.target.value)}
                />
              </div>
              <div className="add-project__modal-action">
                <button type="submit" onClick={() => addProject()}>
                  Add
                </button>
                <button
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
      </AddComponent>
    </>
  );
};

export default AddProjects;
