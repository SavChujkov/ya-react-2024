import React from 'react'
import burgerConstructorModule from "./burger-constructor.module.css"

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientList from './ingredient-list/ingredient-list'
import PropTypes from 'prop-types';
import { IngredientType } from "../../../utils/type"
import ModalOverlay from '../modals/modals-templates/modal-overlay/modal-overlay'
import FormOrder from './forming-order/forming-order';
export default function BurgerConstructor({ ingredientsList, isError, isLoading }) {

    return (
        <section className={burgerConstructorModule.section_block}>
            <div className={burgerConstructorModule.ingredients_container}>
                {
                    isLoading ? (<p>Красивая анимация загрузки</p>) :
                        isError ? (<p>Красивая анимация ошибки</p>) :
                            (<IngredientList ingredientsList={ingredientsList} />)
                }
            </div>
            {/* когда будет функционал оформления заказа, можно вынести в компонент */}
            <div className={burgerConstructorModule.make_order}>
                <div className={burgerConstructorModule.price_summary}>
                    <span className="text text_type_main-large">123</span>
                    <CurrencyIcon />
                </div>
                <FormOrder />
            </div>

        </section>
    )
}

BurgerConstructor.propTypes = {
    ingredientsList: PropTypes.arrayOf(IngredientType).isRequired,
    isError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
}
