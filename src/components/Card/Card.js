import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/accomodation/${id}`} className="card">
      <img className="cardImg" src={cover} alt={title} />
      <h2 className="cardTitle">{title}</h2>
    </Link>
  );
}
