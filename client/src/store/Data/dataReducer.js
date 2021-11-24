import { ADD_ELEM, UPDATE_ARR, UPDATE_ELEM, REMOVE_ELEM } from "./constants"

const defaulteState = {
    arr: [],
}

export const dataReducer = (state = defaulteState, action) => {
    switch (action.type) {
        case ADD_ELEM:
            return { ...state, arr: [...state.arr, action.payload] }

        case UPDATE_ARR:
            return { ...state, arr: action.payload }

        case UPDATE_ELEM:
            return {
                ...state, arr: state.elems.filter(elem => {
                    if (elem.id === action.payload.id) {
                        elem = action.payload
                    }
                    return state.arr;
                })
            }

        case REMOVE_ELEM:
            return { ...state, arr: state.arr.filter(elem => elem.id !== action.payload) }

        default:
            return state;
    }
}
