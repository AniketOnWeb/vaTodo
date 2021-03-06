import React, { useState } from "react";
import styled from "styled-components";
import app from "firebase/app";
import { generatePushId } from "../Helpers";
import {
  useProjectsValue,
  useSelectedColorValue,
  useSelectedProjectValue
} from "../Contexts";

//Icon
import Plus from "../../assets/svg/plus.svg";
import Salmon from "../../assets/svg/salmon.svg";
import { ExpandArrow } from "../../assets/svg/all-icons";

//Modal
import Modal from "../Modals/index";
import { ProjectColorOverlay } from "./Overlays/ProjectColorOverlay";

const AddComponent = styled.div`
  cursor: pointer;
`;
const DropDown = styled.div`
  width: 39rem;
  height: 3.5rem;
  border: none;
  border-radius: 0.4rem;
  outline: none;
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer;
  overflow: hidden;

  @media ${props => props.theme.MediaQueries.medium} {
    width: 25rem;
    height: 3.4rem;
  }

  span {
    margin-top: 1rem;

    &:first-of-type {
      display: flex;
      margin-left: -2.5rem;
      color: #82807e;
      letter-spacing: 0.3;
      font-weight: 500;
      justify-content: space-between;

      @media ${props => props.theme.MediaQueries.medium} {
        margin-left: -1.5rem;
      }

      img {
        margin-right: 0.9rem;
      }
    }
  }
`;

export const AddProjects = ({ shouldShow = false }) => {
  const [ProjectName, setProjectName] = useState("");
  const [show, setShow] = useState(shouldShow);
  const [showModal, setShowModal] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [ProjectColor, setProjectColor] = useState("");
  const [activeProjectColor, setActiveProjectColor] = useState("SALMON");
  const [activeProjectColorValue, setActiveProjectColorValue] = useState(
    Salmon
  );

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
          userId: app.auth().currentUser.uid,
          ProjectColor,
          archived: false
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

                <DropDown onClick={() => setShowDropDown(!showDropDown)}>
                  <span>
                    <img src={activeProjectColorValue} />
                    {activeProjectColor}
                  </span>
                  <span className="add-project__modal-body-dropdown">
                    <ExpandArrow />
                  </span>
                </DropDown>

                {/* Doropdown for Project Color Overlay */}
                {showDropDown && (
                  <ProjectColorOverlay
                    showDropDown={showDropDown}
                    setShowDropDown={setShowDropDown}
                    ProjectColor={ProjectColor}
                    setProjectColor={setProjectColor}
                    setActiveProjectColor={setActiveProjectColor}
                    setActiveProjectColorValue={setActiveProjectColorValue}
                  />
                )}
              </div>
              <div className="add-project__modal-action">
                <button
                  type="submit"
                  onClick={() => {
                    addProject();
                    setShowModal(!showModal);
                  }}
                >
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
