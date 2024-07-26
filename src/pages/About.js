import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner_about from "../components/Banner-about/Banner-about";
import Collapse from "../components/Collapse/Collapse";

import "../styles/About.css";

export default function About() {
  return (
    <div className="About">
      <Header />
      <Banner_about />
      <Collapse />

      <Footer />
    </div>
  );
}
