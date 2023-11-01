import React from "react";
import "./about.css";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { FiTool } from "react-icons/fi";
import ReactLogo from "../../assets/react.png";
import Vue from "../../assets/vue.js.png";
import Redux from "../../assets/redux.png";
import Pinia from "../../assets/Pinialogo.png";
import Html from "../../assets/html.png";
import CSS from "../../assets/css.png";
import Express from "../../assets/backend/express.png";
import Jest from "../../assets/backend/jest.png";
import JWT from "../../assets/backend/jwt.png";
import MongoDB from "../../assets/backend/mongoDB.png";
import Node from "../../assets/backend/node.js.png";
import Postgres from "../../assets/backend/postgres.png";
import Sequelize from "../../assets/backend/sequelize.png";
import Supertest from "../../assets/backend/supertest.png";
import GitHub from "../../assets/backend/GitHub.png";
import Figma from "../../assets/Figma.png";
import Postman from "../../assets/postman.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <p className="text-center mb-10">
          I am a Fullstack Developer who recently successfully completed the
          Hakctiv8 bootcamp. During the program, my skills significantly
          improved in developing JavaScript applications on a full-stack basis.
          I am committed to utilizing my enhanced skills and knowledge to drive
          innovation and create a positive impact. The most important takeaway
          from attending the bootcamp was discovering the best learning method
          for myself, enabling me to learn new concepts at a faster pace than
          before.
        </p>
        <div className="about_cards">
          <article className="about_card">
            <div className="icon_and_title">
              <BsDisplay className="about_icons" />
              <h3>Front End</h3>
            </div>

            <div className="container_logo">
              <img className="logo" src={ReactLogo} alt="" />
              <img className="logo" src={Vue} alt="" />
              <img className="logo" src={Redux} alt="" />
              <img className="logo" src={Pinia} alt="" />
              <img className="logo" src={Html} alt="" />
              <img className="logo" src={CSS} alt="" />
            </div>
          </article>
          <article className="about_card">
            <div className="icon_and_title">
              <AiOutlineSetting className="about_icons" />
              <h3>Back End</h3>
            </div>
            <div className="container_logo">
              <img className="logo" src={Express} alt="" />
              <img className="logo" src={Node} alt="" />
              <img className="logo" src={Postgres} alt="" />
              <img className="logo" src={Sequelize} alt="" />
              <img className="logo" src={MongoDB} alt="" />
              <img className="logo" src={JWT} alt="" />
              <img className="logo" src={Jest} alt="" />
              <img className="logo" src={Supertest} alt="" />
            </div>
          </article>
          <article className="about_card">
            <div className="icon_and_title">
              <FiTool className="about_icons" />
              <h3>Tools</h3>
            </div>
            <div className="container_logo">
              <img className="logo" src={Figma} alt="" />
              <img className="logo" src={GitHub} alt="" />
              <img className="logo" src={Postman} alt="" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
