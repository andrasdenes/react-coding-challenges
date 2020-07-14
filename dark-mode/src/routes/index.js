import React from "react";
import { App, Content } from "./App";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/content">
          <Content />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

// Use something like react-router-dom to manage multiple pages/routes

export default RouterComponent;
