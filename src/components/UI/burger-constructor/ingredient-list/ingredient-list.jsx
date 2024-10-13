import React from 'react'
import DragElement from '../constructor-element/constructor-element'
import ingredientlistModule from "./ingredient-list.module.css"
import PropTypes from 'prop-types';
import { IngredientType } from "../../../../utils/type"
import IngredientDetails from '../../modals/ingredient-details/ingredient-details';
import Modal from '../../modals/modals-templates/modal/modal';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import {
    SET_CHOOSEN_INGREDIENT,
    SET_CHOOSEN_BUN
} from '../../../../services/actions/burget-constructor';
import { v4 as uuidv4 } from 'uuid';

export default function IngredientList() {

    const ingredientsList = useSelector(state => state.choosenIngredients.choosenIngridientsList)
    const selectedBunRedux = useSelector(state => state.choosenIngredients.choosenBun)
    const countIngredients = useSelector(state => state.choosenIngredients.countChoosenIngredients)

    console.log(ingredientsList, "picked ingredients")

    //console.log(ingredientsList, " this is my list")
    //console.log(Object.keys(ingredientsList))
    const dispatch = useDispatch()

    const [selectedData, setSeletedData] = React.useState(null)
    const [showModal, setShowModal] = React.useState(false)

    const addBun = (ingredient) => {
        dispatch({ type: SET_CHOOSEN_BUN, ingredient: ingredient })
    }
    const addIngredient = (ingredient) => {
        dispatch({ type: SET_CHOOSEN_INGREDIENT, ingredient: ingredient, uuid: uuidv4() })
    }



    const [{ isHover }, dropTarget] = useDrop({
        accept: "ingredient",
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop(ingredient) {
            ingredient.type === "bun" ? addBun(ingredient) : addIngredient(ingredient)
        },
    });


    const displayIngredientSummary = () => {
        setShowModal(!showModal)
    }

    return (
        <div ref={dropTarget} className={ingredientlistModule.ingredients_container}>
            {Object.keys(selectedBunRedux).length > 0
                ?
                <DragElement style={{ marign: "0px 32px" }} ingredientData={selectedBunRedux}
                    toggleShowModal={displayIngredientSummary}
                    setSelectedData={setSeletedData} type="top" />
                :
                null
            }

            <div
                className={ingredientlistModule.ingredients_list}>

                {
                    ingredientsList.map(function (item, index) {
                        const ingredient = item.ingredient
                        const uuid = item.uuid
                        return <DragElement ingredientData={ingredient} uuid={uuid}
                            toggleShowModal={displayIngredientSummary}
                            setSelectedData={setSeletedData} type="main" key={uuid} />

                    })
                }
                {showModal ?
                    <Modal modalHead="Детали ингредиента" toggleDisplay={displayIngredientSummary}>
                        <IngredientDetails toggleDisplay={displayIngredientSummary} ingredientData={selectedData} />
                    </Modal>
                    : null
                }
            </div>
            {Object.keys(selectedBunRedux).length > 0
                ?
                <DragElement style={{ marign: "0px 32px" }} ingredientData={selectedBunRedux}
                    toggleShowModal={displayIngredientSummary}
                    setSelectedData={setSeletedData} type="bottom" />
                :
                null
            }

        </div>


    )
}

IngredientList.propTypes = {
}