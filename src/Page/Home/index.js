import React from "react"
import { Productos } from "../../Components/Producto"
import { Titulo } from "../../Components/Titulo"
import { Delivery } from "../../Components/Delivery"
import { Carrousel } from "../../Components/Carrousel"
import { getProductos } from "../../Services/Api"
import "./home.scss"
import { Combos } from "../../Components/Combo"
import { Loading } from "../../Components/Loading"
export const Home = (props) => {
  const [loading, setLoading] = React.useState(true)
  const [productos, setProductos] = React.useState([])
  React.useEffect(() => {
    async function getData() {
      try {
        // Producto
        const productos = await getProductos()
        setProductos(productos)
        setLoading(false)
      } catch (err) {}
    }
    getData()
  }, [])
  return (
    <section className='section-home'>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Delivery></Delivery>
          <Carrousel />
          <Titulo text='Nuestros Productos'></Titulo>
          <div className='home-productos'>
            <Productos productos={productos}></Productos>
          </div>
          <Titulo text='Nuestros Combos'></Titulo>
          <div className='home-combos'>
            <Combos></Combos>
          </div>
        </>
      )}
    </section>
  )
}
