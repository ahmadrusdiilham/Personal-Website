import React from "react";
import "./header.css";
import Cv from "./Cv";
import ME from "../../assets/foto.png";
import SocialMedia from "./SocialMedia";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ahmad Rusdi Ilham</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cv />
        <SocialMedia />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
