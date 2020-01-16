import React, { useState } from "react";
import ProjectSetting from "../../assets/svg/ProjectSetting.svg";
import SettingOverlay from "./Overlays/SettingOverlay";
import styled from "styled-components";
import app from "firebase/app";
import Trash from "../../assets/svg/trash2.svg";
import { useProjectsValue, useSelectedProjectValue } from "../Contexts";

const Container = styled.div`
  margin-left: 9rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 4rem;

  .sidebar__projects-trash {
    display: none;

    @media ${props => props.theme.MediaQueries.medium} {
      display: block;
      cursor: pointer;
    }
  }

  @media ${props => props.theme.MediaQueries.medium} {
    padding-right: 7rem;
  }

  .sidebar__projects-settings-conatainer {
    @media ${props => props.theme.MediaQueries.medium} {
      display: none;
    }
  }
`;

export const IndividualProject = ({ project }) => {
  const [showSetting, setShowSetting] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = docID => {
    app
      .firestore()
      .collection("Projects")
      .doc(docID)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject("INBOX");
      });
  };

  return (
    <>
      <Container>
        <span>
          <img className="sidebar__projects-color" src={project.ProjectColor} />
          {project.name}
        </span>

        <span
          className="sidebar__projects-settings-conatainer"
          onClick={() => setShowSetting(!showSetting)}
          key={project.ProjectId}
        >
          <img className="sidebar__projects-setting" src={ProjectSetting} />
        </span>

        <img
          className="sidebar__projects-trash"
          src={Trash}
          onClick={() => {
            deleteProject(project.docId);
          }}
        />
        {showSetting && (
          <SettingOverlay
            showSetting={showSetting}
            setShowSetting={setShowSetting}
            project={project}
          />
        )}
      </Container>
    </>
  );
};
