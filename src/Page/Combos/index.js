import React from "react"
import { Combos } from "../../Components/Combo"
import "./index.scss"
export const PageCombos = () => {
  return (
    <div className='combo-page'>
      <h1>Todos los combos que tenemos para vos</h1>
      <div className='combo-page__combos'>
        <Combos></Combos>
      </div>
    </div>
  )
}
