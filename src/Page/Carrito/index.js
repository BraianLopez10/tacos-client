import React from "react"
import { CarritoProvider } from "../../Context/CarritoContext"
import { Carrito } from "../../Components/Carrito/Carrito"
export const CarritoPage = () => {
  return (
    <CarritoProvider>
      <Carrito></Carrito>
    </CarritoProvider>
  )
}
