import React from 'react'
import './total.scss'
export const Total = (props) => {
	const { pedido } = props
	return (
		<div className='carrito-total'>
			<h3>TOTAL CARRITO</h3>
			<ul>
				<li className='li-texto-center'>
					<p className='p-gray'>{pedido.combo.name}</p>
					<p className='p-precio'>$ {pedido.combo.valor}</p>
				</li>
				{pedido.extras.length > 0 && <li className='titulo-carrito'>EXTRAS</li>}
				{pedido.extras.map((e, index) => {
					return (
						<li key={index} className='li-texto-center'>
							<p className='p-gray' style={{ textTransform: 'capitalize' }}>
								{`${e.name} ${e.sabor}`}
							</p>
							<p className='p-precio'>$ {e.valor}</p>
						</li>
					)
				})}
				<li
					className='li-texto-center'
					style={{
						marginTop: '20px',
						border: '1px solid gray',
						padding: '10px',
					}}
				>
					<p>TOTAL</p>
					<p className='total-carrito'> $ {pedido.total}</p>
				</li>
			</ul>
		</div>
	)
}
