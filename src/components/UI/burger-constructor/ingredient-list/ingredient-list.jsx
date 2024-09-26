import DragElement from '../constructor-element/constructor-element'
import ingredientlistModule from "./ingredient-list.module.css"
import PropTypes from 'prop-types';
import { IngredientType } from "../../../../utils/type"

export default function IngredientList({ ingredientsList }) {
    return (
        <div
            className={ingredientlistModule.ingredients_list}>
            {
                ingredientsList.map(function (item, index) {
                    let elementType
                    elementType = index == 0 ? "top"
                        : index == ingredientsList.length - 1 ? "bottom"
                            : undefined
                    return <DragElement ingredientData={item} type={elementType} />
                })
            }
        </div>
    )
}

IngredientList.propTypes = {
    ingredientsList: PropTypes.arrayOf(IngredientType).isRequired
}