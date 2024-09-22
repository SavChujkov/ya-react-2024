import React from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

//css modules
import appHeader from "./AppHeader.module.css"

export default function AppHeader() {
    return (
        <header className={appHeader.burger_header}>
            <section className='container'>
                <nav className={appHeader.nav_flex}>
                    {/* флекс контейнер для всех элементов навбара */}
                    <div className={appHeader.nav_first_block}>
                        {/* первый вложенный флекс контейнер */}
                        <div className={appHeader.nav_actions}>
                            {/* выбор действий на мейн пейдже */}
                            <div className={appHeader.nav_item}>
                                <BurgerIcon />
                                <p className="text text_type_main-default text_color_inactive">
                                    Конструктор
                                </p>
                            </div>

                            <div className={appHeader.nav_item}>
                                <ListIcon />
                                <p className="text text_type_main-default text_color_inactive">
                                    Лента заказов
                                </p>
                            </div>

                        </div>

                        <Logo />

                    </div>

                    <div className={appHeader.nav_second_block}>
                        {/* второй вложенный флекс контейнер */}
                        <div className={appHeader.nav_item}>
                            <ProfileIcon />
                            <p className="text text_type_main-default text_color_inactive">
                                Личный кабинет
                            </p>
                        </div>
                    </div>

                </nav>
            </section>
        </header>
    )
}
