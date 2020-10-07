import React, { useRef } from "react"
import DeleteIcon from "@material-ui/icons/Delete"
import { Paper, TextField, Button } from "@material-ui/core"
import { useParams } from "react-router-dom"
import { getProduct, updateProducto } from "../../Services/Api"
import "./edit.scss"
export const Edit = (props) => {
  const { slug } = useParams()
  const inputFile = useRef(null)
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState({})
  const [sabor, setSabor] = React.useState("")
  const changeSabor = (e) => {
    setSabor(e.target.value)
  }
  const changeImage = () => {
    inputFile.current.click()
  }
  const addSabor = (e) => {
    if (e.key === "Enter") {
      setData({ ...data, sabores: [...data.sabores, e.target.value] })
      setSabor("")
    }
  }
  const updatedImage = (e) => {
    if (e.target.files[0]) {
      setData({ ...data, img: URL.createObjectURL(e.target.files[0]) })
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { valor, desc, name, sabores } = data
      await updateProducto(data.slug, { valor, desc, name, sabores })
      window.alert("Actualizado Correctamente")
    } catch (err) {
      window.alert("Error al Actualizar")
    }
  }
  const changeState = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const deleteSabors = (sa) => {
    setData({
      ...data,
      sabores: [...data.sabores.filter((s) => s !== sa)],
    })
  }
  React.useEffect(() => {
    async function getData() {
      try {
        const producto = await getProduct(slug)
        setData(producto)
        console.log(producto)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [slug])
  return (
    <Paper>
      {loading ? (
        <h1>Cargadon</h1>
      ) : (
        <form
          style={{ maxWidth: "600px", padding: "20px" }}
          onSubmit={handleSubmit}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <div className='form-group'>
                <TextField
                  fullWidth
                  label='Nombre'
                  variant='outlined'
                  placeholder='Nombre'
                  name='name'
                  onChange={changeState}
                  value={data.name}
                ></TextField>
              </div>
              <div className='form-group'>
                <TextField
                  fullWidth
                  label='Descripción'
                  variant='outlined'
                  name='desc'
                  onChange={changeState}
                  multiline={true}
                  value={data.desc}
                ></TextField>
              </div>
              <div className='form-group'>
                <TextField
                  fullWidth
                  label='Valor'
                  variant='outlined'
                  name='valor'
                  onChange={changeState}
                  value={data.valor}
                ></TextField>
              </div>
              <div className='form-group'>
                <h3>Sabores</h3>
                {data.sabores.map((s, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ textTransform: "capitalize" }}>{s}</p>
                      <button
                        type='button'
                        onClick={(e) => {
                          e.preventDefault()
                          deleteSabors(s)
                        }}
                        variant='outlined'
                        size='small'
                        color='secondary'
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  )
                })}
                <TextField
                  fullWidth
                  label='Nuevo sabor'
                  variant='outlined'
                  name='sabor'
                  value={sabor}
                  onChange={changeSabor}
                  placeholder='Añadir sabor'
                  onKeyUp={addSabor}
                ></TextField>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ margin: "0", padding: "0", marginBottom: "10px" }}>
                Imagen del producto
              </h3>
              <img src={data.img} width='200px' height='200px'></img>
              <input
                type='file'
                onChange={updatedImage}
                accept='image/png, image/jpeg'
                style={{ display: "none" }}
                ref={inputFile}
              ></input>
              <Button
                onClick={changeImage}
                type='button'
                variant='contained'
                style={{ marginTop: "10px" }}
              >
                Cambiar Imagen
              </Button>
            </div>
          </div>
          <Button
            variant='contained'
            style={{ marginTop: "10px" }}
            color='primary'
            fullWidth
            onClick={handleSubmit}
          >
            Confirmar Cambios
          </Button>
        </form>
      )}
    </Paper>
  )
}
