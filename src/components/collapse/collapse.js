import "./collapse.css";

import arrowDown from "../../assets/arrowDown.svg";

export default function Collapse() {
  return (
    <section className="collapseAboutContainer">
      <div className="collapseContainer">
        <div className="title">
          Fiabilité
          <img
            src={arrowDown}
            className="iconDown"
            alt="arrow down"
            role="button"
          />
        </div>
      </div>

      <div className="text">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </div>

      <div className="collapseContainer">
        <div className="title">
          Respect
          <img
            src={arrowDown}
            className="iconDown"
            alt="arrow down"
            role="button"
          />
        </div>
      </div>

      <div className="text">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </div>

      <div className="collapseContainer">
        <div className="title">
          Service
          <img
            src={arrowDown}
            className="iconDown"
            alt="arrow down"
            role="button"
          />
        </div>
      </div>

      <div className="text">
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        moindre question.
      </div>

      <div className="collapseContainer">
        <div className="title">
          Sécurité
          <img
            src={arrowDown}
            className="iconDown"
            alt="arrow down"
            role="button"
          />
        </div>
      </div>

      <div className="text">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </div>
    </section>
  );
}
