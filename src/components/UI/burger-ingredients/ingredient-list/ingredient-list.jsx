import React from 'react'
import ingredientlist from "./ingredient-list.module.css"
import Ingredient from '../ingredient/ingredient'
import PropTypes from 'prop-types';

export default function IngredientList({ name, type, ingredients_list }) {
    return (
        <div className={ingredientlist.type_container}>
            <h2 className="text text_type_main-medium">{name}</h2>
            <div className={ingredientlist.type}>
                {
                    ingredients_list.map(function (item) {
                        if (item.type === type) {
                            return <Ingredient ingredient={item} />
                        }
                    })
                }
            </div>
        </div>
    )
}

IngredientList.propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(['bun', 'sauce']),
    ingredients_list: PropTypes.array,
}
