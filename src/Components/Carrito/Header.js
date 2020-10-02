import React from 'react'
import HorizontalLinearStepper from './Stepper'

export const Header = (props) => {
	const { state } = props
	return (
		<>
			<div className='container-card-cart'>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<img
						src='/img/cart.png'
						width='100px'
						height='100px'
						style={{ marginRight: '20px' }}
					></img>
					<h1 style={{ textAlign: 'center' }}>Tu carrito</h1>
				</div>
			</div>
			<div className='progreso-cart'>
				<HorizontalLinearStepper state={state}></HorizontalLinearStepper>
			</div>
		</>
	)
}
