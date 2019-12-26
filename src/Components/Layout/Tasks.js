import React, { useEffect, useState } from "react";
import styled from "styled-components";
import firebase from "../../Firebase/firebase";
import { withRouter } from "react-router-dom";

const TaskComponent = styled.div`
  min-width: 76vw;
  height: calc(100vh);
`;

const Tasks = ({ history }) => {
  return (
    <>
      <TaskComponent>
        <div>hi</div>
      </TaskComponent>
    </>
  );
};

export default withRouter(Tasks);
