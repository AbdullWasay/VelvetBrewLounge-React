import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Feedback from './Pages/Feedback';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Review from './Pages/Review';
import Speciality from './Pages/Speciality';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleQuantityChange = (itemId, increment) => {
    setCart(cart.map(item =>
      item.id === itemId
        ? { ...item, quantity: Math.max(item.quantity + increment, 0) }
        : item
    ));
  };

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  

  const addToCart = (item) => {
    const itemExists = cart.find(cartItem => cartItem.id === item.id);
    if (itemExists) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Speciality" element={<Speciality />} />
        <Route path="/Cart" element={<Cart cart={cart} handleQuantityChange={handleQuantityChange} handleRemove={handleRemove} />} />
        <Route path="/Checkout" element={<Checkout cart={cart} />} />
        <Route path="/Menu" element={<Menu cart={cart} addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
