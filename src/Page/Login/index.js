import React from "react"
import { Button, Paper } from "@material-ui/core"
import "./login.scss"
export const Login = () => {
  return (
    <div className='login'>
      <form className='login__form'>
        <input
          className='login__form-input'
          type='text'
          placeholder='Usuario'
        ></input>
        <input
          className='login__form-input'
          type='password'
          placeholder='Contraseña'
        ></input>
        <button className='login__form-button' variant='outlined'>
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}
