import {createStore} from "../src/create-store";
import {rootReducer} from "../localdev/reducers";
import {initialState} from "../localdev/reducers/initial-state";
import {SET_TEXT_INPUT} from "../localdev/actions";


const store = createStore(rootReducer, initialState);

