import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./common/containers/App";
import "./styles/_main.scss";
import RouterComponent from "./routes/index";

ReactDOM.render(
  <AppContainer>
    <RouterComponent />
  </AppContainer>,
  document.getElementById("root")
);
