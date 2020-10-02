import React from 'react'
import {
	Modal,
	Paper,
	Input,
	TextField,
	Button,
	InputLabel,
	Select,
	MenuItem,
} from '@material-ui/core'
import './modal.scss'
import { Sabor } from './Sabor'
import { addProducto } from '../../../Services/Api'

export const ModalProd = (props) => {
	const { handleOpen, open, addData } = props
	const [saboresP, setSaboresP] = React.useState([])
	const [datos, setDatos] = React.useState({
		name: '',
		valor: 0,
		desc: '',
		img_prod: '',
		type: '',
	})

	const handleChangeForm = (e) => {
		setDatos({ ...datos, [e.target.name]: e.target.value })
	}

	const handleImage = (e) => {
		setDatos({
			...datos,
			img_prod: e.target.files[0],
		})
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('name', datos.name)
		formData.append('valor', datos.valor)
		formData.append('desc', datos.desc)
		formData.append('image-prod', datos.img_prod)
		formData.append('type', datos.type)
		formData.append('sabores', JSON.stringify(saboresP))

		try {
			const newProd = await addProducto(formData)
			addData(newProd)
			setDatos({
				name: '',
				valor: 0,
				desc: '',
				img_prod: '',
				type: '',
			})
			props.handleOpen()
		} catch (err) {
			window.alert('No se ha podido agregar el producto , intente mas tarde')
		}
	}

	return (
		<Modal
			onClose={handleOpen}
			open={open}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Paper className='container-modal-prod'>
				<div className='header-modal'>
					<h4 style={{ textAlign: 'center' }}>Datos Productos</h4>
					<Button onClick={handleOpen} variant='contained' color='secondary'>
						X
					</Button>
				</div>
				<form
					className='form-modal-prod'
					onSubmit={handleSubmit}
					id='form-prod-add'
				>
					<div className='form-group-prod'>
						<InputLabel>ELEGI QUE TIPO DE PRODUCTO ES</InputLabel>
						<Select
							fullWidth
							required={true}
							name='type'
							value={datos.type}
							onChange={handleChangeForm}
						>
							<MenuItem value={'comida'}>Comida</MenuItem>
							<MenuItem value={'bebida'}>Bebida</MenuItem>
						</Select>
					</div>
					<div className='form-group-prod'>
						<TextField
							fullWidth
							label='Nombre'
							variant='outlined'
							name='name'
							value={datos.name}
							onChange={handleChangeForm}
						/>
					</div>
					<div className='form-group-prod'>
						<TextField
							fullWidth
							label='Precio $'
							name='valor'
							type='number'
							variant='outlined'
							value={datos.valor}
							onChange={handleChangeForm}
						/>
					</div>
					<div className='form-group-prod'>
						<TextField
							fullWidth
							name='desc'
							multiline={true}
							label='Descripcion'
							variant='outlined'
							value={datos.desc}
							onChange={handleChangeForm}
						/>
					</div>
					<Sabor saboresP={saboresP} setSaboresP={setSaboresP}></Sabor>
					<Input type='file' name='img_prod' onChange={handleImage}></Input>
					<div className='form-group-prod'>
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
	)
}
