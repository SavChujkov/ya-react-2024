import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import dragElementModule from "./drag-element.module.css"
import PropTypes from 'prop-types';
import { IngredientType } from "../../../../utils/type"

export default function DragElement({ ingredientData, type }) {

    return (
        <div className={dragElementModule.flex_container}>
            {!type ? <DragIcon /> : null}
            <div style={{ width: "500px" }}>
                <ConstructorElement
                    text={ingredientData.name}
                    price={ingredientData.price}
                    thumbnail={ingredientData.image}
                    type={type}
                />
            </div>
        </div>
    )

}

DragElement.propTypes = {
    ingredientData: IngredientType.isRequired,
    type: PropTypes.string
}