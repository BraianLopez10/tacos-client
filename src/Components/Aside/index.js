import React from 'react'
import { Titulo } from '../Titulo'
import './aside.scss'

export const Aside = () => {
	return (
		<div className='aside'>
			<div className='aside-header'>
				<Titulo text='Seguinos'></Titulo>
			</div>
			<div className='aside-social'>
				<div className='image-aside-social'>
					<a
						rel='noopener noreferrer'
						href='https://www.instagram.com/mexico.lindoyquerico/'
						target='_blank'
					>
						<img src='/img/instagram.png' alt='inst'></img>
					</a>
					<p>Instagram</p>
				</div>
				<div className='image-aside-social'>
					<img src='/img/face.png' alt='inst'></img>
					<p>Facebook</p>
				</div>
			</div>
			<div className='img-info'>
				<img alt='seguirnos' src='/img/info-mod.jpeg'></img>
			</div>
			<div className='img-info'>
				<img alt='seguirnos' src='/img/seguinos.jpeg'></img>
			</div>
		</div>
	)
}
