import { FETCHING_SUCCESS, FETCHING_ERROR } from "../action-types/actionTypes"

export const initialState = {
    products: [],
    loading: true,
    error: ''
}

export const productReducer = (state, action) => {
    switch (action.type) {

        case FETCHING_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                loading: false
            }

        case FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        default:
            return state
    }
}