import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "./Firebase/firebase";
import Register from "./Components/Auth/Register";
import Main from "./Sections/Main";

export const App = () => {
  const [firbaseInitialized, setFirbaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirbaseInitialized(val);
    });
  });

  return firbaseInitialized !== false ? (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  ) : (
    <div className="loader1"></div>
  );
};
