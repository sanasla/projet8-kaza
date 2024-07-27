import "./banner.css";
import bannerhome from "../../assets/bannerhome.jpg";

export default function Banner() {
  return (
    <section className="banner">
      <div className="Banner_home">
        <img src={bannerhome} alt="bord de la mer" className="Banner_img" />

        <h1 className="Banner_title">Chez vous, partout et ailleurs</h1>
      </div>
    </section>
  );
}
