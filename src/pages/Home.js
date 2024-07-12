import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import "../styles/Home.css";

function Home() {
  return (
    <div className="mainContainer">
      <Header />

      <div className="container">
        <Banner />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
