import React, { useEffect, useState } from "react"
import { getAllPedidos } from "../../Services/Api"
import moment from "moment"
import { Link } from "react-router-dom"
import "moment/locale/es"
import "./index.scss" // without this line it didn't work
moment.locale("es")
export const Pedidos = () => {
  const [pedidosData, setPedidosData] = useState([])

  useEffect(() => {
    async function getData() {
      const pedidos = await getAllPedidos()
      console.log(pedidos)
      setPedidosData(pedidos)
    }
    getData()
  }, [])
  return (
    <div>
      <h1>Pedidos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre Combo</th>
            <th>Info Comprador</th>
            <th>Total Compra</th>
            <th>Observaciones del pedido</th>
            <th>Fecha del pedido</th>
            <th>Estado del Pago</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {pedidosData.map((p) => {
            return (
              <tr>
                <td>
                  <Link to={`/admin/combos/${p.combo.slug}`}>
                    {p.combo.name}
                  </Link>
                </td>

                <td>
                  <ul style={{ textAlign: "left" }}>
                    <li>{p.payer.nombre}</li>
                    <li>
                      {p.payer.direccion} N°{p.payer.numero}
                    </li>
                    <li>{p.payer.telefono}</li>
                    <li>{p.payer.email}</li>
                  </ul>
                </td>
                <td>
                  <strong>${p.total}</strong>
                </td>
                <td style={{ textAlign: "left" }}>{p.observaciones}</td>
                <td>{moment(p.createdAt).format("MMMM Do dddd, h:mm:ss a")}</td>
                <td
                  style={
                    p.info_pago.status
                      ? { backgroundColor: "green", color: "white" }
                      : { backgroundColor: "red", color: "black" }
                  }
                >
                  {p.info_pago.status}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
