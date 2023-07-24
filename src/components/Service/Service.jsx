import React from "react";
import "./Service.css";

const Service = ({ title, description, image }) => {
  return (
    <div className="service">
      <img src={image} alt={title} className="service__image" />
      <h2 className="service__title">{title}</h2>
      <p className="service__description">{description}</p>
    </div>
  );
};

export default Service;
