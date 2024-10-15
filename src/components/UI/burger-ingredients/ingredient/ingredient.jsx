import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientModule from "./ingredient.module.css"
import { IngredientType } from "../../../../utils/type"
import { useDrag } from 'react-dnd';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

export default function Ingredient({ ingredient }) {

    const chosenIngredientsCount = useSelector(state => (state.chosenIngredients.countChosenIngredients))
    const chosenBun = useSelector(state => (state.chosenIngredients.chosenBun))
    const chosenBunCount = useSelector(state => (state.chosenIngredients.chosenBunCount))


    //если тип булка подставляем кол-во булок, иначе кол-во ингридиента
    const amountInConstructor = (ingredient.type === "bun" && chosenBun._id == ingredient._id) ?
        chosenBunCount :
        chosenIngredientsCount[ingredient._id]



    const [{ opacity }, ref] = useDrag({
        type: 'ingredient',
        item: {
            ...ingredient
        },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });

    return (
        <div ref={ref} className={ingredientModule.ingredient}>
            {
                amountInConstructor ?
                    <Counter count={amountInConstructor} size="default" /> :
                    null
            }

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
