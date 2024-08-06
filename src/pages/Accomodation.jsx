import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import FilledStar from '../assets/FilledStar.svg'
import EmptyStar from '../assets/EmptyStar.svg'
import Error404 from '../components/Error404/Error404'
import Carrousel from '../components/Carousel/Carrousel'
import Collapse from '../components/Collapse/Collapse'
import '../styles/accomodation.css'
import { useNavigate } from "react-router-dom";

export default function Accomodation() {
  const navigate = useNavigate();
  const urlId = useParams().id 
  const [propertie, setPropertie] = useState()

  useEffect(() => {
    if (!urlId){
      navigate("/404");
    }
    fetch(`http://localhost:8080/api/properties/${urlId}`)
      .then((response) => response.json())
      .then((data) => {
        const names = data.host.name.split(' ')
        data.firstName = names[0]
        data.lastName = names[1]
        data.rateStar = []

        for (let s = 1; s <= 5; s++) {
          if (s <= data.rating) {
            data.rateStar[s] = true
          } else {
            data.rateStar[s] = false
          }
        }
        setPropertie(data)
      })
      .catch((error) => {
        console.log('error', error)
        navigate("/404");
      });
  })

  return (
    <div className="mainContainer">
      <div className="container">
        <Header />
        {propertie && (
          <section>
            <Carrousel data={propertie.pictures} />
            <div className="hostContainer">
              <div className="leftContainer">
                <div className="titleAccomodation">{propertie.title}</div>
                <div className="location">
                  {propertie.location}
                </div>
                <div className="tagsContainer">
                  {propertie.tags.map((tags) => (
                    <div className="tag" key={tags + urlId}>
                      {tags}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rightContainer">
                <div className="hostInfos">
                  <div className="hostName">
                    {propertie.firstName} <br></br> {propertie.lastName}
                  </div>
                  <div className="pictContainer">
                    <img
                      className="hostPicture"
                      src={propertie.host.picture}
                      alt="hebergeur"
                    />
                  </div>
                </div>
                <div className="starsContainer">
                  {propertie.rateStar.map((stars, index) => (
                    <img
                      key={stars + urlId + index}
                      className="starPicture"
                      src={stars ? FilledStar : EmptyStar}
                      alt={stars ? 'red star' : 'grey star'}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="collapseHostContainer">
              <Collapse title="Description" text={propertie.description} />
              <Collapse
                title="Équipements"
                text={propertie.equipments.map((equipement, index) => (
                  <div key={index}>{equipement}</div>
                ))}
              />
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
)}