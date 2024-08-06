import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import "../styles/index.css";

function Home() {
  return (
    <div className="mainContainer">
      <div className="container">
        <Header />
        <Banner />
        <Gallery />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
