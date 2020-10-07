import React, { useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { TextField, Button, Paper } from "@material-ui/core"
import { getCombosBySlug, updateCombo } from "../../Services/Api"
import { Loading } from "../../Components/Loading"
export const EditCombo = (props) => {
  const { slug } = useParams()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const changeValues = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  React.useEffect(() => {
    async function getData() {
      try {
        const combo = await getCombosBySlug(slug)
        setData(combo)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [slug])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await updateCombo(data.slug, data)
      if (response === 200) {
        window.alert("Producto Actualizado")
      }
    } catch (err) {}
  }
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Paper>
          <form
            style={{ maxWidth: "600px", padding: "20px" }}
            onSubmit={handleSubmit}
          >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
                <div className='form-group'>
                  <p>Nombre</p>
                  <p>{data.name}</p>
                </div>
                <div className='form-group'>
                  <TextField
                    fullWidth
                    label='Descripción'
                    variant='outlined'
                    name='desc'
                    multiline={true}
                    value={data.desc}
                    onChange={changeValues}
                  ></TextField>
                </div>
                <div className='form-group'>
                  <TextField
                    fullWidth
                    label='Valor'
                    variant='outlined'
                    name='valor'
                    value={data.valor}
                    onChange={changeValues}
                  ></TextField>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ margin: "0", padding: "0", marginBottom: "10px" }}>
                  Imagen del producto
                </h3>
                <img src={data.img} width='200px' height='200px'></img>
              </div>
            </div>
            <Button
              variant='contained'
              type='submit'
              style={{ marginTop: "10px" }}
              color='primary'
              fullWidth
            >
              Confirmar Cambios
            </Button>
          </form>
        </Paper>
      )}
    </div>
  )
}
