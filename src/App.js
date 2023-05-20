import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Products from "./Component/Products";
import Cart from "./Component/Cart";
import Product from "./pages/product";
import Footer from "./Component/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Register from "./pages/Register"

import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Products" Component={Products} />
        <Route exact path="/Product/:id" Component={Product} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        
        
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
