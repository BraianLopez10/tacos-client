import React from 'react'

export const Loading = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<img
				width='320px'
				src='/img/loading.gif'
				alt='loading'
				style={{ borderRadius: '50%' }}
			/>
		</div>
	)
}
