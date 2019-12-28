import React, { useState } from "react";
import { useProjectsValue } from "../Contexts";

export const Projects = () => {
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
            onClick={() => setActive(project.ProjectId)}
          >
            {project.name}
          </li>
        ))}
    </>
  );
};
