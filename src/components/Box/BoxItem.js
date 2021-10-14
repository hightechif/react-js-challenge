import React from 'react';
import {Link} from 'react-router-dom';

const BoxItem = (props) => {
    return (
        <li className='boxes__item'>
            <figure className='boxes__item__pic-wrap'>
                <img 
                    className='boxes__item__img' 
                    alt='Media' 
                    src={props.src}
                />
            </figure>
            <div className='boxes__item__info'>
                <h2 className='boxes__item__text'>{props.headline}</h2>
                <Link className='boxes__item__link' to={props.path} target=''>Learn More</Link>
            </div>
        </li>
    )
}

export default BoxItem;
