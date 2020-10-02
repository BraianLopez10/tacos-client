import React from 'react'
import { Button } from '@material-ui/core'
export const Agregados = (props) => {
	const { cuenta, handleChangueCuenta } = props
	console.log(cuenta)
	const handleDeleteItem = (index, valor) => {
		const newCuenta = [...cuenta.filter((o, i) => i !== index)]
		handleChangueCuenta(newCuenta)
	}

	return (
		<>
			<p>Agregados</p>
			{!cuenta.filter((p) => p.name !== cuenta[0].name).length > 0 &&
				'No has agregado ningún extra'}
			{cuenta.map((o, index) => {
				if (o.name !== cuenta[0].name)
					return (
						<div className='agregados' key={index}>
							<p
								className='item'
								style={{ textTransform: 'capitalize', color: 'GrayText' }}
							>{`${o.name} ${o.sabor}`}</p>
							<p className='item-precio'>${o.valor}</p>
							<Button
								onClick={() => {
									handleDeleteItem(index, o.valor)
								}}
							>
								Eliminar
							</Button>
						</div>
					)
			})}
		</>
	)
}
