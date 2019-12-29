import React, { useState } from "react";
import { useProjectsValue, useSelectedColorValue } from "../Contexts";
import ProjectSetting from "../../assets/svg/ProjectSetting.svg";
import SettingOverlay from "./Overlays/SettingOverlay";

export const Projects = () => {
  const [showSetting, setShowSetting] = useState(false);
  const [active, setActive] = useState("");
  const { projects } = useProjectsValue();

  return (
    <>
      {projects &&
        projects.map(project => (
          <li
            key={project.ProjectId}
            className={
              active === project.ProjectId
                ? "active sidebar__projects"
                : "sidebar__projects"
            }
            onClick={() => {
              setActive(project.ProjectId);
            }}
          >
            <span>
              <img
                className="sidebar__projects-color"
                src={project.ProjectColor}
              />
              {project.name}
            </span>

            <span onClick={() => setShowSetting(!showSetting)}>
              <img className="sidebar__projects-setting" src={ProjectSetting} />
            </span>

            {showSetting && (
              <SettingOverlay
                showSetting={showSetting}
                setShowSetting={setShowSetting}
              />
            )}
          </li>
        ))}
    </>
  );
};
