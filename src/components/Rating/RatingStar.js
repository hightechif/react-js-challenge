import React from 'react';
import Star from '../../assets/img/Star.svg';
import StarUnchecked from'../../assets/img/Star-unchecked.svg';

function RatingStar() {
    return (
        <div className="new-rating">
            <img src={Star} alt="star icon"/>
            <img src={Star} alt="star icon"/>
            <img src={StarUnchecked} alt="star icon"/>
        </div>
    )
}

export default RatingStar
