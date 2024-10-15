import React from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../../modals/order-details/order-details'
import Modal from '../../modals/modals-templates/modal/modal'
import { getOrderDetailsAction } from '../../../../services/actions/order-details'
import { useDispatch, useSelector } from 'react-redux'
import { FLUSH_ORDER_DETAILS } from '../../../../services/actions/order-details'

export default function FormOrder() {

    const [orderId, setOrderId] = React.useState(32324)
    const [showModal, setShowModal] = React.useState(false)

    const apiUrl = "https://norma.nomoreparties.space/api/orders"

    const displayOrderSummary = () => {
        if (showModal) dispatch({ type: FLUSH_ORDER_DETAILS })
        setShowModal(!showModal)
    }

    const dispatch = useDispatch()
    const ingredientsList = useSelector(state => state.chosenIngredients.chosenIngridientsList)
    const bun = useSelector(state => state.chosenIngredients.chosenBun)

    const formOrderSummary = () => {
        const ingredientsIds = ingredientsList.map((item) => {
            return item.ingredient._id
        })
        if (Object.keys(bun) > 0) {
            ingredientsIds.push(bun._id)
            ingredientsIds.push(bun._id)
        }

        dispatch(getOrderDetailsAction(apiUrl, ingredientsIds))
        displayOrderSummary()
    }


    return (
        <>
            <Button onClick={formOrderSummary} htmlType="button" type="primary" size="large">
                Оформить заказ
            </Button>
            {showModal ?
                <Modal toggleDisplay={displayOrderSummary}>
                    <OrderDetails />
                </Modal>
                : null
            }
        </>
    )
}
