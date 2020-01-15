import React, { useState } from "react";
import ProjectSetting from "../../assets/svg/ProjectSetting.svg";
import SettingOverlay from "./Overlays/SettingOverlay";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 9rem;
  align-items: center;

  span:first-of-type {
    margin-right: 8rem;
  }
`;

export const IndividualProject = ({ project }) => {
  const [showSetting, setShowSetting] = useState(false);

  return (
    <>
      <Container>
        <span>
          <img className="sidebar__projects-color" src={project.ProjectColor} />
          {project.name}
        </span>

        <span
          onClick={() => setShowSetting(!showSetting)}
          key={project.ProjectId}
        >
          <img className="sidebar__projects-setting" src={ProjectSetting} />
        </span>

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
