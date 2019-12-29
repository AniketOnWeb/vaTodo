import React from "react";
import SignOut from "../../../assets/svg/signout.svg";
import firebase from "../../Firebase/firebase";
import { withRouter } from "react-router-dom";

const Logout = ({ history }) => {
  async function signOut() {
    await firebase.logout();
    history.replace("/register");
  }

  return (
    <img
      src={SignOut}
      alt="Logout"
      onClick={signOut}
      className="navbar__elements navbar__elements-setting"
    />
  );
};

export default withRouter(Logout);
