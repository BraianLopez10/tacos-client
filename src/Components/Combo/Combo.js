import React from 'react'
import './combo.scss'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
export const Combo = (props) => {
	const { comboData } = props
	return (
		<div className='card-combo'>
			<div className='combo-titulo'>
				<h3>{comboData.name}</h3>
			</div>
			<div className='combo-image'>
				<img alt='combo' src={comboData.img}></img>
			</div>
			<div className='combo-precio'>
				<p>${comboData.valor}</p>
			</div>
			<div className='combo-button'>
				<Button variant='contained' fullWidth>
					<Link
						to={`/combo/${comboData.slug}`}
						style={{ textDecoration: 'none', color: 'black' }}
					>
						Agregar combo
					</Link>
				</Button>
			</div>
			<div className='combo-pie'></div>
		</div>
	)
}
