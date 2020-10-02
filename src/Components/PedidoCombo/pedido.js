import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './pedido.scss'
import { Button, TextField } from '@material-ui/core'
import { Agregados } from './Agregados/Agregados'
import { SubTotal } from './SubTotal/SubTotal'
import { AddProd } from './AddProd/AddProd'
import { Bebidas } from './Bebidas/Bebidas'
import { Loading } from '../Loading'
import { getCombosBySlug } from '../../Services/Api'
import { Main } from './Main'
import { useContextSabores } from '../../Context/SaboresContext'

export const ComboPedido = (props) => {
	const { id } = useParams()
	const [loading, setLoading] = React.useState(true)
	const [cuenta, setCuenta] = React.useState([])
	const [comboData, setComboData] = React.useState({})
	const [pedido, setPedido] = React.useState()
	const [observaciones, setObservaciones] = React.useState('')
	const contextSabores = useContextSabores()
	const [errores, setErrores] = React.useState('')
	const history = useHistory()
	const changeObservaciones = (e) => {
		setObservaciones(e.target.value)
	}
	React.useEffect(() => {
		async function getData() {
			try {
				const combo = await getCombosBySlug(id)
				setComboData(combo)
				inicializarCuenta(combo)
				console.log(combo)
				setTimeout(() => {
					setLoading(false)
				}, 1000)
			} catch (err) {}
		}
		getData()
	}, [id])

	const inicializarCuenta = (combo) => {
		setCuenta([
			{
				name: combo.name,
				valor: combo.valor,
			},
		])
	}
	const handleSubmitForm = (e) => {
		e.preventDefault()
		let total = 0
		cuenta.map((o) => (total = total + o.valor))
		const pedidoFinal = {
			combo: comboData,
			detallePedidoCombo: pedido,
			extras: cuenta.filter((o) => o.name !== comboData.name),
			total,
			observaciones,
		}
		const stateSabores = contextSabores.state.find((s) => s.boolean === false)
		if (!stateSabores) {
			console.log('No Hay Errores')
			setErrores('')
			localStorage.setItem('cart', JSON.stringify(pedidoFinal))
			history.push('/carrito')
		} else {
			setErrores(`Faltan sabores por completar en ${stateSabores.name}`)
			console.log('Hay Errores')
		}
	}

	const handleChangueCuenta = (newCuenta) => {
		setCuenta(newCuenta)
	}

	return (
		<div className='section-pedido'>
			{loading ? (
				<Loading></Loading>
			) : (
				<div className='pedido-form'>
					<p style={{ fontWeight: 'bold', color: 'black', fontSize: '1.2em' }}>
						TU PEDIDO DE COMBO
					</p>
					<div className='pedido-combo-img'>
						<img src={comboData.img} alt='combo'></img>
					</div>
					{/*  */}
					<p className='titulo-pedido'> {comboData.name}</p>
					<form onSubmit={handleSubmitForm}>
						<div className='section-menu'>
							<Main
								pedido={pedido}
								setPedido={setPedido}
								main={comboData.main}
							></Main>
						</div>
						{comboData.bebidas.length > 0 && (
							<div className='section-menu'>
								<Bebidas bebidas={comboData.bebidas}></Bebidas>
							</div>
						)}
						<div className='section-menu' style={{ marginTop: '40px' }}>
							<AddProd
								handleChangueCuenta={handleChangueCuenta}
								cuenta={cuenta}
							></AddProd>
						</div>
						<div className='section-menu'>
							<Agregados
								handleChangueCuenta={handleChangueCuenta}
								cuenta={cuenta}
							></Agregados>
						</div>
						<div className='section-menu'>
							<p>Observaciones sobre el pedido</p>
							<TextField
								placeholder='Observaciones'
								multiline={true}
								fullWidth
								onChange={changeObservaciones}
								value={observaciones}
								rows={5}
							></TextField>
						</div>
						<SubTotal cuenta={cuenta}></SubTotal>
						{errores.length > 0 && (
							<div
								style={{
									backgroundColor: '#F8D7DA',
									width: '100%',
									height: '50px',
									display: 'flex',
									alignContent: 'center',
									alignItems: 'center',
									justifyContent: 'center',
									marginBottom: '10px',
								}}
							>
								<p style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
									{' '}
									{errores}
								</p>
							</div>
						)}

						<Button
							variant='contained'
							fullWidth
							color='secondary'
							type='submit'
						>
							Agregar a Pedido
						</Button>
					</form>
				</div>
			)}
		</div>
	)
}
