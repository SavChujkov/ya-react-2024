import React, { useEffect } from 'react'
import { useRef } from 'react';
import modalModule from "./modal.module.css"
import PropTypes from 'prop-types';


export default function Modal({ children, toggleDisplay }) {

    const handleModalPropagation = (event) => {
        event.stopPropagation()
    }

    const handleCloseOnEsc = (event) => {
        if (event.code === "Escape") {
            console.log("toggle pressed")
            toggleDisplay()
        }
    }

    const modalRef = useRef(null)

    useEffect(
        () => {
            modalRef.current.focus()
        },
        []

    )

    return (
        <div tabIndex={-1} ref={modalRef} onKeyDown={(event) => { handleCloseOnEsc(event) }} onClick={(event) => { handleModalPropagation(event) }} className={modalModule.modal}>
            {children}
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    toggleDisplay: PropTypes.func.isRequired
}