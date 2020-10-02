import React from 'react'
import './producto.scss'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
export const Producto = (props) => {
	const { data } = props
	return (
		<div className='producto-container'>
			<div className='producto-titulo'>
				<p>{data.name}</p>
			</div>
			<div className='producto-image'>
				<div className='desc-prod'>
					<p>{data.desc}</p>
					{data.sabores.length > 0 && (
						<p
							style={{
								marginBottom: '5px',
								fontSize: '0.7em',
								textTransform: 'uppercase',
							}}
						>
							Sabores:{' '}
							{data.sabores.map((s, index) => {
								return s + ' - '
							})}
						</p>
					)}
				</div>
				<img alt='producto' src={data.img}></img>
			</div>
			<div className='producto-precio'>
				<p>${parseInt(data.valor)}</p>
			</div>
			<div className='producto-button'>
				<Link to={`/producto/${data.slug}`}>
					<Button style={{ height: '60px' }} variant='contained' fullWidth>
						Agregar {data.name}
					</Button>
				</Link>
			</div>
			<div className='producto-pie'></div>
		</div>
	)
}
