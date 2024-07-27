import "./Banner-about.css";
import bannerabout from "../../assets/bannerabout.jpg";

export default function Banner_about() {
  return (
    <div className="Banner-about">
      <div className="img2_container"></div>
      <img src={bannerabout} alt="ma baniere about " className="Banner_img" />
    </div>
  );
}
