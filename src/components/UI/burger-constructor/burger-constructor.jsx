import React from 'react'
import burgerConstructor from "./burger-constructor.module.css"
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientList from './ingredient-list/ingredient-list'
import PropTypes from 'prop-types';

export default function BurgerConstructor({ ingredients_list }) {
    return (
        <section className={burgerConstructor.section_block}>

            <IngredientList ingredients_list={ingredients_list} />

            {/* когда будет функционал оформления заказа, можно вынести в компонент */}
            <div className={burgerConstructor.make_order}>
                <div className={burgerConstructor.price_summary}>
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
    ingredients_list: PropTypes.array
}
