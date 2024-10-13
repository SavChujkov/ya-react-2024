import ingredientListModule from "./ingredient-list.module.css"
import Ingredient from '../ingredient/ingredient'
import PropTypes from 'prop-types';
import { IngredientType } from "../../../../utils/type"
import { useSelector } from "react-redux";

export default function IngredientList({ name, type }) {

    const ingredientsList = useSelector(state => state.ingredients.ingridientList)



    return (
        <div className={ingredientListModule.type_container}>
            <h2 className="text text_type_main-medium">{name}</h2>
            <div className={ingredientListModule.type}>
                {
                    ingredientsList.map(function (item) {
                        if (item.type === type) {
                            return <Ingredient ingredient={item} key={item._id} />
                        }
                    })
                }
            </div>
        </div>
    )
}

IngredientList.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['bun', 'sauce']).isRequired,
}
