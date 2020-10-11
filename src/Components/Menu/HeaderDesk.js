import React from "react"

import "./header.scss"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { Button } from "@material-ui/core"

export const HeaderDesk = () => {
  return (
    <div className='header'>
      <div className='header-img-container'>
        <img src='/img/logo.png' alt='logo'></img>
      </div>
      <ul>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/combos'>Combos</Link>
        </li>
        <li className='carrito-header-desk'>
          <Link to='/carrito'>Carrito</Link>
          <div className='carrito-header-desk__number'>
            <span>1</span>
          </div>
        </li>
      </ul>
      <Link to='/admin'>
        <Button variant='outlined' className='acceder'>
          Acceder
        </Button>
      </Link>
    </div>
  )
}
