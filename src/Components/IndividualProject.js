import React, { useState } from "react";
import { useProjectsValue, useSelectedProjectValue } from "../Contexts";
import ProjectSetting from "../../assets/svg/ProjectSetting.svg";
import SettingOverlay from "./Overlays/SettingOverlay";
import app from "firebase/app";

export const IndividualProject = ({ project }) => {
  const [showSetting, setShowSetting] = useState(false);

  return (
    <>
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
    </>
  );
};
