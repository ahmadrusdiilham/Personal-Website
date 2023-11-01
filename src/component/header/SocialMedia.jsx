import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/ahmad-rusdi-ilham-a89932150/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ahmadrusdiilham">
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
