import React, { useContext } from "react"
const SaboresContext = React.createContext()
export const SaboresProvider = (props) => {
  const [state, setState] = React.useState([])
  const changeState = ({ name, boolean }) => {
    console.log(name, boolean)
    // Si existe modificamos
    const p = state.find((p) => p.name === name)
    if (p) {
      p.boolean = boolean
      setState(state)
    } else {
      // si no existe lo creemos
      const newP = {
        name,
        boolean,
      }
      state.push(newP)
      setState(state)
    }
  }
  const value = {
    state,
    changeState,
  }
  return (
    <SaboresContext.Provider value={value} {...props}></SaboresContext.Provider>
  )
}
export const useContextSabores = () => {
  const context = useContext(SaboresContext)
  return context
}
