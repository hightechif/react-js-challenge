import React from 'react';
import Star from '../../assets/icon/Star.svg';
import StarUnchecked from'../../assets/icon/Star-unchecked.svg';

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
