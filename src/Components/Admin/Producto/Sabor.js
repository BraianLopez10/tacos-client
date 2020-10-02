import React from 'react'
import { TextField, Button } from '@material-ui/core'
export const Sabor = (props) => {
  const { saboresP, setSaboresP } = props
  const [sabor, setSabor] = React.useState('')

  const handleChangeSabor = (e) => {
    setSabor(e.target.value)
  }

  const addSabor = (e) => {
    e.preventDefault()
    if (sabor !== '') {
      setSaboresP([...saboresP, sabor])
      setSabor('')
    }
  }

  const clearArray = () => {
    setSaboresP([])
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px'
        }}
      >
        <TextField
          name="sabores"
          value={sabor}
          label="Añadir Sabores"
          variant="outlined"
          onChange={handleChangeSabor}
          fullWidth
        />

        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={addSabor}
        >
          Añadir sabor
        </Button>
      </div>
      <div>
        {saboresP.length > 0 && (
          <p
            onClick={clearArray}
            style={{
              display: 'inline-block',
              margin: '0',
              fontSize: '0.8em',
              cursor: 'pointer',
              marginLeft: '3px'
            }}
          >
            Limpiar Sabores
          </p>
        )}
        <ul
          style={{
            margin: '0',
            padding: '0'
          }}
        >
          {saboresP.map((s, index) => (
            <li
              key={index}
              style={{
                display: 'inline-block',
                listStyle: 'none',
                margin: '0',
                padding: '0',
                marginLeft: '5px'
              }}
            >
              <p style={{ textTransform: 'uppercase' }}>| {s} |</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
