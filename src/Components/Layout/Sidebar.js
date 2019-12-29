import React, { useState } from "react";
import styled from "styled-components";
import brand from "../../../assets/svg/brand.svg";

//Sidebar Generic
import FaInbox from "../../../assets/svg/inbox.svg";
import FaToday from "../../../assets/svg/today.svg";
import FaNext7 from "../../../assets/svg/next7.svg";
import { ExpandArrow } from "../../../assets/svg/all-icons";

//ADD Project Component
import { AddProjects } from "../AddProjects";
import { Projects } from "../Projects";

const Side = styled.div`
  width: 33rem;
  background-color: var(--color-main);
  height: calc(100vh);
  text-align: center;
`;

const Generic = styled.div`
  margin-top: 4.5rem;
`;

const Middle = styled.div`
  margin-top: 4.5rem;
  margin-left: -7rem;
  cursor: pointer;
`;

const Sidebar = () => {
  const [active, setActive] = useState("inbox");
  const [showProject, setshowProject] = useState(true);

  //   async function Logout() {
  //     await firebase.logout();
  //     history.push("/register");
  //   }

  return (
    <Side>
      {/* Logo Sidebar */}
      <img src={brand} className="sidebar-brand" />

      {/* Genric Sidebar */}
      <Generic>
        <ul className="sidebar__generic">
          <li
            className={active === "inbox" ? "active" : undefined}
            onClick={() => {
              setActive("inbox");
            }}
          >
            <span>
              <img src={FaInbox} alt="inbox-icon" />
            </span>
            <span className="sidebar__generic-text">Inbox</span>{" "}
          </li>
          <li
            className={active === "today" ? "active" : undefined}
            onClick={() => {
              setActive("today");
            }}
          >
            <span>
              <img src={FaToday} alt="today-icon" />
            </span>
            <span className="sidebar__generic-text">Today</span>
          </li>
          <li
            className={active === "next__7" ? "active" : undefined}
            onClick={() => {
              setActive("next__7");
            }}
          >
            <span>
              <img src={FaNext7} alt="next7-icon" />
            </span>
            <span className="sidebar__generic-text">Next 7 Days</span>
          </li>
        </ul>
      </Generic>

      {/* Middle Sidebar */}
      <Middle
        className="sidebar__middle"
        onClick={() => {
          setshowProject(!showProject);
        }}
      >
        <span>
          <ExpandArrow
            className={`sidebar__middle-icon ${
              !showProject ? "hide-projects" : undefined
            }`}
          />
        </span>
        <span className="sidebar__middle-text">Projects</span>
      </Middle>

      {/* Displaying Projects */}
      {showProject && <Projects />}

      {/* Add Project Component */}
      <AddProjects />
    </Side>
  );
};

export default Sidebar;
