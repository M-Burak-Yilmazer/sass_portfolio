import React from "react";
import "./_projects.scss";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";
import img5 from "../../img/5.png";
import img6 from "../../img/6.png";
import img7 from "../../img/7.png";
import img8 from "../../img/8.png";
import img9 from "../../img/9.png";
import img10 from "../../img/10.png";
import img11 from "../../img/11.png";
import img12 from "../../img/12.png";

const Projects = () => {
  return (
    <div className="project-bgImg-container">
      <div className="projects__bio-image">
        <h1>GALLERY</h1>
      </div>
      {/* PROJECT MAIN */}
      <main className="projects">
        <div className="projects__items">
          <div className="projects__item">
            <img src={img1} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={img2} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={img3} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={img4} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={img5} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={img6} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={img7} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={img8} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={img9} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={img10} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={img11} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={img12} alt="My Project" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
