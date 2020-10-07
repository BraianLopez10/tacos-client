import React from "react"
import "./combo.scss"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import { InfoCombo } from "./InfoCombo"
export const Combo = (props) => {
  const { comboData } = props
  console.log(comboData)
  return (
    <div className='card-combo'>
      <div className='card-combo__info'>
        <InfoCombo producto={comboData.main} titulo='Principal'></InfoCombo>
        <InfoCombo producto={comboData.bebidas} titulo='Bebida'></InfoCombo>
        <div>
          <h3>Descripción</h3>
          <p>{comboData.desc}</p>
        </div>
      </div>
      <div className='combo-titulo'>
        <h3>{comboData.name}</h3>
      </div>
      <div className='combo-image'>
        <img alt='combo' src={comboData.img}></img>
      </div>
      <div className='combo-precio'>
        <p>${comboData.valor}</p>
      </div>
      <div className='combo-button'>
        <Button
          variant='contained'
          fullWidth
          style={{ backgroundColor: "#132743" }}
        >
          <Link
            to={`/combo/${comboData.slug}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            Agregar combo
          </Link>
        </Button>
      </div>
      <div className='combo-pie'></div>
    </div>
  )
}
