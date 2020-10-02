import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {
	getCombos,
	updateCombo,
	deleteCombo as deleteComboApi,
} from '../../../Services/Api'
import { ModalCombo } from './Modal'
import './combo.scss'
export const Combos = () => {
	const [data, setData] = React.useState([])
	const [loading, setLoading] = React.useState(true)
	const [openModel, setOpenModal] = React.useState(false)

	React.useEffect(() => {
		async function getData() {
			try {
				const combos = await getCombos()
				setData(combos)
				setLoading(false)
			} catch (err) {
				console.log(err)
			}
		}
		getData()
	}, [])
	const handleOpen = () => {
		setOpenModal(!openModel)
	}

	const changeEstado = async (estado, slug, indexArray) => {
		try {
			const resultado = await updateCombo(slug, {
				estado: estado ? 'habilitado' : 'pausado',
			})
			if (resultado === 200) {
				let newData = [...data]
				newData = newData.map((c, index) => {
					if (index === indexArray) {
						c.estado = estado ? 'habilitado' : 'pausado'
					}
					return c
				})
				setData(newData)
			}
		} catch (err) {}
	}

	const deleteCombo = async (slug) => {
		try {
			const resultado = await deleteComboApi(slug)
			if (resultado === 200) {
				console.log('holas')
				setData([...data.filter((c) => c.slug !== slug)])
				window.alert('Eliminado correctamente')
			}
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<div style={{ wdith: '100%' }}>
			<h1
				style={{
					fontWeight: 'bold',
					fontFamily: 'sans-serif',
					marginTop: '20px',
				}}
			>
				COMBOS
			</h1>
			{loading ? (
				<h1>Cargando</h1>
			) : (
				<div className='container-table'>
					<Button
						variant='outlined'
						style={{ margin: '10px' }}
						onClick={handleOpen}
					>
						AÑADIR COMBO
					</Button>
					<ModalCombo open={openModel} handleOpen={handleOpen}></ModalCombo>
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Precio</th>
								<th>Imagen</th>
								<th>Main</th>
								<th>Bebidas</th>
								<th>Descripción</th>
								<th>Estado</th>
								<th>Opciones</th>
							</tr>
						</thead>
						<tbody>
							{data.map((dato, index) => {
								return (
									<tr key={index}>
										<td>{dato.name}</td>
										<td>${dato.valor}</td>
										<td>
											<img
												src={dato.img}
												width='80px'
												alt='prod'
												height='80px'
												style={{ borderRadius: '10px' }}
											></img>
										</td>
										<td>
											<ul>
												{dato.main.map((m, index) => {
													return (
														<li key={index}>
															{m.cant}x {m.name}
														</li>
													)
												})}
											</ul>
										</td>
										<td>
											<ul>
												{dato.bebidas.map((m, index) => {
													return (
														<li key={index}>
															{m.cant}x {m.type}
														</li>
													)
												})}
											</ul>
										</td>
										<td>
											<p>{dato.desc}</p>
										</td>
										<td
											style={
												dato.estado === 'pausado'
													? { backgroundColor: 'red', color: 'white' }
													: { color: 'white', backgroundColor: 'blue' }
											}
										>
											{dato.estado}
										</td>
										<td className='buttons-table'>
											<Button
												variant='contained'
												onClick={() => {
													deleteCombo(dato.slug)
												}}
												color='secondary'
											>
												Eliminar
											</Button>
											<Button variant='contained' color='primary'>
												<Link
													to={`/admin/combos/${dato.slug}`}
													style={{ textDecoration: 'none', color: 'white' }}
												>
													Editar
												</Link>
											</Button>
											{dato.estado === 'pausado' ? (
												<Button
													onClick={() => {
														changeEstado(true, dato.slug, index)
													}}
													variant='contained'
													color='primary'
												>
													Habilitar
												</Button>
											) : (
												<Button
													onClick={() => {
														changeEstado(false, dato.slug, index)
													}}
													variant='contained'
													color='primary'
												>
													Pausar
												</Button>
											)}
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}
