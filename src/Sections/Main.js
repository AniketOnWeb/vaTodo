import React from "react";
import firebase from "../Firebase/firebase";
import app from "firebase/app";
import { withRouter } from "react-router-dom";
import Content from "../Components/Layout/Content";
import {
  ProjectsProvider,
  SelectedProjectProvider,
  SelectedColorProvider
} from "../Contexts";

const Main = ({ history }) => {
  if (!firebase.getCurrentUser()) {
    alert("please Login first");
    history.replace("./register");
    return null;
  }

  return (
    <SelectedProjectProvider>
      <SelectedColorProvider>
        <ProjectsProvider>
          <Content />
        </ProjectsProvider>
      </SelectedColorProvider>
    </SelectedProjectProvider>
  );
};

export default withRouter(Main);
