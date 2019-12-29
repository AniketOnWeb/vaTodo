import React, { useState } from "react";
import styled from "styled-components";
import Trash from "../../../assets/svg/trash.svg";
import archive from "../../../assets/svg/archive.svg";
import color from "../../../assets/svg/color.svg";

const Overlay = styled.div`
  position: absolute;
  width: 15rem;
  transform: translateX(18rem) translateY(2rem);
  z-index: 1;
  border-radius: 3px;
  background-color: white;
  border: 1px solid #1abc9c82;
  box-shadow: 0px 0px 7px 1px #0000001f;
  text-align: center;
  display: flex;

  span {
    color: var(--color-text);
    font-weight: 400;
  }

  li {
    list-style: none;
    padding: 0.5rem;
    -webkit-align-items: end;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: end;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 14rem;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: flex-start;

    &:not(:last-child) {
      border-bottom: 1px solid #1abc9c33;
    }

    &:hover {
      background-color: #e6e4e4;
    }
  }
`;
const SettingOverlay = ({ showSetting, setShowSetting }) => {
  return (
    <Overlay>
      <ul onClick={() => setShowSetting(!showSetting)}>
        <li>
          <span style={{ transform: "translateY(2px)", marginRight: ".8rem" }}>
            <img src={Trash} className="sidebar__projects-setting--delete" />
          </span>
          <span>Delete</span>
        </li>
        <li>
          <span style={{ transform: "translateY(2px)", marginRight: ".8rem" }}>
            <img
              src={archive}
              className="sidebar__projects-setting--archived"
            />
          </span>
          <span>Archive</span>
        </li>
        <li>
          <span style={{ transform: "translateY(2px)", marginRight: ".8rem" }}>
            <img src={color} className="sidebar__projects-setting--color" />
          </span>
          <span>Change Color</span>
        </li>
      </ul>
    </Overlay>
  );
};

export default SettingOverlay;
