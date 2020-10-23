import React, { useEffect, useState } from "react"
import { Button, Paper } from "@material-ui/core"
import { login as loginApi, lostpass as lostpassApi } from "../../Services/Api"
import "./login.scss"
import { ClassSharp } from "@material-ui/icons"
export const Login = () => {
  const [resetPass, setResetPass] = useState(false)
  const handleResetPass = () => {
    setResetPass(!resetPass)
  }
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  })
  const [secret, setSecret] = useState("")

  const login = async () => {
    if (!dataLogin.username || !dataLogin.password) {
      return false
    }
    try{
      let response = await loginApi(dataLogin)
      if (response.status === 200) {
        console.log(response)
        localStorage.setItem("token", `bearer ${response.body}`)
        window.location.reload()
      }
    }catch(err){
      console.log(err)
    }
  }

  const lostpass = async () => {
    if (!dataLogin.password || !dataLogin.username || !secret) {
      return false
    }
    const data = {
      ...dataLogin,
      secret,
    }
    try{
      let response = await lostpassApi(data)
      console.log(response)

    }catch(err){
      console.log(err)
    }
  }

  const chageinputsecret = (e) => {
    setSecret(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (resetPass) {
      lostpass()
    } else {
      login()
    }
  }
  const handleChange = (event) => {
    setDataLogin({
      ...dataLogin,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <div className='login'>
      <h1>{resetPass ? "Cambiar Contraseña" : "Login"}</h1>
      <form className='login__form' onSubmit={handleSubmit}>
        <input
          className='login__form-input'
          name='username'
          type='text'
          value={dataLogin.username}
          onChange={handleChange}
          placeholder='Usuario'
        ></input>

        <input
          className='login__form-input'
          name='password'
          type='password'
          value={dataLogin.password}
          onChange={handleChange}
          placeholder={resetPass ? "Nueva Contraseña" : "Contraseña"}
        ></input>
        {resetPass && (
          <input
            className='login__form-input'
            name='secret'
            type='password'
            value={dataLogin.secret}
            onChange={chageinputsecret}
            placeholder='Secret'
          ></input>
        )}

        <button className='login__form-button' variant='outlined'>
          {!resetPass ? "Iniciar Sesión" : "Cambiar Contraseña"}
        </button>
        <p
          onClick={handleResetPass}
          className='login__form-button-lost'
          variant='outlined'
        >
          {!resetPass ? "Resetear contraseña" : "Iniciar Sesión"}
        </p>
      </form>
    </div>
  )
}
