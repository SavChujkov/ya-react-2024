import {
    SHOW_ORDER_DETAILS,
    FLUSH_ORDER_DETAILS,
    GET_ORDER_DETAILS,
    GET_ORDER_DETAILS_SUCCESS,
    GET_ORDER_DETAILS_FAILED
} from "../actions/order-details";



const initialState = {
    orderFetching: false,
    orderSuccessFetching: false,
    orderFailedFetching: false,
    orderDetails: null
}

export const orderDetailReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_ORDER_DETAILS:
            return {
                ...action.orderDetail
            }

        case FLUSH_ORDER_DETAILS:
            return {
                ...state,
                orderDetails: null
            }

        case GET_ORDER_DETAILS:
            return {
                ...state,
                orderFetching: true,
                orderFailedFetching: false,
            }

        case GET_ORDER_DETAILS_SUCCESS:
            console.log(action.orderDetail, "order deeeeeeeeeeeeeeee")
            return {
                ...state,
                orderDetails: action.orderDetail,
                orderFetching: false,
                orderSuccessFetching: true,
            }

        case GET_ORDER_DETAILS_FAILED:
            return {
                ...state,
                orderFetching: false,
                orderFailedFetching: true,
            }

        default:
            return state;


    }


}
