import {
     SET_COMMENTS_ERROR, SET_COMMENTS_IS_LOADING, SET_COMMENTS,RESET_COMMENTS_IS_LOADING
} from "../actionTypes/index";

const initialState = {
    comment: [], isLoading: false, error: null
}

export const comments = (state = initialState, action) => {

    switch (action.type) {
        case SET_COMMENTS: {
            return {
                ...state, comment: action.payload,
                isLoading: false
            }
        }
        case SET_COMMENTS_IS_LOADING: {
            return {
                ...state, isLoading: true
            }
        }
        case RESET_COMMENTS_IS_LOADING: {
            return {
                ...state, isLoading: false
            }
        }
        case SET_COMMENTS_ERROR: {
            return {
                ...state, error: action.payload
            }
        }
        default:
            return state
    }


}