import React from 'react'
import burgerIngredients from "./burger-ingredients.module.css"
import Ingredient from './ingredient/ingredient'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import classNames from 'classnames';
import IngredientList from './ingredient-list/ingredient-list';
import PropTypes from 'prop-types';

export default function BurgerIngredients({ ingredients_list }) {
    return (
        <section className={burgerIngredients.section_block}>
            <h1 className={classNames(burgerIngredients.header,
                "text text_type_main-large")}>
                Соберите бургер
            </h1>
            {/*Когда будет функционал вынести в отдельный компонент */}
            <div className={burgerIngredients.type_sliderbar}>
                <Tab>Булки</Tab>
                <Tab>Соусы</Tab>
                <Tab>Начинки</Tab>
            </div>
            <div className={burgerIngredients.type_list}>
                <IngredientList name="Булки" type={"bun"} ingredients_list={ingredients_list} />
                <IngredientList name="Соусы" type={"sauce"} ingredients_list={ingredients_list} />
            </div>
        </section >
    )
}

BurgerIngredients.propTypes = {
    ingredients_list: PropTypes.array
}
