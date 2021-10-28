import React from 'react';
import { StyledModal } from './Modal.styled';

const Modal = (props) => {
    return (
        <StyledModal>
            <div className="modal-rectangle"></div>
            <div className="modal-container">
                <div className="title">INVITE TEAMMATES</div>
                <input type="text" placeholder="Enter email address or name"/>
                <button className="add-message">+ add message</button>
                <button className="copy-button">Copy magic link</button>
            </div>
        </StyledModal>
    )
}

export default Modal;
