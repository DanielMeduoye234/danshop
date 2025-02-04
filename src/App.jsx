import React from 'react';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home';
import Shop from './pages/Shop';
import NewArrival from './pages/New';
import Footer from './components/Footer/Footer';
import SingleProduct from './pages/product';
import Cartpage from './pages/cart';
import AuthPage from './pages/AuthPage';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <KindeProvider
      clientId="0506a1f25ccc453b9dbe2832aea6f0f4"
      domain="https://dannycode.kinde.com"
      redirectUri="https://danshopp.netlify.app/profile"  
      logoutUri="https://danshopp.netlify.app/login"   
    >
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/NewArrival" element={<NewArrival />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/profile" element={<Profile />} /> {/* Profile page */}
        </Routes>
        <Footer />
      </div>
    </KindeProvider>
  );
};

export default App;
