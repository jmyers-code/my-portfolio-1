import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import PricingCard from "../components/PricingCard";
import Project from "../components/Project";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <Hero heading="PROJECTS." text="Some of my most recent work." />
      <Project />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Projects;
