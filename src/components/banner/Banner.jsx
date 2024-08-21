import React from 'react'
import { useLocation } from 'react-router-dom'
import homeBannerImg from "../../assets/bannerhome.jpg";
import aboutBannerImg from "../../assets/bannerabout.jpg";

import "./banner.css"

export default function Banner() {
  const path = useLocation().pathname // on utilise ce hook pour savoir ou l'on se trouve, sur quelle page, afin de pouvoir afficher la bannière appropriée
  const location = path.split('/')[1]

  return (
    // on utilise ici une condition ternaire avec :
    <div>
      {location === 'about' ? ( // on demande si l'on se trouve sur la page "à propos" alors on affiche ceci
        <section className="banner">
          <div className="imgContainerAbout">
            <img
              src={aboutBannerImg}
              alt="chaine de montagnes enneigée"
              className="bannerImg"
            />
          </div>
        </section>
      ) : (
        // si on ne se trouve pas sur la page "à propos" alors on affiche cela
        <section className="banner">
          <div className="imgContainerHome">
            <img
              src={homeBannerImg}
              alt="cote rocheuse bord de mer"
              className="bannerImg"
            />
            <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
          </div>
        </section>
      )}
    </div>
  )
}