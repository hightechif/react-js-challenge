import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardItemStyle = styled.li`
	width: 270px;
`;

function CardItem(props) {
	return (
		<>
			<CardItemStyle>
				<figure className='cards__item__pic-wrap'>
					<img
						className='cards__item__img'
						alt='Media'
						src={props.src}
					/>
				</figure>
				<div className='cards__item__info'>
					<h3 className='cards__item__text'>{props.text}</h3>
					<Link className='cards__item__link' to={props.path} target=''>See More {'>'}</Link>
				</div>
			</CardItemStyle>
		</>
	)
}

export default CardItem;
