import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal-frame">
            <div className="modal-rectangle"></div>
            <div className="modal-container">
                <div className="title">INVITE TEAMMATES</div>
                <input type="text" placeholder="Enter email address or name"/>
                <button className="add-message">+ add message</button>
                <button className="copy-button">Copy magic link</button>
            </div>
        </div>
    )
}

export default Modal;
