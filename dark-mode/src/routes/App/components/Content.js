import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/_app.scss";
import "../../../styles/_dark-mode.scss";

const Content = () => {
  const [mode, setMode] = useState(true);
  const switchToDarkMode = () => {
    setMode(!mode);
  };
  return (
    <div className={mode === false ? "dark-mode app" : "app"}>
      <h1 className="title">
        {mode === true
          ? "Make me dark with the moon icon"
          : "Make me light with the sun icon"}
      </h1>{" "}
      <button
        className="app__dark-mode-btn icon level-right"
        onClick={() => switchToDarkMode()}
      >
        <FontAwesomeIcon
          icon={mode === true ? faMoon : faSun}
          color={mode === true ? "#000000" : "#FFA500"}
        />
      </button>
      <Link to="/" className="app__dark-mode">
        Back to Home
      </Link>
    </div>
  );
};

export { Content };
