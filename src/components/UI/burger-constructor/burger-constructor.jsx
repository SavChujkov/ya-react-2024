import React from 'react'
import burgerConstructorModule from "./burger-constructor.module.css"

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientList from './ingredient-list/ingredient-list'
import PropTypes from 'prop-types';
import { IngredientType } from "../../../utils/type"
import ModalOverlay from '../modals/modals-templates/modal-overlay/modal-overlay'
import FormOrder from './forming-order/forming-order';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';

export default function BurgerConstructor() {


    const ingredientsList = useSelector(state => state.choosenIngredients.choosenIngridientsList)
    const bun = useSelector(state => state.choosenIngredients.choosenBun)


    const totalCost = useMemo(() => {
        let cost = 0
        ingredientsList.forEach(element => {
            cost += element.ingredient.price
        });
        if (Object.keys(bun).length > 0) {
            cost += (bun.price * 2)
        }
        return cost
    }, [ingredientsList, bun])


    return (
        <section className={burgerConstructorModule.section_block}>
            <div className={burgerConstructorModule.ingredients_container}>
                <IngredientList />
            </div>
            {/* когда будет функционал оформления заказа, можно вынести в компонент */}
            <div className={burgerConstructorModule.make_order}>
                <div className={burgerConstructorModule.price_summary}>
                    <span className="text text_type_main-large">{totalCost}</span>
                    <CurrencyIcon />
                </div>
                <FormOrder />
            </div>

        </section>
    )
}

BurgerConstructor.propTypes = {

}
