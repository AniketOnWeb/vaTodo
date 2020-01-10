import React, { useEffect } from "react";
import { useProjectsValue, useSelectedProjectValue } from "../../Contexts";
import { useTasks } from "../../Custom_Hooks";
import app from "firebase/app";

const ProjectsOverlay = ({
  setShowProjectOvrelay,
  showProjectOvrelay,
  setProject
}) => {
  const { projects, setProjects } = useProjectsValue();
  const { selectedProject } = useSelectedProjectValue();
  const { tasks } = useTasks(selectedProject);

  var arr = tasks.map(task => task.id);

  const updateTasks = (ProjectId, docId) => {
    return app
      .firestore()
      .collection("Tasks")
      .doc(docId)
      .update({ ProjectId: ProjectId })
      .then(() => {
        setProjects([...projects]);
      });
  };

  return (
    <>
      {projects && (
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
                  updateTasks(project.ProjectId, arr);
                }}
              >
                {project.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ProjectsOverlay;
