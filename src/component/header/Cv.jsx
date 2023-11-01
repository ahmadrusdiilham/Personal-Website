import React from "react";
import CV from "../../assets/Ahmad Rusdi Ilham-Resume.pdf";
function Cv() {
  return (
    <div className="cv">
      <a className="btn" href={CV} download>
        Download
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
}

export default Cv;
