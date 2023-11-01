import React from "react";
import "./footer.css";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        ILHAM
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.instagram.com/mbem.ilham/">
          <BsInstagram />
        </a>
        <a href="https://github.com/ahmadrusdiilham">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/ahmad-rusdi-ilham-a89932150/">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Ahmad Rusdi Ilham</small>
      </div>
    </footer>
  );
};

export default Footer;
