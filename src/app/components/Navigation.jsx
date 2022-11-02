import React from "react";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink className={"ch"} to={"/camera"}>
        Home
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "ch")}
        to={"/camera/product"}
      >
        Product
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "ch")}
        to={"/camera/about"}
      >
        About
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "ch")}
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
