import React from 'react'
import ModalPedido from './Modal/ModalPedido'
import { getProductos } from '../../../Services/Api'
import { Button } from '@material-ui/core'
import './index.scss'
export const AddProd = (props) => {
	const { handleChangueCuenta, cuenta } = props
	const [loading, setLoading] = React.useState(true)
	const [productos, setProductos] = React.useState([])
	React.useEffect(() => {
		async function getProd() {
			try {
				const prod = await getProductos()
				setProductos(prod)
				setLoading(false)
			} catch (err) {
				console.log(err)
			}
		}
		getProd()
	}, [])

	const addProdToCuenta = (p) => {
		console.log(p)
		const extra = {
			name: `1x ${p.name}`,
			valor: p.valor,
			slug: p.slug,
			sabor: p.sabor || '',
		}
		const newCuenta = [...cuenta, extra]
		handleChangueCuenta(newCuenta)
	}

	return (
		<div>
			{loading ? (
				<p>Cargando...</p>
			) : (
				<>
					<p>¿ Deseas agregar algo mas ? </p>
					<div
						style={{
							display: 'flex',
							alignContent: 'center',
							alignItems: 'center',
							justifyContent: 'flex-start',
						}}
					>
						{productos.map((p, index) => {
							if (p.sabores.length > 0) {
								return (
									<React.Fragment key={index}>
										<ModalPedido
											producto={p}
											addProdToCuenta={addProdToCuenta}
										></ModalPedido>
									</React.Fragment>
								)
							} else {
								return (
									<Button
										className='button-add-prod'
										key={index}
										variant='outlined'
										onClick={() => {
											addProdToCuenta(p)
										}}
									>
										{p.name}
									</Button>
								)
							}
						})}
					</div>
				</>
			)}
		</div>
	)
}
