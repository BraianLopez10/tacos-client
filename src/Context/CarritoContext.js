import React, { createContext, useState, useContext } from "react"
const CarritoContext = createContext()

export const CarritoProvider = (props) => {
  // const test = {
  //   combo: {
  //     main: [
  //       {
  //         name: "taco",
  //         cant: "4",
  //         sabores: ["carne", "pollo", "vegetal"],
  //         type: "comida",
  //       },
  //       {
  //         name: "empanada",
  //         cant: "2",
  //         sabores: ["carne", "Pollo", "Vegetariano"],
  //         type: "comida",
  //       },
  //     ],
  //     bebidas: [
  //       { name: "coca-cola 1.5l", cant: "1", sabores: [], type: "bebida" },
  //     ],
  //     estado: true,
  //     _id: "5f7ca1a7476866002901416b",
  //     name: "4 tacos , 2 Empandas y 1 Coca-cola",
  //     desc: "4 tacos , 2 Empandas y 1 Coca-cola",
  //     valor: 434,
  //     img:
  //       "https://tacos-mexico.s3.sa-east-1.amazonaws.com/image-prod-1602003367554.jpeg",
  //     slug: "27fb7e8e",
  //     createdAt: "2020-10-06T16:56:07.955Z",
  //     updatedAt: "2020-10-06T16:56:22.138Z",
  //     __v: 0,
  //   },
  //   detallePedidoCombo: [
  //     {
  //       name: "taco",
  //       sabores: [
  //         { sabor: "pollo", cant: 3 },
  //         { sabor: "carne", cant: 1 },
  //       ],
  //     },
  //     {
  //       name: "empanada",
  //       sabores: [
  //         { sabor: "carne", cant: 1 },
  //         { sabor: "Pollo", cant: 1 },
  //       ],
  //     },
  //   ],
  //   extras: [
  //     { name: "1x empanada", valor: 120, slug: "2295597e", sabor: "carne" },
  //     { name: "1x taco", valor: 120, slug: "049c89c9", sabor: "pollo" },
  //     { name: "1x burrito", valor: 95, slug: "e2fc3867", sabor: "" },
  //   ],
  //   total: 769,
  //   observaciones: "Listo rey",
  // }
  const test = {
    name: "4 tacos y 2 Cervezas",
    precioTotal: 670,
    precioBase: 670,
    img:
      "https://tacos-mexico.s3.sa-east-1.amazonaws.com/image-prod-1602003367554.jpeg",
    slug: "27fb7e8e",
    detallePedido: [
      {
        name: "taco",
        sabores: [
          { sabor: "pollo", cant: 3 },
          { sabor: "carne", cant: 1 },
        ],
      },
      {
        name: "empanada",
        sabores: [
          { sabor: "carne", cant: 1 },
          { sabor: "Pollo", cant: 1 },
        ],
      },
    ],
    extras: [
      { name: "1x empanada", valor: 120, slug: "2295597e", sabor: "carne" },
      { name: "1x taco", valor: 120, slug: "049c89c9", sabor: "pollo" },
      { name: "1x burrito", valor: 95, slug: "e2fc3867", sabor: "" },
    ],
  }
  const test1 = {
    name: "Empanada",
    precioTotal: 120,
    precioBase: 120,
    img: "https://tacos-mexico.s3.amazonaws.com/image-prod-1602003292333.jpeg",
    slug: "2295597e",
    detallePedido: [
      {
        name: "Empanada",
        sabores: [{ sabor: "carne", cant: 1 }],
      },
    ],
    extras: [],
  }
  const [items, setItems] = useState([test, test1])
  const addItem = (item) => {
    setItems([...items, item])
  }
  const getTotal = () => {
    items.forEach((i) => {
      if (i.extras.length > 0) {
        let totalExtras = i.extras.reduce((a, b) => a + b.valor, 0)
        i.precioTotal += totalExtras
      }
    })
    let total = items.reduce((a, b) => a + b.precioTotal, 0)
    return total
  }
  const remove = (slug) => {
    setItems([...items.filter((i) => i.slug !== slug)])
  }
  const getCantItems = () => {
    return items.length
  }
  const object = {
    items,
    addItem,
    remove,
    getCantItems,
    getTotal,
  }
  return (
    <CarritoContext.Provider
      value={object}
      {...props}
    ></CarritoContext.Provider>
  )
}

export const useCarritoContext = () => {
  const context = useContext(CarritoContext)
  return context
}
