import { createStore } from "redux";

import allReducer from "../reducer/rootReducer/combineReducer";

const store = createStore(allReducer);

export default store;