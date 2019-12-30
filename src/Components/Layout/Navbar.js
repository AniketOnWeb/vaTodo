import React, { useState } from "react";
import styled from "styled-components";
import DarkMode from "../../../assets/svg/dark.svg";
// import { Settings } from "../Settings";
import Logout from "../Auth/Logout";
import QuickAdd from "../NavbarEle/QuickAdd";

const Nav = styled.div`
  padding: 2.5rem 5rem 2rem 6rem;
  text-align: right;
  border-bottom: 1px solid #1abc9c33;
`;

const Navbar = () => {
  return (
    <Nav>
      <QuickAdd />
      <img
        src={DarkMode}
        alt="dark-mode"
        className="navbar__elements navbar__elements-dark"
      />
      <Logout />
    </Nav>
  );
};

export default Navbar;
