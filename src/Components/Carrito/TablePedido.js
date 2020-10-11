import React from "react"
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import { Button } from "@material-ui/core"
import "./tablepedido.scss"
import { DetallePedido } from "./DetallePedido"
export const TablePedido = (props) => {
  const { items } = props

  return (
    <div className='container-cart'>
      <table className='container-cart__table'>
        <thead>
          <tr>
            <th className='text-hd'>NOMBRE</th>
            <th className='text-hd'>DETALLE</th>
            <th className='text-hd'>OPCIÓN</th>
          </tr>
        </thead>
        <tbody>
          {items.map((p, index) => {
            return (
              <tr key={index} className='tr-table'>
                <td>{p.name}</td>
                <td className='td-detalle'>
                  <DetallePedido
                    detallePedido={p.detallePedido}
                  ></DetallePedido>
                </td>
                <td>
                  <Button variant='outlined'>
                    <DeleteOutlineIcon />
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
