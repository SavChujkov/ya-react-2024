import React from 'react'
import DragElement from '../constructor-element/constructor-element'
import ingredientlistModule from "./ingredient-list.module.css"
import PropTypes from 'prop-types';
import { IngredientType } from "../../../../utils/type"
import IngredientDetails from '../../modals/ingredient-details/ingredient-details';
import Modal from '../../modals/modals-templates/modal/modal';
export default function IngredientList({ ingredientsList }) {

    const [selectedData, setSeletedData] = React.useState(null)
    const [showModal, setShowModal] = React.useState(false)

    //пока захардкожено
    const selectedBun = {
        "_id": "643d69a5c3f7b9001cfa093c",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0
    }

    const displayIngredientSummary = () => {
        setShowModal(!showModal)
    }

    return (
        <div className={ingredientlistModule.ingredients_container}>
            <DragElement style={{ marign: "0px 32px" }} ingredientData={selectedBun}
                toggleShowModal={displayIngredientSummary}
                setSelectedData={setSeletedData} type="top" />
            <div
                className={ingredientlistModule.ingredients_list}>

                {
                    ingredientsList.map(function (item, index) {
                        if (item.type == "main") {
                            return <DragElement ingredientData={item}
                                toggleShowModal={displayIngredientSummary}
                                setSelectedData={setSeletedData} type="main" key={item._id} />
                        }
                    })
                }
                {showModal ?
                    <Modal modalHead="Детали ингредиента" toggleDisplay={displayIngredientSummary}>
                        <IngredientDetails toggleDisplay={displayIngredientSummary} ingredientData={selectedData} />
                    </Modal>
                    : null
                }
            </div>
            <DragElement ingredientData={selectedBun}
                toggleShowModal={displayIngredientSummary}
                setSelectedData={setSeletedData} type="bottom" />
        </div>


    )
}

IngredientList.propTypes = {
    ingredientsList: PropTypes.arrayOf(IngredientType).isRequired
}