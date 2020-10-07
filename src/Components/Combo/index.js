import React from "react"
import { Combo } from "../../Components/Combo/Combo"
import { getCombos } from "../../Services/Api"
import "./index.scss"

export const Combos = (props) => {
  const [combosData, setCombosData] = React.useState([])
  React.useEffect(() => {
    // Combos
    async function getData() {
      const combos = await getCombos()
      setCombosData(combos)
    }
    getData()
  }, [])
  return (
    <>
      {combosData.map((c, index) => {
        if (c.estado !== "pausado") {
          return (
            <div key={index} className='combos-container'>
              <Combo comboData={c}></Combo>
            </div>
          )
        } else {
          return ""
        }
      })}
    </>
  )
}
