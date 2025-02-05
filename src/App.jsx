import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home';
import Shop from './pages/Shop';
import NewArrival from './pages/New';
import Footer from './components/Footer/Footer';
import SingleProduct from './pages/product';
import Cartpage from './pages/cart';

import Profile from './components/Profile/Profile';
import Auth from './components/AuthPage.jsx/AuthPage'

const App = () => {
  return (
 
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/NewArrival" element={<NewArrival />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} /> {/* Profile page */}
        </Routes>
        <Footer />
      </div>
  
  );
};

export default App;
