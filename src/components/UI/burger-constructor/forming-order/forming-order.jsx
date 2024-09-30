import React from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../../modals/modals-templates/modal-overlay/modal-overlay'
import OrderDetails from '../../modals/order-details/order-details'

export default function FormOrder() {

    const [orderId, setOrderId] = React.useState(32324)
    const [showModal, setShowModal] = React.useState(false)

    const displayOrderSummary = () => {
        setShowModal(!showModal)
    }

    const formOrderSummary = () => {
        setOrderId(orderId + 1)
        displayOrderSummary()
    }

    return (
        <>
            <Button onClick={formOrderSummary} htmlType="button" type="primary" size="large">
                Оформить заказ
            </Button>
            {showModal ?
                <ModalOverlay toggleDisplay={displayOrderSummary}>
                    <OrderDetails toggleDisplay={displayOrderSummary} orderId={orderId} />
                </ModalOverlay>
                : null
            }
        </>
    )
}
