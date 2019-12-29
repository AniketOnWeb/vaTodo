import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "./Firebase/firebase";
import Register from "./Components/Auth/Register";
import Main from "./Sections/Main";
import {
  ProjectsProvider,
  SelectedProjectProvider,
  SelectedColorProvider
} from "./Contexts";

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
        <SelectedColorProvider>
          <SelectedProjectProvider>
            <ProjectsProvider>
              <Route exact path="/" component={Main} />
              <Route exact path="/register" component={Register} />
            </ProjectsProvider>
          </SelectedProjectProvider>
        </SelectedColorProvider>
      </Switch>
    </Router>
  ) : (
    <div className="loader1"></div>
  );
};
