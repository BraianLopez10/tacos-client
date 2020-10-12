import React, { createContext, useState, useContext } from "react"
const CarritoContext = createContext()

export const CarritoProvider = (props) => {
  // const test1 = {
  //   name: "Empanada",
  //   precioTotal: 120,
  //   precioBase: 120,
  //   img: "https://tacos-mexico.s3.amazonaws.com/image-prod-1602003292333.jpeg",
  //   slug: "2295597e",
  //   detallePedido: [
  //     {
  //       name: "Empanada",
  //       sabores: [{ sabor: "carne", cant: 1 }],
  //     },
  //   ],
  //   extras: [],
  // }
  let itemsLocalStore = localStorage.getItem("carrito")
  if (itemsLocalStore) {
    itemsLocalStore = JSON.parse(itemsLocalStore)
  } else {
    itemsLocalStore = []
  }
  const addItem = (item) => {
    itemsLocalStore.push(item)
    localStorage.setItem("carrito", JSON.stringify(itemsLocalStore))
  }
  const getTotal = () => {
    // itemsLocalStore.forEach((i) => {
    //   if (i.extras.length > 0) {
    //     let totalExtras = i.extras.reduce((a, b) => a + b.valor, 0)
    //     i.precioTotal += totalExtras
    //   }
    // })
    let total = itemsLocalStore.reduce((a, b) => a + b.precioTotal, 0)
    return total
  }
  // const remove = (slug) => {
  //   setItems([...items.filter((i) => i.slug !== slug)])
  // }
  const getCantItems = () => {
    return itemsLocalStore.length
  }
  const object = {
    items: itemsLocalStore,
    addItem,
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
