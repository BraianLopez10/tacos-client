import React from "react"
import { Combos } from "../../Components/Combo"
import { Titulo } from "../../Components/Titulo"
import "./index.scss"
export const PageCombos = () => {
  return (
    <div className='combo-page'>
      <Titulo text='Todos los combos que tenemos para vos'></Titulo>
      <div className='combo-page__combos'>
        <Combos></Combos>
      </div>
    </div>
  )
}
