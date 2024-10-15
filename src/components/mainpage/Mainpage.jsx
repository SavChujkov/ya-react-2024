
import React from 'react'
import { useState } from 'react'

import BurgerConstructor from '../UI/burger-constructor/burger-constructor'
import BurgerIngredients from '../UI/burger-ingredients/burger-ingredients'
import AppHeader from '../UI/header-ingredients/app-header'
import mainpage from "./mainpage.module.css"
import PropTypes from 'prop-types';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export default function Mainpage() {

    return (
        <>
            <AppHeader />
            <main className="container">
                <DndProvider backend={HTML5Backend}>
                    <section className={mainpage.burger_creator}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </section>
                </DndProvider>
            </main>
        </>
    )
}

Mainpage.propTypes = {

}