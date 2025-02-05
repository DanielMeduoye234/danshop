import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../CartContext';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const [user, setUser] = useState(null); // Track authenticated user
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Check for authenticated user on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      // Redirect if user is not logged in
      if (!user) {
        navigate('/login');
      }
    };
    fetchUser();
  }, [navigate]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, [setCartItems]);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = subtotal * 0.1; // 10% discount
  const total = subtotal - discount;

  return (
    <div className="cart-complete">
      <h2 className="cart-title">YOUR CART</h2>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                </div>
                <div className="item-quantity">
                  <div className="qtycart">
                    <button
                      className="qty-btn"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-item"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  🗑
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty!</p>
          )}
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-item">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Go to Checkout →</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
