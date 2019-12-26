import React, { useState } from "react";
import styled from "styled-components";
import firebase from "../../Firebase/firebase";
import brand from "../../../assets/svg/brand.svg";
import { withRouter } from "react-router-dom";

const Side = styled.div`
  width: 24vw;
  background-color: var(--color-main);
  height: calc(100vh);
`;

const Sidebar = ({ history }) => {
  //   async function Logout() {
  //     await firebase.logout();
  //     history.push("/register");
  //   }

  return (
    <Side>
      <img src={brand} className="sidebar-brand" />
    </Side>
  );
};

export default withRouter(Sidebar);
