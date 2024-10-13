import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import dragElementModule from "./drag-element.module.css"
import PropTypes from 'prop-types';
import { IngredientType } from "../../../../utils/type"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
    DELETE_CHOOSEN_INGREDIENT,
    DELETE_CHOOSEN_BUN
}
    from '../../../../services/actions/burget-constructor';

export default function DragElement({ ingredientData, type, setSelectedData, toggleShowModal, uuid }) {

    console.log("set new element", uuid, ingredientData)
    const selectDragElement = () => {
        setSelectedData(ingredientData)
        toggleShowModal()
    }

    const dispatch = useDispatch()

    const removeFromConstructor = (event) => {
        console.log("called delete button")
        event.stopPropagation()
        event.preventDefault()
        dispatch({
            type: DELETE_CHOOSEN_INGREDIENT,
            ingredient: ingredientData,
            uuid: uuid
        })
    }

    return (
        <div className={type == "main" ? dragElementModule.drag_element : dragElementModule.closing_element}>
            {type == "main" ? <DragIcon /> : null}
            <div onClick={selectDragElement} style={{ width: "550px" }}>
                <ConstructorElement
                    text={type == "main" ? ingredientData.name :
                        type == "top" ? `${ingredientData.name}\n(верх)` :
                            type == "bottom" ? `${ingredientData.name}\n(низ)` :
                                ingredientData.name
                    }
                    price={ingredientData.price}
                    thumbnail={ingredientData.image}
                    type={type}
                    isLocked={type == "main" ? null : true}
                    handleClose={removeFromConstructor}
                />
            </div>
        </div >
    )

}

DragElement.propTypes = {
    ingredientData: IngredientType.isRequired,
    uuid: PropTypes.string.isRequired,
    type: PropTypes.string,
    setSelectedData: PropTypes.func,
    toggleShowModal: PropTypes.func

}