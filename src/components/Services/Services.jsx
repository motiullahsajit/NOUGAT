import React from "react";
import Service from "../Service/Service";
import "./Services.css";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Creating stunning and functional websites tailored to your needs.",
    image:
      "https://www.seekpng.com/png/detail/279-2795748_web-development-services-software-developers.png",
  },
  {
    title: "Graphic Design",
    description:
      "Designing eye-catching graphics that leave a lasting impression.",
    image: "https://i.ibb.co/Wknz0tZ/Graphic-Design-Icon.png",
  },
  {
    title: "Social Media Marketing",
    description:
      "Crafting effective strategies to enhance your online presence.",
    image:
      "https://explosiondigital.com/wp-content/uploads/2022/03/main-qimg-e7f1f6b17dec7e81974fb65f5cfca813.png",
  },
  {
    title: "Video Editing",
    description:
      "Editing and producing captivating videos that tell your story.",
    image: "https://i.ibb.co/0981Z5S/Video-Editing.png",
  },
  {
    title: "Account Recovery",
    description:
      "Recovering lost accounts on Gmail, Instagram, Facebook, Mi, and Apple.",
    image: "https://i.ibb.co/269g4x0/Account-Recovery.png",
  },
  {
    title: "Network Lock",
    description:
      "Unlocking network locks on Apple, Nokia, Mi, Realme, Oppo, and Samsung devices.",
    image:
      "https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-vector-lock-icon-png-image_1028350.jpg",
  },
];

const Services = () => {
  return (
    <div className="services" id="services">
      <h1 className="services__heading">Our Services</h1>
      <div className="services__container">
        {servicesData.map((service, index) => (
          <Service
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

export default Services;
