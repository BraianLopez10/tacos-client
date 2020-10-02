import React from 'react'
import './section.scss'
import { Aside } from '../../Components/Aside'
import { Header } from '../../Components/Menu'
import { useLocation } from 'react-router-dom'
export const Section = (props) => {
	const { pathname } = useLocation()
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return (
		<>
			<Header></Header>
			<div className='section-container'>
				{props.children}
				<Aside></Aside>
			</div>
		</>
	)
}
