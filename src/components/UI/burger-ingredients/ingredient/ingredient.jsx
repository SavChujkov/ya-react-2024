import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientModule from "./ingredient.module.css"
import { IngredientType } from "../../../../utils/type"
import { useDrag } from 'react-dnd';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

export default function Ingredient({ ingredient }) {

    const choosenIngredientsCount = useSelector(state => (state.choosenIngredients.countChoosenIngredients))
    const choosenBun = useSelector(state => (state.choosenIngredients.choosenBun))
    const choosenBunCount = useSelector(state => (state.choosenIngredients.choosenBunCount))


    //если тип булка подставляем кол-во булок, иначе кол-во ингридиента
    const amountInConstructor = (ingredient.type === "bun" && choosenBun._id == ingredient._id) ?
        choosenBunCount :
        choosenIngredientsCount[ingredient._id]



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
