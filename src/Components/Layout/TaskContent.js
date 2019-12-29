import React, { useEffect } from "react";
import styled from "styled-components";
import DesignGrid from "../../../assets/svg/designgrid.svg";
import { AddTasks } from "../AddTasks";

import { collatedTasks } from "../../Constants";
import { collatedTasksExist, getCollatedTitle, getTitle } from "../../Helpers";
import { useSelectedProjectValue, useProjectsValue } from "../../Contexts";

//
//
//
const ProjectName = styled.div`
  padding: 1rem 5rem;
  border-bottom: 1px solid #1abc9c33;

  h1 {
    font-size: 2.7rem;
    font-weight: 600;
    color: var(--color-text);
  }
`;

const TasksList = styled.div`
  padding: 2.5rem 5rem;
`;

const TaskContent = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  let projectName = "";

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }
  console.log("ProjectName : 1", projectName);

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
    console.log("ProjectName : 2", projectName);
  }

  // console.log(getTitle(projects, selectedProject)).name;

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });

  return (
    <>
      <ProjectName>
        <h1>{projectName}</h1>
        <img src={DesignGrid} />
      </ProjectName>

      <TasksList>
        <ul className="task__list">
          <li>
            <span></span>
            <span>Buy Bread From Mother Dairy</span>
          </li>
          <li>
            <span></span>
            <span>Get the car from Rohit</span>
          </li>
          <li>
            <span></span>
            Do laundry
          </li>
          <li>
            <span></span>
            Order Breakfast
          </li>
          <li>
            <span></span>
            Give back the car
          </li>
        </ul>

        <AddTasks />
      </TasksList>
    </>
  );
};

export default TaskContent;
