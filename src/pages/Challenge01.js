import React, { useState } from 'react'
import Button from '../components/Button/Button';
import ButtonNotif from '../components/Button/ButtonNotif';
import RatingRound from '../components/Rating/RatingRound';
import RatingStar from '../components/Rating/RatingStar';
import Badge from '../components/Badge/Badge';
import Modal from '../components/Modal/Modal';
import BadgeColor from '../components/Badge/BadgeColor';
import BadgeCloud from '../components/Badge/BadgeCloud';

const Challenge01 = ({text, className, decorator}) => {
    const [open,setopen] = useState(false);

    const onClickFunction = () => {
        setopen(!open)
    }

    return (
        <div className="challenge01">
            <ButtonNotif text="Pesan" className="btn-notif" decorator="circle"/>
            <div className="button-container">
                <Button text="Button Primary" className="btn-primary"/>
                <Button text="Button Secondary" className="btn-secondary"/>
                <Button text="Button Disabled" className="btn-disabled"/>
                <Button text="Button Success" className="btn-success"/>
                <Button text="Button Delete" className="btn-delete"/>
            </div>
            <div className="rating-container">
                <RatingRound />
                <RatingStar />
            </div>
            <div className="badge-container">
                <Badge text="Badge" className="badge" />
                <Badge text="Badge" className="badge-second" />
                <BadgeColor />
                <BadgeCloud />
            </div>
            <button className="btn-primary" onClick={() => onClickFunction()}>Modal Button</button>
            {open && <Modal/>}
        </div>
    )
}

export default Challenge01;
