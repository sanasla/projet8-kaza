import "./banner-about.css";
import bannerabout from "../../assets/bannerabout.jpg";

export default function BannerAbout() {
  return (
    <div>
      <section className="banner">
        <div class="imgContainer">
          <img src={bannerabout} alt="chaine de montagnes enneigée" class="img" />
        </div>
      </section>
    </div>
  );
}
