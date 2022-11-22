import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <Hero heading="ABOUT." text="I am your friendly fullstack developer." />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
