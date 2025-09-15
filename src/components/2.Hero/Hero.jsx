import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  {
    src: "/assets/4.jpg",
    title: "Welcome to Our Company",
    subtitle: "We build your dreams",
    description: "Your vision, our mission",
    link: "/project3",
  },
  {
    src: "/assets/5.jpg",
    title: "Our Services",
    subtitle: "Quality Construction",
    description: "We offer a wide range of construction services.",
    link: "/project1",
  },
  {
    src: "/assets/6.jpg",
    title: "Our Projects",
    subtitle: "Innovative Designs",
    description: "Explore our latest projects and innovations.",
    link: "/project2",
  },
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <section id="home" className="hero">
      <div
        className="hero-slider">
          {images.map((img, index) => (
            <div
              key={index}
              className={`hero-slide${index === currentImage ? " active" : ""}`}
              style={{
                backgroundImage: `url(${img.src})`,
              }}
            >
              <div className="hero-description">
                <p>{img.description}</p>
                <a href={img.link} className="details-button">Read more</a>
              </div>
              </div>
          ))}
          </div>
        <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1 className="hero-title">
              Planning, Designing, and Building Your Future
            </h1>
            <p className="hero-subtitle">ABS Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h2>{images[currentImage].subtitle}</h2>
                  <a href="#contact" className="cta-button" onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  >
                    Contact us
                  </a>
                </div>
              
        <div className="hero-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`hero-dot${index === currentImage ? " active" : ""}`}
              onClick={() => setCurrentImage(index)}
            ></span>
          ))}
        </div>
      </section>
    );
};

export default Hero;
