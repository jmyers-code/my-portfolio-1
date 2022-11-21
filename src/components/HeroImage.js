import React from "react";
import "../style/HeroImage.css";
import IntroImg from "../assets/hero1.png";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-img" src={IntroImg} alt="HeroImage" />
      </div>
      <div className="hero-content">
        <p>Hi, I am a Freelancer</p>
        <h1>FullStack Developer</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
