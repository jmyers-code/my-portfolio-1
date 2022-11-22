import "../style/AboutContent.css";
import { Link } from "react-router-dom";
import React from "react";
import Project1 from "../assets/project4.jpg";
import Project2 from "../assets/project5.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a fullstack developer. I create responsive secure website and web
          apps, mobile app and API.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Project1} alt="image" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={Project2} alt="image" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
