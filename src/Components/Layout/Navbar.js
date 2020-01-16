import React, { useState } from "react";
import styled from "styled-components";
import DarkMode from "../../../assets/svg/dark.svg";
import quickAdd from "../../../assets/svg/quick-add.svg";
import Logout from "../Auth/Logout";
import QuickAdd from "../NavbarEle/QuickAdd";
import Menu from "../../../assets/svg/MENU.svg";
import Sidebar from "../Layout/Sidebar";
// import DarkMode from "../DarkMode";

import { CSSTransition } from "react-transition-group";
import { useSidebarValue } from "../../Contexts";

const Nav = styled.div`
  padding: 2.5rem 5rem 2rem 5rem;
  display: flex;
  border-bottom: 1px solid #1abc9c33;
  flex-direction: row;
  justify-content: space-between;

  @media ${props => props.theme.MediaQueries.medium} {
    padding: 2rem;
  }

  div:first-child {
    align-self: center;
  }

  .navbar-elements-menu {
    display: none;
    cursor: pointer;
    align-self: center;

    @media ${props => props.theme.MediaQueries.medium} {
      display: block;
    }
  }
`;

const Navbar = () => {
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const {
    bigScreen,
    setBigScreen,
    activeClass,
    setActiveClass
  } = useSidebarValue();

  return (
    <>
      <Nav>
        <div>
          <img
            src={Menu}
            alt="menu-icon"
            className="navbar-elements-menu"
            onClick={() => {
              setTimeout(() => {
                setActiveClass(!activeClass);
              });
            }}
          />
        </div>

        <div style={{ display: "flex" }}>
          <img
            src={quickAdd}
            alt="quick-add"
            className="navbar__elements navbar__elements-quick"
            onClick={() => setShowQuickNav(!showQuickNav)}
          />

          {/* <DarkMode darkTheme={darkTheme} setDarkTheme={setDarkTheme} /> */}
          <img
            style={{ marginRight: "3rem", width: "2rem" }}
            src={DarkMode}
            alt=""
          />

          <Logout />
        </div>

        <CSSTransition
          in={showQuickNav}
          classNames="add-task__modal__wrapper"
          timeout={100}
          unmountOnExit
          onEnter={() => setShowQuickNav(true)}
          onExit={() => setShowQuickNav(false)}
        >
          <QuickAdd
            showQuickNav={showQuickNav}
            setShowQuickNav={setShowQuickNav}
          />
        </CSSTransition>
      </Nav>
    </>
  );
};

export default Navbar;
