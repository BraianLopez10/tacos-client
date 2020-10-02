import React from 'react'
export const PagoComplete = (props) => {
	const params = new URLSearchParams(window.location.href)
	const statePago = params.get('collection_status')
	return (
		<div
			style={{
				height: '200px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: statePago ? '#28df99' : '#ff4b5c',
				color: 'white',
			}}
		>
			{statePago === 'approved' ? (
				<div>
					<h1>Tu pago ha sido aceptado :D</h1>
				</div>
			) : (
				<h1>Hay un problema con tu pago :(</h1>
			)}
		</div>
	)
}
