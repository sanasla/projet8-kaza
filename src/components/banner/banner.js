import "./banner.css";
import logoBanner from "../../assets/banner_home.png";

export default function Banner() {
  return (
    <section className="banner">
      <div className="Banner_home">
        <img src={logoBanner} alt="bord de la mer" class="Banner_img" />

        <h1 className="Banner_title">Chez vous, partout et ailleurs</h1>
      </div>
    </section>
  );
}
