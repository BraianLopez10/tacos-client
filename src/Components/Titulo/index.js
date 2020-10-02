import React from 'react'

import './index.scss'

export const Titulo = (props) => {
  return (
    <div className="titulo-home">
      <span className="ico-taquito"><img alt="taquito" src="/img/taquito.png"></img></span>
      <h2>{props.text}</h2>
      <span className="ico-taquito"><img alt="taquito" src="/img/taquito.png"></img></span>
    </div>
  )
}
