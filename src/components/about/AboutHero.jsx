import React from "react";
import "./styles/AboutHero.css";

const AboutHero = () => {
    return (
      <div className="about-hero">
        <img src="../images/a.jpg" alt="Ishan Sharma" className="profile-img" />
        <h1>Hi, I'm Ishan Sharma</h1>
        <p className="hero-subtitle">
          A passionate web developer creating clean and modern websites.
        </p>
      </div>
    );
  };

export default AboutHero;
