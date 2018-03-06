import {SET_TEXT_INPUT} from "../actions";

export const rootReducer = (state, action) => {
    if (action.type === SET_TEXT_INPUT) {
        return {
            ...state,
            textInput: action.textInput
        };
    }
    return state;
};