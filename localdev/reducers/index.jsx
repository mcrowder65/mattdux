import {ADD_FETCH_COUNT, MINUS_FETCH_COUNT, SET_SERVER_RESPONSE, SET_TEXT_INPUT} from "../actions";

export const rootReducer = (state, action) => {
    if (action.type === SET_TEXT_INPUT) {
        return {
            ...state,
            textInput: action.textInput
        };
    } else if (action.type === SET_SERVER_RESPONSE) {
        return {
            ...state,
            serverResponse: action.serverResponse
        };
    } else if (action.type === ADD_FETCH_COUNT) {
        return {
            ...state,
            fetchCount: state.fetchCount + 1

        };
    } else if (action.type === MINUS_FETCH_COUNT) {
        return {
            ...state,
            fetchCount: state.fetchCount - 1
        };
    }

    return state;
};