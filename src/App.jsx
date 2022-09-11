import React, { useState } from 'react';
import ProductBox from './ProductBox';
import NavBar from './NavBar';
import NotFound from './NotFound';
import CartRow from "./cartRow";
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [cart, setCart] = useState({});

  function handleAddToCart(productId, count) {
    console.log('productId', productId, 'count', count);
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count }
    setCart(newCart);
  }
  const totalCount = Object.keys(cart).reduce(function(previous, current) {
    return previous + cart[current];
  }, 0);
  return (
    <>
      <NavBar productCount={totalCount} />
      <div className="flex flex-col h-screen overflow-y-scroll">
        <div className=" grow bg-secondary-default">
          <Routes>
            <Route index element={<ProductBox />} />
            <Route
              path="/products/:id/"
              element={<ProductDetail onAddToCart={handleAddToCart} />}
            />
            <Route path="*" element={<NotFound />} />
			<Route path='/cart/' element={<CartRow/>}/>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
