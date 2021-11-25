import React from 'react';
import BoxesItem from './BoxItem';

const Boxes = () => {
    return (
        <div className="boxes__container">
            <ul className="boxes__items">
                <BoxesItem src='images/media2.png' headline='Lorem ipsum dolor sit amet, consectetur adipiscing elit' path='#' />
                <BoxesItem src='images/media2.png' headline='Lorem ipsum dolor sit amet, consectetur adipiscing elit' path='#' />
                <BoxesItem src='images/media2.png' headline='Lorem ipsum dolor sit amet, consectetur adipiscing elit' path='#' />
            </ul>
        </div>
    )
}

export default Boxes;
