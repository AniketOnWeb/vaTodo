import React from "react";
import firebase from "../Firebase/firebase";
import app from "../Firebase/firebase";
import { withRouter } from "react-router-dom";
import Content from "../Components/Layout/Content";

const Main = ({ history }) => {
  // if (!firebase.getCurrentUser()) {
  //   alert("please Login first");
  //   history.replace("./register");
  //   return null;
  // }

  // async function Logout() {
  //   await firebase.logout();
  //   history.push("/");
  // }
  // // const name = firebase.getCurrentUsername();

  return (
    <>
      <Content />
    </>
  );
};

export default withRouter(Main);
