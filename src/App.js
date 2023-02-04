import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sample from "./app/components/Sample";
import About from "./app/pages/About";
import Contact from "./app/pages/Contact";
import Dashboard from "./app/pages/Dashboard";
import CartProduct from "./app/pages/CartProduct";
import SingleProduct from "./app/pages/SingleProduct";
import NotFound from "./app/pages/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/camera/product" element={<Sample/>} />
          <Route path="/camera/product/:id" element={<SingleProduct/>} />
          <Route path="/camera/cart/items" element={<CartProduct/>} />
          <Route path="/camera/about" element={<About />}/>
          <Route path="/camera/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
