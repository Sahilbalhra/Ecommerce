import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/404/PageNotFound";
import About from "./Pages/About/About";
import Auth from "./Pages/Auth/Auth";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Products />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
