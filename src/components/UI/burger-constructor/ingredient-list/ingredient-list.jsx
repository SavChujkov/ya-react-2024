import React from 'react'
import DragElement from '../constructor-element/constructor-element'
import ingredientlistModule from "./ingredient-list.module.css"
import PropTypes from 'prop-types';
import { IngredientType } from "../../../../utils/type"
import IngredientDetails from '../../modals/ingredient-details/ingredient-details';
import Modal from '../../modals/modals-templates/modal/modal';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { useCallback } from 'react';
import update from 'immutability-helper'
import {
    SET_CHOSEN_INGREDIENT,
    SET_CHOSEN_BUN,
    MUTATE_INGREDIENTS
} from '../../../../services/actions/burget-constructor';

import { FLUSH_INGREDIENT_DETAILS } from '../../../../services/actions/ingredient-details';
import { v4 as uuidv4 } from 'uuid';

export default function IngredientList() {

    const ingredientsList = useSelector(state => state.chosenIngredients.chosenIngridientsList)
    const selectedBunRedux = useSelector(state => state.chosenIngredients.chosenBun)

    const dispatch = useDispatch()

    const [showModal, setShowModal] = React.useState(false)

    const addBun = (ingredient) => {
        dispatch({ type: SET_CHOSEN_BUN, ingredient: ingredient })
    }
    const addIngredient = (ingredient) => {
        dispatch({ type: SET_CHOSEN_INGREDIENT, ingredient: ingredient, uuid: uuidv4() })
    }

    const moveCard = (dragIndex, hoverIndex) => {
        dispatch({
            type: MUTATE_INGREDIENTS, mutatedArray:
                update(ingredientsList, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, ingredientsList[dragIndex]],
                    ],
                })
        })
    }

    const [, dropTarget] = useDrop({
        accept: "ingredient",

        drop(ingredient) {
            ingredient.type === "bun" ? addBun(ingredient) : addIngredient(ingredient)
        },
    });


    const displayIngredientSummary = () => {
        if (showModal) {
            dispatch({ type: FLUSH_INGREDIENT_DETAILS })
        }
        setShowModal(!showModal)
    }

    return (
        <div ref={dropTarget} className={ingredientlistModule.ingredients_container}>
            {Object.keys(selectedBunRedux).length > 0
                ?
                <DragElement style={{ marign: "0px 32px" }} ingredientData={selectedBunRedux}
                    toggleShowModal={displayIngredientSummary}
                    type="top" />
                :
                null
            }

            <div
                className={ingredientlistModule.ingredients_list}>

                {
                    ingredientsList.map(function (item, index) {
                        const ingredient = item.ingredient
                        const uuid = item.uuid
                        return (<DragElement ingredientData={ingredient} uuid={uuid} indexInArray={index}
                            moveCard={moveCard}
                            toggleShowModal={displayIngredientSummary}
                            type="main" key={uuid} />)

                    })
                }
                {showModal ?
                    <Modal modalHead="Детали ингредиента" toggleDisplay={displayIngredientSummary}>
                        <IngredientDetails toggleDisplay={displayIngredientSummary} />
                    </Modal>
                    : null
                }
            </div>
            {Object.keys(selectedBunRedux).length > 0
                ?
                <DragElement style={{ marign: "0px 32px" }} ingredientData={selectedBunRedux}
                    toggleShowModal={displayIngredientSummary} type="bottom" />
                :
                null
            }

        </div>


    )
}

IngredientList.propTypes = {
}