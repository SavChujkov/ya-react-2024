
import React from 'react'
import { useState } from 'react'

import BurgerConstructor from '../UI/burger-constructor/burger-constructor'
import BurgerIngredients from '../UI/burger-ingredients/burger-ingredients'
import AppHeader from '../UI/header-ingredients/app-header'
import mainpage from "./mainpage.module.css"
import PropTypes from 'prop-types';
import { IngredientType } from "../../utils/type"

export default function Mainpage({ ingredientsData, isError, isLoading }) {

    return (
        <>
            <AppHeader />
            <main className="container">
                <section className={mainpage.burger_creator}>
                    <BurgerIngredients isError={isError}
                        isLoading={isLoading}
                        ingredientsList={ingredientsData} />
                    <BurgerConstructor isError={isError}
                        isLoading={isLoading}
                        ingredientsList={ingredientsData} />
                </section>
            </main>
        </>
    )
}

Mainpage.propTypes = {
    ingredientsData: PropTypes.arrayOf(IngredientType).isRequired,
    isError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
}