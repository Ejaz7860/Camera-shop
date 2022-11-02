import React from "react";
import Sample from "./app/components/Sample";
import About from "./app/pages/About"
import Contact from "./app/pages/Contact"
import Dashboard from "./app/pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/camera" element={<Dashboard/>} />
          <Route path="/camera/product" element={<Sample/>} />
          <Route path="/camera/about" element={<About/>} />
          <Route path="/camera/contact" element={<Contact/>} />

          
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
