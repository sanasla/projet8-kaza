import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner_about from "../components/Banner-about/Banner-about";
import Collapse from "../components/Collapse/Collapse";

import "../styles/about.css";

export default function About() {
  const abouts = [
    {
        "title": "Fiabilité",
        "text": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },

    {
        "title": "Respect",
        "text": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },

    {
        "title": "Service",
        "text": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },

    {
        "title": "Sécurité",
        "text": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ]

  return (
    <div className="about">
      <Header />
      <Banner_about />
      <section className="collapseAboutContainer">
        {abouts.map((about, index) => (
          <Collapse key={index} about={about} />
        ))}
      </section>
      <Footer />
    </div>
  );
}
