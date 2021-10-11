import React from 'react';

const Badge = (props) => {
    return (
        <div className={props.className}>
            {props.text}
        </div>
    )
}

export default Badge;
