import React from 'react'
import { Combo } from './Combo'
import { getCombos } from '../../Services/Api'
import './index.scss'

export const Combos = (props) => {
	const [combosData, setCombosData] = React.useState([])
	React.useEffect(() => {
		// Combos
		async function getData() {
			const combos = await getCombos()
			setCombosData(combos)
		}
		getData()
	}, [])
	return (
		<>
			<div className='container-combo'>
				{combosData.length > 0 ? (
					combosData.map((c, index) => {
						if (c.estado !== 'pausado') {
							return (
								<div className='combos-container'>
									<Combo comboData={c} key={index}></Combo>
								</div>
							)
						} else {
							return ''
						}
					})
				) : (
					<h1 style={{ color: 'white', textAlign: 'center' }}>
						Estamos creando los mejores combos para ti{' '}
					</h1>
				)}
			</div>
		</>
	)
}
