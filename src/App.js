import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./Components/Auth/Register";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
      </Switch>
    </Router>
  );
};
