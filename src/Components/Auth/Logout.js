import React from "react";
import SignOut from "../../../assets/svg/signout.svg";
import SignOut2 from "../../../assets/svg/signout2.svg";
import firebase from "../../Firebase/firebase";
import { withRouter } from "react-router-dom";

const Logout = ({ history }) => {
  async function signOut() {
    await firebase.logout();
    history.replace("/register");
  }

  return (
    <img
      // style={{ width: "1.6rem" }}
      src={SignOut2}
      alt="Logout"
      onClick={signOut}
      className="navbar__elements navbar__elements-setting"
    />
  );
};

export default withRouter(Logout);
