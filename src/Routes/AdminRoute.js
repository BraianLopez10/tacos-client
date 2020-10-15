import React from "react"
import { Route } from "react-router-dom"
import { Admin } from "../Layout/Admin"
import { Login } from "../Page/Login"
import { checktoken } from "../utils"
export const AdminRoute = ({ component: Component, ...rest }) => {
  let result = checktoken()
  console.log(result)
  let auth = result ? true : false

  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? (
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
