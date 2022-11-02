import { ADD_TO_CART } from "../constant/constant";

const productReducer = (state, action) => {
  console.log('Product Reducer is calling', action)
  switch (action) {
    case action.type === ADD_TO_CART:
      return [action.payload + 10,...state];

    default:
      return [];
  }
};
export default productReducer;
