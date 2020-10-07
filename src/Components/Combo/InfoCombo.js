import React from "react"
import "./infocombo.scss"
export const InfoCombo = (props) => {
  const { producto, titulo } = props
  return (
    <div className='info-combo'>
      <h3>{titulo}</h3>
      {producto.map((p) => {
        return (
          <>
            <ul>
              <li>{p.name}</li>
            </ul>
          </>
        )
      })}
    </div>
  )
}
