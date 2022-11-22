import "../style/Hero.css";
import React from "react";
import PropTypes from "prop-types";

const Hero = ({ heading, text }) => {
  return (
    <div className="hero-image">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

Hero.propTypes = {
  text: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default Hero;
