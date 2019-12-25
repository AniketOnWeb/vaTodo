import React from "react";
import firebase from "../Firebase/firebase";
import app from "../Firebase/firebase";
import { withRouter } from "react-router-dom";

const Main = ({ history }) => {
  if (!firebase.getCurrentUser()) {
    alert("please Login first");
    history.replace("./register");
    return null;
  }

  async function Logout() {
    await firebase.logout();
    history.push("/");
  }

  const name = firebase.getCurrentUsername();
  return (
    <>
      <div>{name}</div>
      <button onClick={Logout}>Logout</button>
    </>
  );
};

export default withRouter(Main);
