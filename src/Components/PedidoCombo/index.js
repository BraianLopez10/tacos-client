import React from 'react'
import { SaboresProvider } from '../../Context/SaboresContext'
import { ComboPedido } from './pedido'
export const PedidoWithContext = (props) => {
	return (
		<SaboresProvider>
			<ComboPedido></ComboPedido>
		</SaboresProvider>
	)
}