import { createStore } from "redux";

import allReducer from "../reducer/combineReducer";

const store = createStore(allReducer);

export default store;