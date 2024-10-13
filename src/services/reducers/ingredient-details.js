import {
    SHOW_INGREDIENT_DETAILS,
    FLUSH_INGREDIENT_DETAILS
} from "../actions/ingredient-details";


const initialState = {}

export const ingredientDetailReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_INGREDIENT_DETAILS:
            return {
                ...action.ingredientDetail
            }

        case FLUSH_INGREDIENT_DETAILS:
            return {}

        default:
            return state;
    }

}
