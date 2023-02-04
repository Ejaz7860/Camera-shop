import { ADD_TO_CART ,} from "../constant/constant";

// const initProduct = {
//   numberCart:0,
//   Carts:[],
//   _products:[]
// }

const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    default:
      return state;
  }
};
export default productReducer;


