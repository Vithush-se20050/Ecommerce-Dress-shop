import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './App.css'
import Navbar from './components/Navbar/navbar';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Cart from './pages/cart';
import Product from './pages/product';
import LoginSignup from './pages/LoginSingup';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assect/banner_mens.png';
import women_banner from './components/Assect/banner_women.png';
import kid_banner from './components/Assect/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productid' element={<Product />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
