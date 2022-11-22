import React from "react";
import NavBar from "../components/NavBar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import Project from "../components/Project";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroImage />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;
