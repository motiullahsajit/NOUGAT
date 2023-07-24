import React from "react";
import Project from "../Project/Project";
import ProjectsData from "./ProjectsData";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="projects__heading">Our Projects</h1>
      <div className="projects__container">
        {ProjectsData.map((service, index) => (
          <Project
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
