import React from "react"

import "./carrouse.scss"

export const Carrousel = () => {
  return (
    <div className='carrousel'>
      <div className='carrousel-img'>
        <img alt='pago' src='/img/carro.jpeg'></img>
        <img
          alt='pago'
          className='image-abs'
          src='/img/version-horizontal-small.png'
        ></img>
      </div>
    </div>
  )
}
