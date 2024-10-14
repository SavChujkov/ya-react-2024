import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import dragElementModule from "./drag-element.module.css"
import PropTypes from 'prop-types';
import { IngredientType } from "../../../../utils/type"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';
import {
    DELETE_CHOOSEN_INGREDIENT,
    DELETE_CHOOSEN_BUN
}
    from '../../../../services/actions/burget-constructor';

import {
    SHOW_INGREDIENT_DETAILS,
    FLUSH_INGREDIENT_DETAILS
}
    from '../../../../services/actions/ingredient-details';

export default function DragElement({ ingredientData, type, setSelectedData, toggleShowModal, uuid, index_in_array, moveCard }) {


    const dispatch = useDispatch()
    const selectDragElement = () => {
        dispatch({ type: SHOW_INGREDIENT_DETAILS, ingredientDetail: ingredientData })
        toggleShowModal()
    }

    const removeFromConstructor = (event) => {
        event.stopPropagation()
        event.preventDefault()
        dispatch({
            type: DELETE_CHOOSEN_INGREDIENT,
            ingredient: ingredientData,
            uuid: uuid
        })
    }

    //drag functionals

    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: "constructor-element",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index_in_array
            const hoverIndex = index_in_array

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index_in_array = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: "constructor-element",
        item: () => {
            return { uuid, index_in_array }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))

    return (
        <div ref={ingredientData.type != "bun" ? ref : null} style={{ opacity: opacity }} data-handler-id={handlerId} className={type == "main" ? dragElementModule.drag_element : dragElementModule.closing_element}>
            {type == "main" ? <DragIcon /> : null}
            <div onClick={selectDragElement} style={{ width: "550px" }}>
                <ConstructorElement
                    text={type == "main" ? ingredientData.name :
                        type == "top" ? `${ingredientData.name}\n(верх)` :
                            type == "bottom" ? `${ingredientData.name}\n(низ)` :
                                ingredientData.name
                    }
                    price={ingredientData.price}
                    thumbnail={ingredientData.image}
                    type={type}
                    isLocked={type == "main" ? null : true}
                    handleClose={removeFromConstructor}
                />
            </div>
        </div >
    )

}

DragElement.propTypes = {
    ingredientData: IngredientType.isRequired,
    uuid: PropTypes.string,
    type: PropTypes.string,
    setSelectedData: PropTypes.func,
    toggleShowModal: PropTypes.func

}