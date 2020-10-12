import React from "react"
import { SaboresProvider } from "../../Context/SaboresContext"
import { ComboPedido } from "../../Components/PedidoCombo/pedido"
import { CarritoProvider } from "../../Context/CarritoContext"
export const PedidoWithContext = (props) => {
  return (
    <SaboresProvider>
      <CarritoProvider>
        <ComboPedido></ComboPedido>
      </CarritoProvider>
    </SaboresProvider>
  )
}
