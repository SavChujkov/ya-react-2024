import React from 'react'
import orderDetailsModule from './order-details.module.css'
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

export default function OrderDetails({ toggleDisplay, orderId }) {
    return (
        <div className={orderDetailsModule.order_details}>
            <div >
                <span className="text text_type_digits-large">{orderId}</span>
            </div>
            <div className={orderDetailsModule.order_name}>
                <span className="text text_type_main-medium">идентификатор заказа</span>
            </div>
            <div className={orderDetailsModule.state_icon}>
                <CheckMarkIcon type="primary" />
            </div>
            <div className={orderDetailsModule.order_message}>
                <p className="text text_type_main-default">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
            </div>
        </div >
    )
}

OrderDetails.propTypes = {
    toggleDisplay: PropTypes.func.isRequired,
    orderId: PropTypes.number
}