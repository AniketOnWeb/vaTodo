import React, { useContext, createContext } from "react";
import { useProjects } from "../Custom_Hooks";
import PropTypes from "prop-types";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsValue = () => useContext(ProjectsContext);

ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired
};
