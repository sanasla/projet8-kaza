import React from "react";
import logo from "../assets/Kasa.svg";
import Navigation from "../components/Navigation";

function About() {
  return (
    <div>
      <img src={logo} alt="Logo Kasa" />
      <h1>KASA À propos</h1>
      <Navigation />
    </div>
  );
}

export default About;
