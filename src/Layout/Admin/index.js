import React from "react"
import { Link } from "react-router-dom"
import HomeRounded from "@material-ui/icons/HomeRounded"
import "./admin.scss"
export const Admin = (props) => {
  return (
    <>
      <div className='menu-admin'>
        <div className='menu-admin__container'>
          <ul className='menu-admin__container__menu'>
            <li>
              <button>
                <Link to='/'>
                  <HomeRounded></HomeRounded>
                </Link>
              </button>
            </li>
            <li>
              <Link to='/admin/productos'>PRODUCTOS</Link>
            </li>
            <li>
              <Link to='/admin/pedidos'>PEDIDOS</Link>
            </li>
            <li>
              <Link to='/admin/combos'>COMBOS</Link>
            </li>
          </ul>
        </div>
      </div>
      <h1>ADMINISTRACIÓN </h1>
      {props.children}
    </>
  )
}
