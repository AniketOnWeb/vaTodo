import React, { useState } from "react";
import styled from "styled-components";
import QuickAdd from "../../../assets/svg/quick-add.svg";
import DarkMode from "../../../assets/svg/dark.svg";
// import { Settings } from "../Settings";
import Logout from "../Auth/Logout";

const Nav = styled.div`
  padding: 2.5rem 5rem 2rem 6rem;
  text-align: right;
  border-bottom: 1px solid #1abc9c33;
`;

const Navbar = () => {
  return (
    <Nav>
      <img
        src={QuickAdd}
        alt="quick-add"
        className="navbar__elements navbar__elements-quick"
      />
      <img
        src={DarkMode}
        alt="dark-mode"
        className="navbar__elements navbar__elements-dark"
      />
      <Logout />
      {/* <Settings /> */}
    </Nav>
  );
};

export default Navbar;
