import {
    SHOW_INGREDIENT_DETAILS,
    FLUSH_INGREDIENT_DETAILS
} from "../actions/ingredient-details";


const initialState = {
    ingredientDetail: null
}

export const ingredientDetailReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_INGREDIENT_DETAILS:
            return {
                ...state,
                ingredientDetail: action.ingredientDetail
            }

        case FLUSH_INGREDIENT_DETAILS:
            return {
                ...state,
                ingredientDetail: null
            }


        default:
            return state;
    }

}
