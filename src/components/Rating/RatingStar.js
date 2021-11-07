import React from 'react';
import Star from '../../assets/icon/Star.svg';
import StarUnchecked from'../../assets/icon/Star-unchecked.svg';
import styled from 'styled-components';

const StyledRating = styled.div`
    display: flex;
    flex-direction: row;
`

function RatingStar() {
    return (
        <StyledRating>
            <img src={Star} alt="star icon"/>
            <img src={Star} alt="star icon"/>
            <img src={StarUnchecked} alt="star icon"/>
        </StyledRating>
    )
}

export default RatingStar
