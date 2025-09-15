import React from "react";
import "./Service.css";

const Service = () => {
  const services = [
    {
      title: "Design and Planning",
      description: "We offer a wide range of construction services to meet your needs.",
      image: "/assets/1.jpg",
    },
    {
      title: "Structural Work",
      description: "Our team specializes in structural work, ensuring safety and durability.",
      image: "/assets/2.jpg",
    },
    {
      title: "Project Management",
      description: "We provide expert project management to keep your project on track and within budget.",
      image: "/assets/3.jpg",
    },
  ];

  return (
    <section className="service">
      <div className="service_content">
        <h2 className="service_title">Our Services</h2>
        {services.map((service, index) => (
          <div key={index} className="service_item_content">
            <img src={service.image} alt={service.title} className="service_image" />
            <h3 className="service_item_title">{service.title}</h3>
            <p className="service_item_description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
