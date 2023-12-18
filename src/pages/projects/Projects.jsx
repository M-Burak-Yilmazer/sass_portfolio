import React from "react";
import "./_projects.scss";
import img1 from "../../img/project-1.jpg";
import img2 from "../../img/project-2.jpg";
import img3 from "../../img/project-3.jpg";
import img4 from "../../img/project-4.jpg";
import img5 from "../../img/project-5.jpg";
import img6 from "../../img/project-6.jpg";

const Projects = () => {
  return (
    <div className="project-bgImg-container">
      <div className="projects__bio-image">
        <h1>My Projects</h1>
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
        </div>
      </main>
    </div>
  );
};

export default Projects;
