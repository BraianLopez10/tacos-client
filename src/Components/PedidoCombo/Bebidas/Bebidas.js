import React from 'react'

export const Bebidas = ({ bebidas }, ...props) => {
	return (
		<>
			<p>BEBIDAS</p>
			<div className='form-group'>
				{bebidas.map((o, index) => {
					return (
						<label style={{ textAlign: 'left' }} key={index}>
							{o.cant}x {o.name.toUpperCase()}
						</label>
					)
				})}
				{/* <input type="text" defaultValue="Lata Cerveza" placeholder="Hola bebe"></input> */}
			</div>
		</>
	)
}
