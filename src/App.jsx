import React, { useState } from 'react';
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


function App() {
  const saveDataString = localStorage.getItem('my-cart') || '{}';
	const saveData = JSON.parse(saveDataString);

  const [cart, setCart] = useState(saveData);

  function handleAddToCart(productId, count) {
    console.log('productId', productId, 'count', count);
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count }
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
		localStorage.setItem('my-cart', cartString);

  }
  const totalCount = Object.keys(cart).reduce(function(previous, current) {
    return previous + cart[current];
  }, 0);
  return (
    <>
      <NavBar productCount={totalCount} />
      <LinkBar/>
      <div className="flex flex-col h-screen overflow-y-scroll">
        <div className=" grow bg-secondary-default">
          <Routes>
            <Route index element={<ProductBox />} />
            <Route
              path="/products/:id/"
              element={<ProductDetail onAddToCart={handleAddToCart} />}
            />
            <Route path="*" element={<NotFound />} />
			<Route path='/cart/' element={<CartPage/>}/>
      <Route path="/signup/" element={<SignUpPage/>}/>
      <Route path='/login/' element={<LoginPage/>}/>
      <Route path='/forgot/' element={<ForgotPassword/>}/>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
