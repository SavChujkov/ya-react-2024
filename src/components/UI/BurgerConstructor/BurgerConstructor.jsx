import React from 'react'
import burgerConstructor from "./BurgerConstructor.module.css"
import Constructor_Element from './Ingredient/Constructor_Element'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import classNames from 'classnames';

export default function BurgerConstructor({ ingredients_list }) {
    return (
        <section className={burgerConstructor.section_constructor}>
            <div
                className={burgerConstructor.ingredients_list}>
                {
                    ingredients_list.map(function (item, index) {
                        let element_type
                        element_type = index == 0 ? "top"
                            : index == ingredients_list.length - 1 ? "bottom"
                                : undefined
                        return <Constructor_Element ing_data={item} type={element_type} />
                    })
                }
            </div>
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
