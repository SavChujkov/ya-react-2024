import {
    SET_CHOOSEN_INGREDIENT,
    DELETE_CHOOSEN_INGREDIENT,
    SET_CHOOSEN_BUN,
    DELETE_CHOOSEN_BUN,
    MUTATE_INGREDIENTS
} from "../actions/burget-constructor"

import { v4 as uuidv4 } from 'uuid';


const initialState = {
    choosenIngridientsList: [],
    countChoosenIngredients: {},
    choosenBun: {}, //ingredient obj
    choosenBunCount: 0, //2,0
}

//const li = [
//    { uuid: 123, id: _id, ingreident: ingreident }
//]

//const il = {
//    _id1:5
//}

export const choosenIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {

        case MUTATE_INGREDIENTS:
            return {
                ...state,
                choosenIngridientsList: action.mutatedArray
            }

        case SET_CHOOSEN_INGREDIENT:
            return {
                ...state,
                choosenIngridientsList: [...state.choosenIngridientsList, { uuid: action.uuid, ingredient: action.ingredient }],
                countChoosenIngredients: {
                    ...state.countChoosenIngredients,
                    [action.ingredient._id]: (!state.countChoosenIngredients.hasOwnProperty(action.ingredient._id)
                        || state.countChoosenIngredients[action.ingredient._id] == 0)
                        ? 1
                        : state.countChoosenIngredients[action.ingredient._id] + 1
                }
            }

        case DELETE_CHOOSEN_INGREDIENT:
            const test = state.choosenIngridientsList
                .filter(item =>
                    item.uuid != action.uuid
                )

            console.log(test, "filtration test")
            return {
                ...state,
                choosenIngridientsList: state.choosenIngridientsList
                    .filter(item => {
                        if (item.uuid === action.uuid) {
                            console.log(item, "item")
                            console.log("match for", item.uuid, action.uuid)
                        }
                        return item.uuid != action.uuid
                    })
                ,
                countChoosenIngredients:
                {
                    ...state.countChoosenIngredients,
                    [action.ingredient._id]: state.countChoosenIngredients[action.ingredient._id] - 1
                }
            }

        case SET_CHOOSEN_BUN:
            return {
                ...state,
                choosenBun: action.ingredient,
                choosenBunCount: 2
            }

        case DELETE_CHOOSEN_BUN:
            return {
                ...state,
                choosenBun: {},
                choosenBunCount: 0
            }

        default:
            return state;
    }


}

