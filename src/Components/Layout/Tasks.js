import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Navbar from "./Navbar";
import TaskContent from "./TaskContent";

const TaskComponent = styled.div`
  min-width: 76vw;
  height: calc(100vh);
`;

const Tasks = ({ history }) => {
  return (
    <>
      <TaskComponent>
        <Navbar />
        <TaskContent />
      </TaskComponent>
    </>
  );
};

export default withRouter(Tasks);
