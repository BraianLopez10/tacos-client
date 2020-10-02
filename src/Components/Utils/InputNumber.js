import React from 'react'
import { useContextSabores } from '../../Context/SaboresContext'
import './input.scss'
export const InputNumber = (props) => {
	const [value, setValue] = React.useState(0)
	const {
		name,
		cantActualProd,
		cantMaxProd,
		setCantActualProd,
		handleChangePedido,
	} = props
	const handleClick = (e) => {
		e.preventDefault()
		if (e.target.name === 's') {
			if (cantActualProd + 1 > cantMaxProd) {
				return
			}
			handleChangePedido({ sabor: name, cant: value + 1 })
			setValue(value + 1)
			setCantActualProd(cantActualProd + 1)
		} else {
			if (value !== 0) {
				handleChangePedido({ sabor: name, cant: value - 1 })
				setCantActualProd(cantActualProd - 1)
				setValue(value - 1)
			}
		}
	}
	return (
		<div className='input-number'>
			<button name='r' onClick={handleClick}>
				-
			</button>
			<input readOnly type='number' value={value}></input>
			<button name='s' onClick={handleClick}>
				+
			</button>
		</div>
	)
}
