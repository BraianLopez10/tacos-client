import React from 'react'
import { Modal, Paper, Input, TextField, Button } from '@material-ui/core'
import { getProductos, addCombo } from '../../../Services/Api'
import './modal.scss'
export const ModalCombo = (props) => {
	const { handleOpen, open } = props
	const [mainProd, setMainProd] = React.useState([])
	const [datosForm, setDatosForm] = React.useState({
		name: '',
		valor: 0,
		desc: '',
		img_prod: '',
	})

	const handleChangeForm = (e) => {
		// ACTUALIZAMOS EL MAIN PROD
		const index = mainProd.findIndex((p) => p.name === e.target.name)
		if (index !== -1) {
			mainProd[index] = {
				...mainProd[index],
				cant: e.target.value,
			}
			setMainProd([...mainProd])
		} else {
			setDatosForm({ ...datosForm, [e.target.name]: e.target.value })
		}
	}
	const handleImage = (e) => {
		setDatosForm({
			...datosForm,
			img_prod: e.target.files[0],
		})
	}

	React.useEffect(() => {
		async function getData() {
			try {
				const prod = await getProductos()
				const array = [
					...prod.map((p) => {
						return {
							name: p.name,
							cant: 0,
							sabores: p.sabores,
							type: p.type,
						}
					}),
				]
				setMainProd(array)
			} catch (error) {
				window.alert('Error en obtener productos')
			}
		}
		getData()
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()

		// INTRODUCIMOS EL MAIN DENTRO DE LOS DATOS QUE VAN AL BACKEND
		const datosFin = { ...datosForm }
		datosFin.main = mainProd.filter((p) => p.cant > 0 && p.type === 'comida')
		// INTRODUCIMOS EL BEBIDAS DENTRO DE LOS DATOS QUE VAN AL BACKEND
		datosFin.bebidas = mainProd.filter((p) => p.cant > 0 && p.type === 'bebida')
		// COMPROBAMOS Q EL MAIN NO ESTE VACIO
		if (!datosFin.main.length > 0) {
			return false
		}
		const formData = new FormData()
		formData.append('name', datosFin.name)
		formData.append('desc', datosFin.desc)
		formData.append('valor', datosFin.valor)
		formData.append('main', JSON.stringify(datosFin.main))
		formData.append('bebidas', JSON.stringify(datosFin.bebidas))
		formData.append('image-prod', datosFin.img_prod)

		try {
			const res = await addCombo(formData)
			if (res) {
				setDatosForm({
					name: '',
					valor: 0,
					desc: '',
					img_prod: '',
				})
				window.alert('Se ha agregado el combo agregar combo con éxito')
				window.location.reload()
			}
		} catch (err) {
			window.alert('No se ha podido agregar combo')
		}
	}
	return (
		<div>
			<Modal
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				open={open}
				onClose={handleOpen}
			>
				<Paper className='container-modal'>
					<div className='header-modal'>
						<h4 style={{ textAlign: 'center' }}>Datos Productos</h4>
						<Button onClick={handleOpen} variant='contained' color='secondary'>
							X
						</Button>
					</div>
					<form
						className='form-modal'
						onSubmit={handleSubmit}
						id='form-prod-add'
					>
						<div className='form-group'>
							<TextField
								fullWidth
								label='Nombre'
								variant='outlined'
								name='name'
								value={datosForm.name}
								onChange={handleChangeForm}
							/>
						</div>
						<div className='form-group'>
							<TextField
								fullWidth
								label='Precio $'
								name='valor'
								type='number'
								variant='outlined'
								value={datosForm.valor}
								onChange={handleChangeForm}
							/>
						</div>
						<div className='form-group'>
							<TextField
								fullWidth
								name='desc'
								multiline={true}
								label='Descripcion'
								variant='outlined'
								value={datosForm.desc}
								onChange={handleChangeForm}
							/>
						</div>
						<div className='group-main-bebidas'>
							<div className='label-width-input'>
								<h3>COMIDA</h3>
								{mainProd.map((m, index) => {
									return m.type === 'comida' ? (
										<div key={index}>
											<label>
												<strong style={{ textTransform: 'capitalize' }}>
													{m.name}
												</strong>{' '}
												cantidad{' '}
											</label>
											<input
												onChange={handleChangeForm}
												style={{ marginTop: '5px' }}
												name={m.name}
												type='number'
											/>
										</div>
									) : (
										''
									)
								})}
							</div>
							<div className='label-width-input'>
								<h3>BEBIDAS</h3>
								{mainProd.map((m, index) => {
									return m.type === 'bebida' ? (
										<div key={index}>
											<label>
												<strong style={{ textTransform: 'capitalize' }}>
													{m.name}
												</strong>{' '}
												cantidad{' '}
											</label>
											<input
												onChange={handleChangeForm}
												style={{ marginTop: '5px' }}
												name={m.name}
												type='number'
											/>
										</div>
									) : (
										''
									)
								})}
							</div>
						</div>
						<Input
							style={{ marginTop: '10px' }}
							type='file'
							name='img_prod'
							onChange={handleImage}
						></Input>
						<div className='form-group'>
							<Button
								fullWidth
								type='submit'
								variant='contained'
								color='secondary'
							>
								Guardar
							</Button>
						</div>
					</form>
				</Paper>
			</Modal>
		</div>
	)
}
