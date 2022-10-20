import React, { useState, useEffect } from 'react';
import ProductBox from './ProductBox';
import NavBar from './NavBar';
import NotFound from './NotFound';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import { Routes, Route } from 'react-router-dom';
import CartPage from './CartPage';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import LinkBar from './LinkBar';
import ForgotPassword from './ForgotPassword';
import { HiMenu } from 'react-icons/hi';
import AuthRoute from './AuthRoute';
import UserRoute from './UserRoute';
import Alert from './Alert';
import UserProvider from '../Provider/UserProvider';
import AlertProvider from '../Provider/AlertProvider';

function App() {
  const saveDataString = localStorage.getItem('my-cart') || '{}';
  const saveData = JSON.parse(saveDataString);
  const [cart, setCart] = useState(saveData);
 
  function handleAddToCart(productId, count) {
    console.log('productId', productId, 'count', count);
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count }
    updateCart(newCart);
  }
  function updateCart(newCart) {
    setCart(newCart)
    const cartString = JSON.stringify(newCart);
    localStorage.setItem('my-cart', cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <div>
      <UserProvider>
        <AlertProvider>
          <Alert />
          <NavBar productCount={totalCount} setCart={setCart} />
         <div className="flex flex-col h-screen overflow-y-scroll relative">
          <div className=" grow bg-secondary-default">

            <Routes>
              <Route index element={<UserRoute><ProductBox /></UserRoute>} />
              <Route
                path="/products/:id/"
                element={<ProductDetail onAddToCart={handleAddToCart} />}
              />
              <Route path="*" element={<NotFound />} />
              <Route path='/cart/' element={<UserRoute><CartPage cart={cart} updateCart={updateCart} /></UserRoute>} />
              <Route path="/signup/" element={<AuthRoute>
                <SignUpPage /></AuthRoute>} />
              <Route path='/login/' element={<AuthRoute><LoginPage/></AuthRoute>} />
              <Route path='/forgot/' element={<ForgotPassword />} />

            </Routes>
          </div>
        </div>
          <Footer />
          </AlertProvider>
      </UserProvider>
    </div>
  );
}

export default App;
