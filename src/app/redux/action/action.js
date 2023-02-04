import axios from "axios";

import {
  ADD_TO_CART,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_FAIL,
  RETURN_VAL
} from "../constant/constant";

// export default function GetAllProduct() {
//   return {
//     type: GET_ALL_PRODUCT,
//   };
// }

export const addTOCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

//'https://dummyjson.com/products/1'
export const getProductDetails = async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    await axios.get("https://dummyjson.com/products").then((res) => {
      const data = res.data.products;
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        data,
        Message: "Data is available",
      });
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      message: "Something went wrong",
    });
  }
};


export const returnVal = async (data) =>{
  return {
    type:RETURN_VAL,
    data
  }
}