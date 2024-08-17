import React from 'react'
import { useState } from 'react'
import './carousel.css'
import Arrow from '../../assets/arrow.svg'

export default function Carrousel (pictures) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const previousImg = () => {
    const isFirstImg = currentIndex === 0
    const newIndex = isFirstImg ? pictures.data.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextImg = () => {
    const isLastImg = currentIndex === pictures.data.length - 1
    const newIndex = isLastImg ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="slideContainer">
      {pictures.data.length > 1 && (
        <>
          <img
            src={Arrow}
            alt="left arrow"
            role="button"
            className="leftArrow"
            onClick={previousImg}
          />
          <img
            src={Arrow}
            alt="right arrow"
            role="button"
            className="rightArrow"
            onClick={nextImg}
          />
        </>
      )}
      <div className="imgContainer">
        <img
          src={pictures.data[currentIndex]}
          alt="logement"
          className="imgSlide"
        />
      </div>
      <div className="numbers">
        {pictures.data.length > 1 && (
          <p>{currentIndex + 1 + '/' + pictures.data.length}</p>
        )}
      </div>
    </div>
  )
}
