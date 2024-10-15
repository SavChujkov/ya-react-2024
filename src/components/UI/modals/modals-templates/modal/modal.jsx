import React, { useEffect } from 'react'
import modalModule from "./modal.module.css"
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

export default function Modal({ children, toggleDisplay, modalHead }) {

    const handleModalPropagation = (event) => {
        event.stopPropagation()
    }

    const handleCloseOnEsc = useCallback((event) => {
        if (event.code === "Escape") {
            toggleDisplay()
        }
    })

    useEffect(
        () => {
            document.addEventListener('keydown', handleCloseOnEsc)
            //modalRef.current.focus()
            return () => {
                document.removeEventListener('keydown', handleCloseOnEsc)
            }
        },
        [handleCloseOnEsc]
    )

    return (
        <ModalOverlay toggleDisplay={toggleDisplay}>
            <div tabIndex={-1} onClick={(event) => { handleModalPropagation(event) }} className={modalModule.modal}>
                <div className={modalModule.heading}>
                    <h2 className="text text_type_main-large">{modalHead}</h2>
                    <span className={modalModule.close_icon}>
                        <CloseIcon onClick={toggleDisplay} />
                    </span>

                </div>
                {children}
            </div>
        </ModalOverlay>
    )
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    toggleDisplay: PropTypes.func.isRequired,
    modalHead: PropTypes.string
}