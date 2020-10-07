import React from "react"
import { Link } from "react-router-dom"
import { Button, Paper } from "@material-ui/core"
import "./producto.scss"
import { ModalProd } from "../../Components/Admin/Producto/Modal"
import {
  getProductos,
  updateProducto,
  deleteProd as deleteProdApi,
} from "../../Services/Api"
export const Productos = () => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [openModel, setOpenModal] = React.useState(false)

  React.useEffect(() => {
    async function getData() {
      try {
        const prod = await getProductos()
        setData(prod)
        setLoading(false)
      } catch (err) {}
    }
    getData()
  }, [])

  const addData = (d) => {
    setData([...data, d])
  }

  const handleOpen = () => {
    setOpenModal(!openModel)
  }

  const deleteProd = async (slug) => {
    try {
      const response = await deleteProdApi(slug)
      console.log(response)
      if (response.status === 200) {
        window.alert("Producto Eliminado Correctamente")
        setData([...data.filter((d) => d.slug !== slug)])
      }
    } catch (err) {
      window.alert("Producto Eliminado Correctamente")
      console.log(err)
    }
  }
  const changeEstado = async (estado, slug, indexArray) => {
    try {
      const res = await updateProducto(slug, {
        estado: estado,
      })
      if (res === 200) {
        let newData = [...data]
        newData = newData.map((c, index) => {
          if (index === indexArray) {
            c.estado = estado
          }
          return c
        })
        setData(newData)
      }
    } catch (error) {
      window.alert("Error en actualizar")
    }
  }
  return (
    <div style={{ wdith: "100%" }}>
      <ModalProd
        addData={addData}
        open={openModel}
        handleOpen={handleOpen}
      ></ModalProd>
      <Button
        onClick={handleOpen}
        variant='contained'
        color='secondary'
        style={{ margin: "5px" }}
      >
        Añadir producto
      </Button>
      <div className='container-grid'>
        {data.map((data, index) => {
          console.log(data)
          return (
            <Paper key={index} className='producto-container-admin'>
              <div className='header-prod'>
                <Button variant='contained' color='primary'>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/admin/productos/${data.slug}`}
                  >
                    Editar
                  </Link>
                </Button>
                <Button
                  variant='contained'
                  onClick={() => {
                    changeEstado(!data.estado, data.slug, index)
                  }}
                >
                  {data.estado ? "Deshabilitar" : "Habilitar"}
                </Button>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => {
                    deleteProd(data.slug)
                  }}
                >
                  Borrar
                </Button>
              </div>
              <div className='producto-titulo'>
                <p>{data.name}</p>
              </div>
              <div className='producto-image'>
                <div>
                  <img alt='producto' src={data.img}></img>
                </div>
              </div>
              <div className='producto-pie'>
                <ul>
                  {data.sabores.map((s, index) => {
                    return <li key={index}>{s}</li>
                  })}
                </ul>
              </div>
              <div className='producto-precio'>
                <p>${parseInt(data.valor)}</p>
              </div>
            </Paper>
          )
        })}
      </div>
    </div>
  )
}
