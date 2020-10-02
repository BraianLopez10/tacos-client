import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Button, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}))

export default function ModalPedido(props) {
	const classes = useStyles()
	const { producto, addProdToCuenta } = props
	const [open, setOpen] = React.useState(false)

	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const addProductoWithSabor = (s) => {
		const prod = {
			name: producto.name,
			valor: producto.valor,
			slug: producto.slug,
			sabor: s,
		}
		addProdToCuenta(prod)
		handleClose()
	}
	return (
		<div>
			<Button
				variant='outlined'
				className='button-add-prod'
				onClick={() => {
					handleOpen()
				}}
			>
				{producto.name}
			</Button>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={handleClose}
			>
				<div>
					<div className={classes.paper}>
						<Typography align='center' style={{ marginBottom: '10px' }}>
							Elige el sabor de {producto.name}
						</Typography>
						{producto.sabores.map((s, index) => {
							return (
								<Button
									key={index}
									style={{ margin: '2px' }}
									variant='outlined'
									onClick={() => {
										addProductoWithSabor(s)
									}}
								>
									{s}
								</Button>
							)
						})}
					</div>
				</div>
			</Modal>
		</div>
	)
}
