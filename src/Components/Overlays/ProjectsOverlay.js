import React from "react";
import { useProjectsValue } from "../../Contexts";

const ProjectsOverlay = ({
  setShowProjectOvrelay,
  showProjectOvrelay,
  setProject
}) => {
  const { projects } = useProjectsValue();

  return (
    projects && (
      <div className="project__overlay">
        <div className="project__overlay-paper-clip"></div>
        <ul className="project__overlay-list">
          <h2>Select a Project</h2>
          {projects.map(project => (
            <li
              key={project.ProjectId}
              onClick={() => {
                setProject(project.ProjectId);
                setShowProjectOvrelay(!showProjectOvrelay);
              }}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default ProjectsOverlay;
