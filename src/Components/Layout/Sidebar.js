import React, { useState, useEffect } from "react";
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
import { useSelectedProjectValue } from "../../Contexts";
import { useSidebarValue } from "../../Contexts";

const Side = styled.div`
  width: 33rem;
  background-color: var(--color-main);
  height: calc(100vh);
  text-align: center;

  @media ${props => props.theme.MediaQueries.medium} {
    /* position: absolute; */
    /* transform: translate(-1rem, 62px); */
  }
`;

const Generic = styled.div`
  margin-top: 4.5rem;

  .sidebar__generic-container {
    margin-left: -8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Middle = styled.div`
  margin-top: 4.5rem;
  cursor: pointer;
  width: 33rem;

  .contain {
    margin-left: -7rem;
  }
`;
const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Sidebar = () => {
  const [active, setActive] = useState("inbox");
  const [showProject, setshowProject] = useState(true);
  const { setSelectedProject } = useSelectedProjectValue();
  const {
    showSidebar,
    setShowSidebar,
    bigScreen,
    setBigScreen,
    activeClass,
    setActiveClass
  } = useSidebarValue();

  // useEffect(() => {
  //   setShowSidebar(true);
  // }, [bigScreen]);

  return (
    showSidebar && (
      <Side className={activeClass ? "active-sidebar" : "no-active-sidebar"}>
        <Container>
          {/* Logo Sidebar */}
          <img src={brand} className="sidebar-brand" />

          {/* Genric Sidebar */}
          <Generic>
            <ul className="sidebar__generic">
              <li
                className={active === "inbox" ? "active" : undefined}
                onClick={() => {
                  setActive("inbox");
                  setSelectedProject("INBOX");
                }}
              >
                <div className="sidebar__generic-container">
                  <span>
                    <img src={FaInbox} alt="inbox-icon" />
                  </span>
                  <span className="sidebar__generic-text">Inbox</span>
                </div>
              </li>
              <li
                className={active === "today" ? "active" : undefined}
                onClick={() => {
                  setActive("today");
                  setSelectedProject("TODAY");
                }}
              >
                <div className="sidebar__generic-container">
                  <span>
                    <img src={FaToday} alt="today-icon" />
                  </span>
                  <span className="sidebar__generic-text">Today</span>
                </div>
              </li>
              <li
                className={active === "next__7" ? "active" : undefined}
                onClick={() => {
                  setActive("next__7");
                  setSelectedProject("NEXT__7");
                }}
              >
                <div
                  style={{ marginLeft: "-4rem" }}
                  className="sidebar__generic-container"
                >
                  <span>
                    <img src={FaNext7} alt="next7-icon" />
                  </span>
                  <span className="sidebar__generic-text">Next 7 Days</span>
                </div>
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
            <div className="contain">
              <span>
                <ExpandArrow
                  className={`sidebar__middle-icon ${
                    !showProject ? "hide-projects" : undefined
                  }`}
                />
              </span>
              <span className="sidebar__middle-text">Projects</span>
            </div>
          </Middle>

          {/* Displaying Projects */}
          {showProject && <Projects />}

          {/* Add Project Component */}
          <AddProjects />
        </Container>
      </Side>
    )
  );
};

export default Sidebar;
