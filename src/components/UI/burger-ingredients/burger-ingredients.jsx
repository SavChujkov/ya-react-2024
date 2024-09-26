import burgerIngredientsModule from "./burger-ingredients.module.css"
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import classNames from 'classnames';
import IngredientList from './ingredient-list/ingredient-list';
import PropTypes from 'prop-types';
import { IngredientType } from "../../../utils/type"

export default function BurgerIngredients({ ingredientsList }) {
    return (
        <section className={burgerIngredientsModule.section_block}>
            <h1 className={classNames(burgerIngredientsModule.header,
                "text text_type_main-large")}>
                Соберите бургер
            </h1>
            {/*Когда будет функционал вынести в отдельный компонент */}
            <div className={burgerIngredientsModule.type_sliderbar}>
                <Tab>Булки</Tab>
                <Tab>Соусы</Tab>
                <Tab>Начинки</Tab>
            </div>
            <div className={burgerIngredientsModule.type_list}>
                <IngredientList name="Булки" type={"bun"} ingredientsList={ingredientsList} />
                <IngredientList name="Соусы" type={"sauce"} ingredientsList={ingredientsList} />
            </div>
        </section >
    )
}

BurgerIngredients.propTypes = {
    ingredientsList: PropTypes.arrayOf(IngredientType).isRequired
}
