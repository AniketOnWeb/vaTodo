import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Tasks from "./Tasks";

const Cont = styled.div`
  display: grid;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  grid-template-columns: 1fr auto;
  max-width: 100vw;
  margin: auto;
`;

const Content = () => {
  return (
    <>
      <Cont>
        <Sidebar />
        <Tasks />
      </Cont>
    </>
  );
};

export default Content;
