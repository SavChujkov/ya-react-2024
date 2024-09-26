import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientModule from "./ingredient.module.css"
import { IngredientType } from "../../../../utils/type"

export default function Ingredient({ ingredient }) {
    return (
        <div className={ingredientModule.ingredient}>
            <img src={ingredient.image} alt={ingredient.name} />
            <div className={ingredientModule.price_details}>
                <span className="text text_type_digits-default">{ingredient.price}</span>
                <CurrencyIcon />
            </div>
            <span className="text text_type_main-default">{ingredient.name}</span>
        </div>
    )
}

Ingredient.propTypes = {
    ingredient: IngredientType.isRequired
}
