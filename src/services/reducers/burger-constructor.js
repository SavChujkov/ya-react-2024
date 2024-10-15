import {
    SET_CHOSEN_INGREDIENT,
    DELETE_CHOSEN_INGREDIENT,
    SET_CHOSEN_BUN,
    DELETE_CHOSEN_BUN,
    MUTATE_INGREDIENTS
} from "../actions/burget-constructor"

import { v4 as uuidv4 } from 'uuid';


const initialState = {
    chosenIngridientsList: [],
    countChosenIngredients: {},
    chosenBun: {}, //ingredient obj
    chosenBunCount: 0, //2,0
}

//const li = [
//    { uuid: 123, id: _id, ingreident: ingreident }
//]

//const il = {
//    _id1:5
//}

export const chosenIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {

        case MUTATE_INGREDIENTS:
            return {
                ...state,
                chosenIngridientsList: action.mutatedArray
            }

        case SET_CHOSEN_INGREDIENT:
            return {
                ...state,
                chosenIngridientsList: [...state.chosenIngridientsList, { uuid: action.uuid, ingredient: action.ingredient }],
                countChosenIngredients: {
                    ...state.countChosenIngredients,
                    [action.ingredient._id]: (!state.countChosenIngredients.hasOwnProperty(action.ingredient._id)
                        || state.countChosenIngredients[action.ingredient._id] == 0)
                        ? 1
                        : state.countChosenIngredients[action.ingredient._id] + 1
                }
            }

        case DELETE_CHOSEN_INGREDIENT:
            const test = state.chosenIngridientsList
                .filter(item =>
                    item.uuid != action.uuid
                )

            return {
                ...state,
                chosenIngridientsList: state.chosenIngridientsList
                    .filter(item => {
                        if (item.uuid === action.uuid) {
                        }
                        return item.uuid != action.uuid
                    })
                ,
                countChosenIngredients:
                {
                    ...state.countChosenIngredients,
                    [action.ingredient._id]: state.countChosenIngredients[action.ingredient._id] - 1
                }
            }

        case SET_CHOSEN_BUN:
            return {
                ...state,
                chosenBun: action.ingredient,
                chosenBunCount: 2
            }

        case DELETE_CHOSEN_BUN:
            return {
                ...state,
                chosenBun: {},
                chosenBunCount: 0
            }

        default:
            return state;
    }


}

