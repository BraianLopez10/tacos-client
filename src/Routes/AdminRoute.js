import React from "react"
import { Route } from "react-router-dom"
import { Admin } from "../Layout/Admin"
import { Login } from "../Page/Login"
export const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        false ? (
          <Login></Login>
        ) : (
          <Admin>
            <Component {...props}></Component>
          </Admin>
        )
      }
    ></Route>
  )
}
