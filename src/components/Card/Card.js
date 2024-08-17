import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
  return (
    <div className="cards">
      <Link to={`/accomodation/${id}`} className="card">
        <img className="card_img" src={cover} alt={title} />
        <h2 className="card_title">{title}</h2>
      </Link>
    </div>
  );
}
