import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";

import "../styles/Home.css";

function Home() {
  return (
    <div className="mainContainer">
      <Header />

      <div className="container">
        <Banner />
        <Gallery />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
