import React from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import NavItem from './nav-item/nav-item'
import appHeader from "./app-header.module.css"



export default function AppHeader() {
    return (
        <header className={appHeader.burger_header}>
            <section className='container'>
                <nav className={appHeader.nav_flex}>
                    {/* первый вложенный флекс контейнер */}
                    <div className={appHeader.nav_first_block}>
                        <div className={appHeader.nav_actions}>
                            {/* выбор действий на мейн пейдже */}
                            <NavItem text={"Конструктор"} Icon={BurgerIcon} />
                            <NavItem text={"Лента заказов"} Icon={ListIcon} />
                        </div>
                        <Logo />
                    </div>
                    {/* второй вложенный флекс контейнер */}
                    <div className={appHeader.nav_second_block}>

                        <NavItem text={"Личный кабинет"} Icon={ProfileIcon} />
                    </div>
                </nav>
            </section>
        </header>
    )
}


