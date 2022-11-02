import React from 'react'
import Header from '../components/Header'
import { useSelector } from "react-redux";


const CartProduct = () => {
  const cartProduct = useSelector((state) => state.productReducer);
  return (
    <>
    <Header/>
    <h1>Cart Item</h1>
    </>
  )
}

export default CartProduct