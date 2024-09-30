import React from 'react'
import ingredientDetailsModule from "./ingredient-detalis.module.css"
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import { IngredientType } from "../../../../utils/type"

export default function IngredientDetails({ toggleDisplay, ingredientData }) {
    const ingredients = ingredientData

    return (
        <div className={ingredientDetailsModule.ingredient_details}>
            <div className={ingredientDetailsModule.heading}>
                <h2 className="text text_type_main-large">Детали ингридента</h2>
                <span className={ingredientDetailsModule.close_icon}>
                    <CloseIcon onClick={toggleDisplay} />
                </span>

            </div>

            <div className={ingredientDetailsModule.image_container}>
                <img className={ingredientDetailsModule.ingredient_image}
                    src={ingredients.image_large}
                    alt={ingredients.name} />
            </div>

            <div className={ingredientDetailsModule.second_heading}>
                <h3 className="text text_type_main-medium">{ingredients.name}</h3>
            </div>


            <div className={ingredientDetailsModule.element_container}>
                <div className={ingredientDetailsModule.el}>
                    <span className="text text_type_main-default text_color_inactive">Калории,ккал</span>
                    <span className="text text_type_digits-default text_color_inactive">{ingredients.calories}</span>
                </div>
                <div className={ingredientDetailsModule.el}>
                    <span className="text text_type_main-default text_color_inactive">Белки, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{ingredients.proteins}</span>
                </div>
                <div className={ingredientDetailsModule.el}>
                    <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{ingredients.fat}</span>
                </div>
                <div className={ingredientDetailsModule.el}>
                    <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
                    <span className="text text_type_digits-default text_color_inactive">{ingredients.carbohydrates}</span>
                </div>
            </div>
        </div >

    )
}

IngredientDetails.propTypes = {
    toggleDisplay: PropTypes.func.isRequired,
    ingredientData: IngredientType
}