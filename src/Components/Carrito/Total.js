import React from "react"
import "./total.scss"
export const Total = (props) => {
  const { total, items } = props
  return (
    <div className='total-carrito'>
      <h3>TOTAL CARRITO</h3>
      {items.map((p, index) => {
        return (
          <React.Fragment key={index}>
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
                  <div className='total-carrito__precio'>
                    <span>$</span>
                    <span>{p.precioTotal}</span>
                  </div>
                </div>

                <hr></hr>
              </>
            )}
          </React.Fragment>
        )
      })}
      <div className='total-carrito__total'>
        <p>TOTAL</p>
        <p className='total-carrito__total-precio'> $ {total}</p>
      </div>
    </div>
  )
}
