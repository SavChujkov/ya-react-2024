import React from 'react'
import Constructor_Element from '../constructor-element/constructor-element'
import ingredientlist from "./ingredient-list.module.css"
import PropTypes from 'prop-types';

export default function IngredientList({ ingredients_list }) {
    return (
        <div
            className={ingredientlist.ingredients_list}>
            {
                ingredients_list.map(function (item, index) {
                    let element_type
                    element_type = index == 0 ? "top"
                        : index == ingredients_list.length - 1 ? "bottom"
                            : undefined
                    return <Constructor_Element ing_data={item} type={element_type} />
                })
            }
        </div>
    )
}

IngredientList.propTypes = {
    ingredients_list: PropTypes.array
}