import React, { useEffect } from "react"
import { Card, Button } from "@material-ui/core"
import "./index.scss"
import { TablePedido } from "./TablePedido"
import { Loading } from "../Loading"
import { PagoComplete } from "./PagoComplete"
import { Total } from "./Total"
import { Header } from "./Header"
import { useParams, useHistory } from "react-router-dom"
import { FormCart } from "./FormCart"
import { useCarritoContext } from "../../Context/CarritoContext"
export const Carrito = () => {
  const [loading, setLoading] = React.useState(false)
  const { state } = useParams()
  const { items, getTotal } = useCarritoContext()
  console.log(items)
  const history = useHistory()
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <Card className='card-carrito'>
          {!items.length > 0 ? (
            <h1 style={{ textAlign: "center" }}>Tu carrito esta vacio</h1>
          ) : (
            <>
              <Header state={state}></Header>
              {!state ? (
                <>
                  <TablePedido items={items}></TablePedido>
                  <Total total={getTotal()} items={items}></Total>
                  <Button
                    fullWidth
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#03845B",
                      color: "white",
                    }}
                    variant='contained'
                    onClick={() => {
                      history.push("/carrito/datos")
                    }}
                  >
                    Completa tus datos
                  </Button>
                </>
              ) : state === "datos" ? (
                <>
                  <FormCart items={items}></FormCart>
                  <Total total={getTotal()} items={items}></Total>
                </>
              ) : state === "pago" ? (
                <PagoComplete></PagoComplete>
              ) : (
                <>
                  {/* <TablePedido pedido={pedido}></TablePedido>
                  <Total pedido={pedido}></Total> */}
                </>
              )}
            </>
          )}
        </Card>
      )}
    </>
  )
}
