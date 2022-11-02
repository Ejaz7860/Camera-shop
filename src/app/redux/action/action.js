import {  ADD_TO_CART } from "../constant/constant";

// export default function GetAllProduct() {
//   return {
//     type: GET_ALL_PRODUCT,
//   };
// }



export const addTOCart = (data) => {
  console.log(data)
  return {
    type :ADD_TO_CART,
    data:data
  }
}