import React from 'react'
import { Producto } from './Producto'
import './index.scss'
export const Productos = (props) => {
	const { productos } = props
	return (
		<div className='productos-container-master'>
			{productos.map((p, index) => {
				return (
					<div key={index}>{p.estado && <Producto data={p}></Producto>}</div>
				)
			})}
		</div>
	)
}
