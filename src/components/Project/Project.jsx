import React from "react";
import "./Project.css";

const Project = ({ title, description, image }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project__image" />
      <p className="project__description">{description}</p>
    </div>
  );
};

export default Project;
