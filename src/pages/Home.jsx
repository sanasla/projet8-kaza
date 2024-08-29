import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import "../styles/index.css";
import homeBannerImg from "../assets/bannerhome.jpg";

function Home() {
  return (
    <div className="mainContainer">
      <div className="container">
        <Header />
        <Banner>
        <img
              src={homeBannerImg}
              alt="cote rocheuse bord de mer"
              className="bannerImg"
            />
            <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
        </Banner>
        <Gallery />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
