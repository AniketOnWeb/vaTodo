import React from "react";
import styled from "styled-components";
import { ProjectColorData } from "../Constants";

const ColorOverlay = styled.div`
  position: absolute;
  width: 39rem;
  top: 28rem;
  /* height: 18rem; */
  z-index: 1;
  border-radius: 3px;
  background-color: white;
`;

export const ProjectColorOverlay = () => {
  return (
    <ColorOverlay>
      {ProjectColorData.map((project, index) => (
        <li key={index} className="add-project__modal-body-dropdown--list">
          <span>
            <img src={project.color} /> <span>{project.name}</span>
          </span>
        </li>
      ))}
    </ColorOverlay>
  );
};
