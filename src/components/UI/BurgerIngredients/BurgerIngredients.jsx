import React from 'react'
import burgerIngredients from "./BurgerIngredients.module.css"
import Ingredient from './Ingredient/Ingredient'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import classNames from 'classnames';

export default function BurgerIngredients({ ingredients_list }) {
    return (
        <section className={burgerIngredients.section_ingredient}>
            <h1 className={classNames(burgerIngredients.header,
                "text text_type_main-large")}>
                Соберите бургер
            </h1>
            <div className={burgerIngredients.type_selector}>
                <Tab>Булки</Tab>
                <Tab>Соусы</Tab>
                <Tab>Начинки</Tab>
            </div>
            <div className={burgerIngredients.all_types}>
                <div className={burgerIngredients.type_container}>
                    <h2 className="text text_type_main-medium">Булки</h2>
                    <div className={burgerIngredients.type}>
                        {
                            ingredients_list.map(function (item) {
                                if (item.type == "bun") {
                                    return <Ingredient ingredient={item} />
                                }
                            })
                        }
                    </div>
                </div>
                <div className={burgerIngredients.type_container}>
                    <h2 className="text text_type_main-medium">Соусы</h2>
                    <div className={burgerIngredients.type}>
                        {ingredients_list.map(function (item) {
                            if (item.type == "sauce") {
                                return <Ingredient ingredient={item} />
                            }
                        })}
                    </div>
                </div>
            </div>
        </section >
    )
}
