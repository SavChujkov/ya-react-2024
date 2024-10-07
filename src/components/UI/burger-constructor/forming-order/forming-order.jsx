import React from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../../modals/order-details/order-details'
import Modal from '../../modals/modals-templates/modal/modal'

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
                <Modal toggleDisplay={displayOrderSummary}>
                    <OrderDetails toggleDisplay={displayOrderSummary} orderId={orderId} />
                </Modal>
                : null
            }
        </>
    )
}
