import React from "react";
// import Color from "color";

//styles
import "./header.scss";

// assets
import githubIcon from "../../images/github_icon.png";

const Header = ({ isDarkBackground }) => {
  return (
    <header>
      <h1 className="logo">
        Box
        <br />
        Shadows
      </h1>
      {/* <p className="subtitle" style={isDarkBackground ? {color: Color('#777').negate()}: {}}>Handpicked Box Shadows</p> */}
      <h2>Handpicked box shadows from popular websites</h2>
      <a
        className="add-new-button"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/nakulrathore/Box-Shadows#contribute"
      >
        <img className="github-icon" src={githubIcon} alt="" /> Submit new
      </a>
    </header>
  );
};

export default Header;
