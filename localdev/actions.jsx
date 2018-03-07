import "isomorphic-fetch";

export const SET_TEXT_INPUT = "SET_TEXT_INPUT";
export const ADD_FETCH_COUNT = "ADD_FETCH_COUNT";
export const MINUS_FETCH_COUNT = "MINUS_FETCH_COUNT";
export const SET_SERVER_RESPONSE = "SET_SERVER_RESPONSE";

export const setTextInput = textInput => ({type: SET_TEXT_INPUT, textInput});
export const addFetchCount = () => ({type: ADD_FETCH_COUNT});
export const minusFetchCount = () => ({type: MINUS_FETCH_COUNT});
export const setServerResponse = serverResponse => ({type: SET_SERVER_RESPONSE, serverResponse});

const reverseThisWord = word => {
    return fetch(`http://matthewjcrowder.com/reverse/${word}`, {
        method: "GET"
    }).json();
};
export const hitServer = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(addFetchCount());
            const textInput = getState().textInput;
            const result = await reverseThisWord(textInput);
            dispatch(setServerResponse(result));
        } finally {
            dispatch(minusFetchCount());
        }
    };
};