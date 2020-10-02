import React from 'react'

export const SubTotal = (props) => {
	const [total, setTotal] = React.useState(0)
	const { cuenta } = props

	React.useEffect(() => {
		const calcTotal = () => {
			let total = 0
			cuenta.map((o) => (total = total + o.valor))
			setTotal(total)
		}
		calcTotal()
	}, [cuenta])

	return (
		<div className='subtotal'>
			<h3>Subtotal</h3>
			<ul>
				{cuenta.map((o, index) => {
					return (
						<li key={index}>
							<p style={{ textTransform: 'capitalize' }}>{`${o.name} ${
								o.sabor || ''
							}`}</p>
							<p className='precio-p'>${o.valor}</p>
						</li>
					)
				})}
				<li className='total-li'>
					<p>TOTAL</p>
					<p className='total-p'>${total}</p>
				</li>
			</ul>
		</div>
	)
}
