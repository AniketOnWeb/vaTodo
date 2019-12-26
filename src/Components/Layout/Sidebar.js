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
  const [inpu, setinpu] = useState("");

  async function addTask() {
    try {
      await firebase.addQuote(inpu);
    } catch (error) {
      alert(error.message);
    }
  }

  async function Logout() {
    await firebase.logout();
    history.push("/register");
  }

  console.log(setinpu);
  return (
    <Side>
      <img src={brand} className="sidebar-brand" />
      <input type="text" value={inpu} onChange={e => setinpu(e.target.value)} />
      <button onClick={addTask}>Click</button>
      <button onClick={Logout}>Logout</button>
    </Side>
  );
};

export default withRouter(Sidebar);
