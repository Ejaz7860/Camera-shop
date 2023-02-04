import React from "react";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "ch")}
        to={"/camera/product"}
      >
        Product
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "ch")}
        to={"/camera/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "ch")}
        to={"/camera/contact"}
      >
        Contact
      </NavLink>

      {/* Cart count */}
      <NavLink to={"/camera/cart/items"}>
        <CartItem />
      </NavLink>
    </>
  );
};

export default Navigation;
