import React from 'react';

const ButtonNotif = (props) => {
    return (
        <button className={props.className}>
            Pesan
            <div className={props.decorator}></div>
        </button>
    )
}

export default ButtonNotif;