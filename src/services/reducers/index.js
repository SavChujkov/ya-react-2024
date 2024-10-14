import {
    GET_INGREDIENTS,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED
} from "../actions";

import { combineReducers } from 'redux';
import { choosenIngredientsReducer } from "./burger-constructor";
import { ingredientDetailReducer } from "./ingredient-details";
import { orderDetailReducer } from "./order-details";

const initialState = {
    ingridientsFetching: false,
    ingridientsSuccessFetching: false,
    ingridientsFailedFetching: false,
    ingridientList: []
}


export const ingridientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS:
            return {
                ...state,
                ingridientsFetching: true,
                ingridientsFailedFetching: false,
            }

        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingridientList: action.ingredients,
                ingridientsFetching: false,
                ingridientsSuccessFetching: true,
            }

        case GET_INGREDIENTS_FAILED:
            return {
                ...state,
                ingridientsFetching: false,
                ingridientsFailedFetching: true,
            }

        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    ingredients: ingridientReducer,
    choosenIngredients: choosenIngredientsReducer,
    ingredientDetail: ingredientDetailReducer,
    orderDetail: orderDetailReducer

});

//choosenIngredients: choosenIngredientsReducer,
//    ingreidentDetail: ingredientDetailReducer,
//       orderDetail: orderDetailReducer