import "./footer.css";
import logoFooter from "../../assets/logoFooter.svg";

export default function Footer() {
  return (
    <footer class="footer">
      <img src={logoFooter} alt="Logo Kasa" class="logoFooter" />
      <p class="textFooter">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
