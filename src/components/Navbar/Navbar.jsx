import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { LuSquareMenu } from "react-icons/lu";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to='/'><h2>DANSHOP</h2></Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-items">
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/shop'><li>Shop</li></Link>
            <Link to='/'><li>New Arrival</li></Link>
            <Link to=''><li>Contact</li></Link>
            <div className="navbtn">
              <Link to='/profile'><img className='profile-icon' src="./profile.png" alt="profile-icon" /></Link>
              <Link to='/cart'><img className='profile-icon' src="./cart.png" alt="cart-icon" /></Link>
            </div>
          </ul>
        </div>

        {/* Mobile Cart & Hamburger Container */}
        <div className="mobile-icons">
          <Link to='/cart' className="cart-icon-mobile">
          <MdOutlineShoppingCart size={'25px'} />
          </Link>
          <div className="hamburger" onClick={openMobileMenu}>
            <LuSquareMenu size={'25px'} />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="close-menu" onClick={closeMobileMenu}>
            <FaRegTimesCircle size={'30px'} className='close' />
          </div>
          <ul>
            <div className="logo">
              <Link to='/' onClick={closeMobileMenu}><h2>DANSHOP</h2></Link>
            </div>
            <Link to='/'><li onClick={closeMobileMenu}>Home</li></Link>
            <Link to='/shop'><li onClick={closeMobileMenu}>Shop</li></Link>
            <Link to='/'><li onClick={closeMobileMenu}>New Arrival</li></Link>
            <Link to=''><li onClick={closeMobileMenu}>Contact</li></Link>
            <Link to='/profile'><li onClick={closeMobileMenu}>My Profile</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
