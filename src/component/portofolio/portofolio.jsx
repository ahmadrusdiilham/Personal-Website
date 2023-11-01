import React from "react";
import "./portofolio.css";
import Porto1 from "../../assets/portofolio/RNR.jpg";
import Porto2 from "../../assets/portofolio/Hokben-web.jpg";
import Porto3 from "../../assets/portofolio/hokben-mobile.jpg";

const data = [
  {
    id: 1,
    image: Porto1,
    title: "Rent N Roll",
    description:
      "Developed a vehicle rental application for both renting vehicles and offering your own vehicle for rent using React Native, Node.js, Postgres, Expo, Multer, Cloudinary, and Midtrans.",
    github: "https://github.com/ThessarTS/RentNRoll",
    demo: "https://drive.google.com/file/d/1Lg9YXNuURYAq6v5x2cUAS5LDdGxAfohX/view?usp=sharing",
  },
  {
    id: 2,
    image: Porto2,
    title: "Hokben",
    description:
      "Replicated the Hokben Website using React.js, Express.js, PostgreSQL, Redux, Redux Thunk, along with a Content Management System (CMS).",
    github: "https://github.com/ahmadrusdiilham/Hokben-Clone",
    demo: "https://github.com/ahmadrusdiilham/Hokben-Clone",
  },
  {
    id: 3,
    image: Porto3,
    title: "Hokben-mobile-app",
    description:
      "Developed an online fast food mobile application using React Native, Express.js, GraphQL, Microservices, and both MongoDB and Postgres databases.",
    github: "https://github.com/ahmadrusdiilham/Hokben-mobile-app",
    demo: "https://github.com/ahmadrusdiilham/Hokben-mobile-app",
  },
  {
    id: 4,
    image: Porto1,
    title: "MovLix",
    description:
      "Created a website for browsing movie lists and purchasing movies utilizing Vue.js, Express.js, Pinia, Midtrans, and Tailwind CSS.",
    github: "https://github.com/ahmadrusdiilham/MovLix-ilham",
    demo: "https://github.com/ahmadrusdiilham/MovLix-ilham",
  },
];
function Portofolio() {
  return (
    <section id="portofolio" className="porto">
      <h5>My Recent Project</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio_container">
        {data.map((el) => {
          return (
            <article key={el.id} className="portofolio_item">
              <div className="portofolio_item-image">
                <img src={el.image} alt="" />
              </div>
              <h3>{el.title}</h3>
              <h4 className="description mb-5">{el.description}</h4>
              <div className="portofolio_item-cta">
                <a href={el.github} className="btn">
                  Code Source
                </a>
                <a href={el.demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portofolio;
