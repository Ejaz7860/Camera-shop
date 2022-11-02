import { combineReducers } from "redux";
import productReducer from "../productReducer";
import cardReducer from "../cardReducer";
const allReducer = combineReducers({
    productReducer,
    cardReducer
});

export default allReducer;