import React from 'react'
import { Button, Paper, Input } from '@material-ui/core'
import './login.scss'
export const Login = () => {
  return (
    <Paper className="container-login">
      <form className="form-login">
        <Input type="text" placeholder="Usuario"></Input>
        <Input type="password" placeholder="Contraseña"></Input>
        <Button variant="outlined">Iniciar Sesión</Button>
      </form>
    </Paper>
  )
}
