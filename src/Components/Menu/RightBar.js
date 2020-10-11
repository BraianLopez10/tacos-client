import React from "react"
import "./rightbar.scss"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import { Link } from "react-router-dom"

export const RightBar = (props) => {
  const { open } = props
  return (
    <div className={open ? "right-bar" : "right-bar hidden"}>
      <ul className='menu'>
        <Link to='/'>
          <li onClick={props.handleOpen}>Inicio</li>
        </Link>
        <Link to='/combos'>
          <li onClick={props.handleOpen}>Combos</li>
        </Link>
        <Link to='/carrito'>
          <li onClick={props.handleOpen}>Carrito</li>
        </Link>
        <Link to='/contacto'>
          <li onClick={props.handleOpen}>Contacto</li>
        </Link>
      </ul>
      <div className='redes-right'>
        <h4>Seguinos</h4>
        <ul>
          <li>
            <InstagramIcon fontSize='large'></InstagramIcon>
          </li>
          <li>
            <FacebookIcon fontSize='large'> </FacebookIcon>
          </li>
        </ul>
      </div>
    </div>
  )
}
