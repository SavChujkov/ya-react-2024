import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import dragElementModule from "./drag-element.module.css"
import PropTypes from 'prop-types';
import { IngredientType } from "../../../../utils/type"

export default function DragElement({ ingredientData, type, setSelectedData, toggleShowModal }) {

    const selectDragElement = () => {
        setSelectedData(ingredientData)
        toggleShowModal()
    }


    return (
        <div className={type == "main" ? dragElementModule.drag_element : dragElementModule.closing_element}>
            {type == "main" ? <DragIcon /> : null}
            <div onClick={selectDragElement} style={{ width: "500px" }}>
                <ConstructorElement
                    text={ingredientData.name}
                    price={ingredientData.price}
                    thumbnail={ingredientData.image}
                    type={type}
                    isLocked={type == "main" ? null : true}
                />
            </div>
        </div >
    )

}

DragElement.propTypes = {
    ingredientData: IngredientType.isRequired,
    type: PropTypes.string,
    setSelectedData: PropTypes.func,
    toggleShowModal: PropTypes.func
}