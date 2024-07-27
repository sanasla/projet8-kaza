import "./header.css";
import logoKasa from "../../assets/logoKasa.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logoKasa} alt="Logo Kasa" className="logoHeader" />

      <nav className="navHeader">
        <a className="navHome" href="/">
          Accueil
        </a>
        <a className="navAbout" href="/about">
          À propos
        </a>
      </nav>
    </header>
  );
}