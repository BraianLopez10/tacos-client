import React from "react"
import { TextField, Button, CircularProgress } from "@material-ui/core"
import { addPedido } from "../../Services/Api"
import { useHistory } from "react-router-dom"
const style = {
  height: "50px",
}

export const FormCart = (props) => {
  const history = useHistory()
  const { items } = props
  const [loading, setLoading] = React.useState(false)
  const [datoForm, setDatoForm] = React.useState({
    nombre: "Braian Lopez	",
    direccion: "calle 59",
    telefono: "1123875112",
    numero: "3140",
    email: "braianlopez10@gmail.com",
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (
      !datoForm.nombre ||
      !datoForm.direccion ||
      !datoForm.telefono ||
      !datoForm.numero ||
      !datoForm.email
    )
      return false

    try {
      const url = await addPedido({ items, dataUser: datoForm })
      setLoading(false)
      history.push("/carrito/pago")
      window.open(url, "_blank")
    } catch (err) {}
  }

  const handleChange = (e) => {
    setDatoForm({ ...datoForm, [e.target.name]: e.target.value })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='group-form-text'>
          <TextField
            style={style}
            required
            value={datoForm.nombre}
            onChange={handleChange}
            name='nombre'
            fullWidth
            placeholder='Nombre Completo'
            type='text'
          ></TextField>
        </div>
        <div className='group-form-text'>
          <TextField
            style={style}
            required
            value={datoForm.telefono}
            onChange={handleChange}
            name='telefono'
            fullWidth
            placeholder='Telefono'
            type='number'
          ></TextField>
        </div>
        <div className='group-form-text'>
          <TextField
            style={style}
            required
            value={datoForm.direccion}
            onChange={handleChange}
            name='direccion'
            fullWidth
            placeholder='Direccion'
          ></TextField>
        </div>
        <div className='group-form-text'>
          <TextField
            style={style}
            type='email'
            required
            value={datoForm.email}
            onChange={handleChange}
            name='email'
            fullWidth
            placeholder='Email'
          ></TextField>
        </div>
        <div className='group-form-text'>
          <TextField
            style={style}
            required
            value={datoForm.numero}
            onChange={handleChange}
            name='numero'
            fullWidth
            placeholder='N°'
            type='number'
          ></TextField>
        </div>
        <div>
          <p
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "15px",
              textAlign: "center",
            }}
          >
            Los envios solo estan disponibles en zonas de Berazategui
          </p>
        </div>
        <Button
          style={{
            marginTop: "10px",
            backgroundColor: "#03845B",
            color: "white",
          }}
          variant='outlined'
          fullWidth
          type='submit'
        >
          {loading ? <CircularProgress /> : "FINALIZAR COMPRA"}
        </Button>
      </form>
    </>
  )
}
