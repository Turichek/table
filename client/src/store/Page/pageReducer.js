import { NEXT_PAGE } from "./constants"

const defaulteState = {
    page: 0,
}

export const pageReducer = (state = defaulteState, action) => {
    switch (action.type) {
        case NEXT_PAGE:
            return { ...state, page: action.payload }

        default:
            return state;
    }
}
