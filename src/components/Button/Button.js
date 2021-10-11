import React from 'react';

const Button = (props) => {
    return (
        <button className={props.className}>
            <div className={props.textStyle}>
                {props.text}
            </div>
        </button>
    )
}

export default Button
