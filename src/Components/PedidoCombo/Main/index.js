import React from 'react'
import { ElegirSabores } from '../ElegirSabores/ElegirSabores'
import './index.scss'
export const Main = (props) => {
	const { main } = props
	const { pedido, setPedido } = props
	const [prodWithSabores, setProdWithSabores] = React.useState([])
	React.useEffect(() => {
		initialize()
	}, [main])
	const initialize = () => {
		const prodSabores = main.filter((pr) => pr.sabores.length > 0)
		setProdWithSabores(prodSabores)
		setPedido(
			prodSabores.map((p) => {
				return {
					name: p.name,
					sabores: [],
				}
			})
		)
	}
	return (
		<>
			<p>COMIDA</p>
			{main.map((p, index) => {
				if (p.sabores.length > 0) {
					return (
						<div key={index}>
							<p
								style={{
									textAlign: 'center',
									backgroundColor: 'whitesmoke',
									padding: '10px',
									borderRadius: '5px',
								}}
							>
								ELEGI TUS SABORES
							</p>
							<div key={index} className='container-elegir-sabores'>
								<p>{`${p.name.toUpperCase()} x ${p.cant}`} </p>
								<ElegirSabores
									sabores={p.sabores}
									name={p.name}
									cantMaxProd={p.cant}
									pedido={pedido}
									setPedido={setPedido}
								></ElegirSabores>
							</div>
						</div>
					)
				} else {
					return (
						<div className='form-group' key={index}>
							<label style={{ textAlign: 'left' }} key={index}>
								{p.cant}x {p.name.toUpperCase()}
							</label>
						</div>
					)
				}
			})}
		</>
	)
}
