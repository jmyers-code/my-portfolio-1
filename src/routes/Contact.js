import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Hero heading="CONTACT." text="Let's have a chat." />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
