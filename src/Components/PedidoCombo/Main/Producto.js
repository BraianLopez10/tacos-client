import React from 'react'

export const Producto = (props) => {
	const { producto } = props
	return (
		<>
			{producto.map((p, index) => {
				return <p key={index}>Hola</p>
			})}
		</>
	)
}
