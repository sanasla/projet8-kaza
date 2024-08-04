import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AccomodationContent from "../components/AccomodationContent/AccomodationContent";
import "../styles/index.css";

export default function Accomodation() {
  return (
    <div className="mainContainer">
      <div className="container">
        <Header />
       <AccomodationContent />
      </div>

      <Footer></Footer>
    </div>
  );
}