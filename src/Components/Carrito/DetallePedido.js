import React from "react"

export const DetallePedido = ({ detallePedido }) => {
  return (
    <>
      {detallePedido.map((e, index) => {
        return (
          <div key={index}>
            <span
              style={{
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {e.name}
            </span>
            <div style={{ margin: "0", padding: "0" }} key={index}>
              {e.sabores.map((s, index) => {
                return (
                  <span
                    key={index}
                    style={{
                      textTransform: "capitalize",
                      fontSize: "0.8em",
                      border: "0.8px solid gray",
                      marginLeft: "1px",
                    }}
                  >
                    {`${s.sabor} X${s.cant}`}
                  </span>
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}
