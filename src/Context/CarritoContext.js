import React, { createContext, useState, useContext } from "react"
const CarritoContext = createContext()

export const CarritoProvider = (props) => {
  
  let itemsLocalStore = localStorage.getItem("carrito")
  if (itemsLocalStore) {
    itemsLocalStore = JSON.parse(itemsLocalStore)
  } else {
    itemsLocalStore = []
  }
  const updateLocalStorage = (itemsLocalStore) => {
    localStorage.setItem("carrito", JSON.stringify(itemsLocalStore))
  }
  const addItem = (item) => {
    itemsLocalStore.push(item)
    updateLocalStorage(itemsLocalStore)
  }
  const getTotal = () => {
    let total = itemsLocalStore.reduce((a, b) => a + b.precioTotal, 0)
    return total
  }
  const remove = (slug) => {
    itemsLocalStore = itemsLocalStore.filter((e) => e.slug !== slug)
    updateLocalStorage(itemsLocalStore)
  }
  const getCantItems = () => {
    return itemsLocalStore.length
  }
  const object = {
    items: itemsLocalStore,
    addItem,
    getCantItems,
    getTotal,
    remove
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
