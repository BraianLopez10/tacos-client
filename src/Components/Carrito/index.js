import React, { useEffect } from 'react'
import { Card, Button } from '@material-ui/core'
import './index.scss'
import { TablePedido } from './TablePedido'
import { Loading } from '../Loading'
import { PagoComplete } from './PagoComplete'
import { Total } from './Total'
import { Header } from './Header'
import { useParams, useHistory } from 'react-router-dom'
import { FormCart } from './FormCart'
export const Carrito = () => {
	const [loading, setLoading] = React.useState(true)
	const [pedido, setPedido] = React.useState({})
	const { state } = useParams()
	useEffect(() => {
		const pedido = localStorage.getItem('cart')
		if (pedido) {
			console.log(state)
			setPedido(JSON.parse(pedido))
		}
		setLoading(false)
	}, [])
	const history = useHistory()
	return (
		<>
			{loading ? (
				<Loading></Loading>
			) : (
				<Card className='card-carrito'>
					{!Object.keys(pedido).length > 0 ? (
						<h1 style={{ textAlign: 'center' }}>Tu carrito esta vacio</h1>
					) : (
						<>
							<Header state={state}></Header>
							{!state ? (
								<>
									<TablePedido pedido={pedido}></TablePedido>
									<Total pedido={pedido}></Total>
									<Button
										fullWidth
										style={{
											marginTop: '10px',
											backgroundColor: '#03845B',
											color: 'white',
										}}
										variant='contained'
										onClick={() => {
											history.push('/carrito/datos')
										}}
									>
										Completa tus datos
									</Button>
								</>
							) : state === 'datos' ? (
								<>
									<FormCart pedido={pedido}></FormCart>
									<Total pedido={pedido}></Total>
								</>
							) : state === 'pago' ? (
								<PagoComplete></PagoComplete>
							) : (
								<>
									<TablePedido pedido={pedido}></TablePedido>
									<Total pedido={pedido}></Total>
								</>
							)}
						</>
					)}
				</Card>
			)}
		</>
	)
}
