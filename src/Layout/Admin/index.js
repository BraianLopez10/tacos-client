import React from 'react'
import { Link } from 'react-router-dom'
import './admin.scss'
export const Admin = (props) => {
	return (
		<div className='admin-section'>
			<div className='menu-admin'>
				<ul>
					<li>
						<Link to='/admin/productos'>PRODUCTOS</Link>
					</li>
					<li>
						<Link to='/admin/pedidos'>PEDIDOS</Link>
					</li>
					<li>
						<Link to='/admin/combos'>COMBOS</Link>
					</li>
				</ul>
			</div>
			<h1>ADMINISTRACIÓN </h1>
			{props.children}
		</div>
	)
}
