import React from 'react'
import { Productos } from '../Producto'
import { Titulo } from '../Titulo'
import { Delivery } from '../Delivery'
import { Carrousel } from '../Carrousel'
import { getCombos, getProductos } from '../../Services/Api'
import './home.scss'
import { Combos } from '../Combo'
import { Loading } from '../Loading'
export const Home = (props) => {
	const [loading, setLoading] = React.useState(true)
	const [productos, setProductos] = React.useState([])
	React.useEffect(() => {
		async function getData() {
			try {
				// Producto
				const productos = await getProductos()
				setProductos(productos)
				setLoading(false)
			} catch (err) {}
		}
		getData()
	}, [])
	return (
		<section className='section-home'>
			{loading ? (
				<Loading></Loading>
			) : (
				<>
					<Delivery></Delivery>
					<Carrousel />
					<div className='f-t'>
						<Titulo text='Nuestros Productos'></Titulo>
					</div>
					<div className='combos'>
						<Productos productos={productos}></Productos>
					</div>
					<div className='f-t'>
						<Titulo text='Nuestros Combos'></Titulo>
					</div>
					<div className='combos'>
						<Combos></Combos>
					</div>
				</>
			)}
		</section>
	)
}
