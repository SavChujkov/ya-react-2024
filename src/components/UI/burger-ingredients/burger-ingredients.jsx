import burgerIngredientsModule from "./burger-ingredients.module.css"
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import classNames from 'classnames';
import IngredientList from './ingredient-list/ingredient-list';
import PropTypes from 'prop-types';
import { IngredientType } from "../../../utils/type"
import { useSelector } from "react-redux";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
export default function BurgerIngredients() {
    const { isLoading, isError } = useSelector(state => {
        return {
            isLoading: state.ingredients.ingridientsFetching,
            isError: state.ingredients.ingridientsFailedFetching
        }

    }
    )
    //
    return (
        <section className={burgerIngredientsModule.section_block}>
            <h1 className={classNames(burgerIngredientsModule.header,
                "text text_type_main-large")}>
                Соберите бургер
            </h1>
            {/*Когда будет функционал вынести в отдельный компонент */}
            <div className={burgerIngredientsModule.type_sliderbar}>
                <Tab>Булки</Tab>
                <Tab>Соусы</Tab>
                <Tab>Начинки</Tab>
            </div>
            {
                isLoading ? (<p>Красивая анимация загрузки</p>) :
                    isError ? (<p>Красивая анимация ошибки</p>) :
                        (
                            <div className={burgerIngredientsModule.type_list}>
                                <IngredientList name="Булки" type={"bun"} />
                                <IngredientList name="Соусы" type={"sauce"} />

                                <IngredientList name="Начинки" type={"main"} />


                            </div>
                        )
            }

        </section >
    )
}

BurgerIngredients.propTypes = {

}
