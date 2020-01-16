import React, { useState } from "react";
import styled from "styled-components";
import { ProjectColorData } from "../../Constants";
import { useSelectedColorValue } from "../../Contexts";
import app from "firebase/app";

const ColorOverlay = styled.div`
  position: absolute;
  width: 39rem;
  top: 28rem;
  overflow: auto;
  height: 25rem;
  z-index: 1;
  border-radius: 3px;
  background-color: white;

  @media ${props => props.theme.MediaQueries.medium} {
    width: 25rem;
    top: 26rem;
  }
`;

export const ProjectColorOverlay = ({
  showDropDown,
  setShowDropDown,
  ProjectColor,
  setProjectColor,
  setActiveProjectColor,
  setActiveProjectColorValue
}) => {
  return (
    <ColorOverlay>
      {ProjectColorData.map((project, index) => (
        <li
          key={index}
          className="add-project__modal-body-dropdown--list"
          value={ProjectColor}
          onClick={() => {
            setProjectColor(project.color);
            setShowDropDown(!showDropDown);
            setActiveProjectColor(project.name);
            setActiveProjectColorValue(project.color);
          }}
        >
          <span>
            <img src={project.color} /> <span>{project.name}</span>
          </span>
        </li>
      ))}
    </ColorOverlay>
  );
};
