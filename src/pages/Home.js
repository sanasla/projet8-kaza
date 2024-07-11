import React from "react";
import logo from "../assets/Kasa.svg";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <img src={logo} alt="Logo Kasa" />
      <h1>KASA TEST</h1>

      <Navigation />
    </div>
  );
}

export default Home;
