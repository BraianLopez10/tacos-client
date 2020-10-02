import React from 'react'
import { InputNumber } from '../../Utils/InputNumber'
import { useContextSabores } from '../../../Context/SaboresContext'
export const ElegirSabores = (props) => {
	const { sabores, name, cantMaxProd, pedido, setPedido } = props
	const [cantActualProd, setCantActualProd] = React.useState(0)
	const contextSabores = useContextSabores()
	React.useEffect(() => {
		console.log('Valor actual cantActualProd', cantActualProd)
		// eslint-disable-next-line eqeqeq
		if (cantActualProd == cantMaxProd) {
			contextSabores.changeState({ name, boolean: true })
		} else {
			contextSabores.changeState({ name, boolean: false })
		}
	}, [cantActualProd])
	const handleChangePedido = ({ sabor, cant }) => {
		const prod = pedido.find((p) => p.name === name)
		if (prod) {
			// //Actualizamos pedidos
			const index = prod.sabores.findIndex((s) => s.sabor === sabor)
			// //Ya esta agregado
			if (index !== -1) {
				prod.sabores[index] = {
					...prod.sabores[index],
					cant,
				}
			} else {
				prod.sabores.push({
					sabor,
					cant,
				})
			}
		}

		setPedido(pedido)
	}
	return (
		<>
			{sabores.map((p, index) => {
				return (
					<div key={index} style={{ marginBottom: '5px' }}>
						<p
							style={{
								textTransform: 'capitalize',
								color: 'grey',
							}}
						>{`${name} de ${p}`}</p>
						<InputNumber
							name={p}
							cantActualProd={cantActualProd}
							cantMaxProd={cantMaxProd}
							handleChangePedido={handleChangePedido}
							setCantActualProd={setCantActualProd}
						></InputNumber>
					</div>
				)
			})}
		</>
	)
}
