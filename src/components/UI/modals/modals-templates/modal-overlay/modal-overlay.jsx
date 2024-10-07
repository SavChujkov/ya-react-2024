import React from 'react'
import { createPortal } from 'react-dom';
import modalOverlay from "./modal-overlay.module.css"
import PropTypes from 'prop-types';


export default function ModalOverlay({ toggleDisplay, children }) {
    const modalRoot = document.getElementById("modals");
    return createPortal((
        <div onClick={toggleDisplay} className={modalOverlay.modal_overlay}>
            {children}
        </div>
    ),
        modalRoot
    )
}

ModalOverlay.propTypes = {
    toggleDisplay: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}