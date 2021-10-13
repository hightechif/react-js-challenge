import React from 'react';
import CardItem from './CardItem';

function Card() {
	return (
		<div className='cards__container'>
			<ul className='cards__items'>
				<CardItem
					src='img/media.png'
					text='Special Feature'
					path='#'
				/>
				<CardItem
					src='img/media.png'
					text='Special Feature'
					path='#'
				/>
				<CardItem
					src='img/media.png'
					text='Special Feature'
					path='#'
				/>
				<CardItem
					src='img/media.png'
					text='Special Feature'
					path='#'
				/>
			</ul>
		</div>
	)
}

export default Card;
