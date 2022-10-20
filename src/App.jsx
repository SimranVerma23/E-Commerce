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
// import UserRoute from './UserRoute';
import Alert from './Alert';
import UserProvider from './Provider/UserProvider';
import AlertProvider from './Provider/AlertProvider';
import CartProvider from './Provider/CartProvider';

function App() {

  const [isMenu, setIsMenu] = useState(false);
  function handleMenuChange() {
    console.log("status changed", isMenu);
    setIsMenu(!isMenu);
  }

  return (
    <div>
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Alert />
            <NavBar />
            <div className="flex flex-col h-screen overflow-y-scroll relative">
              <HiMenu onClick={handleMenuChange} className="md:hidden" />
              {isMenu && <LinkBar />}
              <div className=" grow bg-secondary-default">
                <Routes>
                  <Route index element={<ProductBox />} />
                  <Route
                    path="/products/:id/"
                    element={<ProductDetail />}
                  />
                  <Route path="*" element={<NotFound />} />
                  <Route path='/cart/' element={<CartPage />} />
                  <Route path="/signup/" element={<AuthRoute><SignUpPage /></AuthRoute>} />
                  <Route path='/login/' element={<AuthRoute><LoginPage /></AuthRoute>} />
                  <Route path='/forgot/' element={<ForgotPassword />} />

                </Routes>
              </div>
            </div>
            <Footer />
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
