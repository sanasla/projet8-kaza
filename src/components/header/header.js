import "./header.css";
import logoKasa from "../../assets/logoKasa.svg";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <img src={logoKasa} alt="Logo Kasa" class="logoHeader" />
      </h1>

      <div className="menu">
        <a href="/accueil" className="accueil">
          Accueil
        </a>
        <a href="/about" className="about">
          À propos
        </a>
      </div>
    </header>
  );
}
