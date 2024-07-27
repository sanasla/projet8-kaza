import "./banner.css"
import bannerhome from "../../assets/bannerhome.jpg";

export default function Banner() {
  return (
    <section className="banner">
      <div className="imgContainerHome">
        <img src={bannerhome} alt="bord de la mer" className="bannerImg" />

        <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
      </div>
    </section>
  );
}
