import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import { Button } from '@material-ui/core'
import './tablepedido.scss'
export const TablePedido = (props) => {
	const { pedido } = props
	return (
		<div className='container-table-cart'>
			<table>
				<thead>
					<tr>
						<td className='text-hd'>PRODUCTO</td>
						<td className='text-hd'>DETALLE</td>
						<td className='text-hd'>OPCIÓN</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div>
								<img
									src={pedido.combo.img}
									style={{ marginRight: '10px', objectFit: 'cover' }}
									width='100px'
									height='100px'
								></img>
							</div>
						</td>
						<td>
							<div>
								<div>
									{pedido.detallePedidoCombo.map((e, index) => {
										return (
											<div key={index}>
												<span
													style={{
														fontWeight: 'bold',
														textTransform: 'capitalize',
													}}
												>
													{e.name}
												</span>
												<div style={{ margin: '0', padding: '0' }} key={index}>
													{e.sabores.map((s, index) => {
														return (
															<span
																key={index}
																style={{
																	textTransform: 'capitalize',
																	fontSize: '0.8em',
																	border: '0.8px solid gray',
																	marginLeft: '1px',
																}}
															>
																{' '}
																{`${s.sabor} x${s.cant}`}
															</span>
														)
													})}
												</div>
											</div>
										)
									})}
								</div>
							</div>
						</td>
						<td>
							<Button variant='outlined'>
								<DeleteOutlineIcon />
							</Button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
