import { applyMiddleware, createStore } from "redux";

import allReducer from "../reducer/rootReducer/combineReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let initialState = {}
const middleware = [thunk];
const store = createStore(
    allReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;