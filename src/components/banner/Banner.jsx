import React from 'react'
import "./banner.css"

export default function Banner({children}) {
  return ( 
    <div>
        <section className="banner">
          <div className="imgContainerHome">
           {children}
          </div>
        </section>
    </div>
  )
}