import React from "react"
import "./total.scss"
export const Total = (props) => {
  const { total, items } = props
  return (
    <div className='total-carrito'>
      <h3 style={{ backgroundColor: "#edc988", padding: "10px" }}>
        TOTAL CARRITO
      </h3>
      {items.map((p, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: "#f8efd4",
              padding: "5px",
            }}
          >
            <p
              style={{
                padding: "5px",
                margin: 0,
                color: "white",
                borderRadius: "5px",
                display: "inline-block",
                backgroundColor: "#d7385e",
                width: "auto",
              }}
            >
              Item: {index + 1}
            </p>
            <div className='total-carrito__header'>
              <p>{p.name}</p>
              <div className='total-carrito__precio'>
                <span>$</span>
                <span>{p.precioBase}</span>
              </div>
            </div>
            {p.extras.length > 0 && (
              <>
                <span className='total-carrito__title'>Extras</span>
                <ul>
                  {p.extras.map((e, index) => {
                    return (
                      <li key={index}>
                        <p style={{ textTransform: "capitalize" }}>
                          {`${e.name} ${e.sabor}`}
                        </p>
                        <div className='total-carrito__precio'>
                          <span>$</span>
                          <span>{e.valor}</span>
                        </div>
                      </li>
                    )
                  })}
                </ul>

                <div className='total-carrito__footer'>
                  <p>TOTAL CON EXTRAS</p>
                  <div
                    style={{ fontWeight: "700" }}
                    className='total-carrito__precio'
                  >
                    <span>$</span>
                    <span>{p.precioTotal}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )
      })}
      <div className='total-carrito__total'>
        <p>TOTAL</p>
        <p className='total-carrito__total-precio'> $ {total}</p>
      </div>
    </div>
  )
}
