import React from 'react'
import burgerConstructorModule from "./burger-constructor.module.css"
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientList from './ingredient-list/ingredient-list'
import PropTypes from 'prop-types';
import { IngredientType } from "../../../utils/type"

export default function BurgerConstructor({ ingredientsList }) {
    return (
        <section className={burgerConstructorModule.section_block}>

            <IngredientList ingredientsList={ingredientsList} />

            {/* когда будет функционал оформления заказа, можно вынести в компонент */}
            <div className={burgerConstructorModule.make_order}>
                <div className={burgerConstructorModule.price_summary}>
                    <span className="text text_type_main-large">123</span>
                    <CurrencyIcon />
                </div>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    ingredientsList: PropTypes.arrayOf(IngredientType).isRequired
}
