import {
    SHOW_ORDER_DETAILS,
    FLUSH_ORDER_DETAILS
} from "../actions/order-details";



const initialState = {}

export const orderDetailReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_ORDER_DETAILS:
            return {
                ...action.orderDetail
            }

        case FLUSH_ORDER_DETAILS:
            return {}

        default:
            return state;
    }


}
