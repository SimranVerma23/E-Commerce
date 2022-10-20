import React, { useState } from "react";
import { useEffect } from "react";
import { getCart, getProductByIds, saveCart } from "../Api";
import { CartContext } from "../Contexts";
import { WithUserProvider } from "../WithProvider";

function CartProvider({ IsLoggedIn, children }) {
  const [cart, setCart] = useState([]);

  useEffect(function() {
    if (IsLoggedIn) {
      getCart().then(function(savedCart) {
        console.log("savedCart", savedCart)
        setCart(savedCart);
      })
    } else {
      const saveDataString = localStorage.getItem('my-cart') || '{}';
      const saveData = JSON.parse(saveDataString);
      quantityMapToCart(saveData);
    }
  }
    , [IsLoggedIn]);

  const quantityMapToCart = (quantityMap) =>
    getProductByIds(Object.keys(quantityMap)).then(function(products) {
      console.log("products ", products);
      const savedCart = products.map((p) => ({
        product: p,
        quantity: quantityMap[p.id]
      }
      ));
      console.log("my savedCart", savedCart);
      setCart(savedCart);
    })


  function addToCart(productId, count) {
    const quantityMap = cart.reduce((m, cartItem) => ({
      ...m, [cartItem.product.id]: cartItem.quantity
    }), {});

    const oldCount = quantityMap[productId] || 0;
    const newCart = { ...quantityMap, [productId]: oldCount + count }
    updateCart(newCart);
  }


  function updateCart(quantityMap) {
    if (IsLoggedIn) {
      saveCart(quantityMap).then(function() {
        quantityMapToCart(quantityMap)
      });

    } else {
      const quantityMapString = JSON.stringify(quantityMap);
      localStorage.setItem('my-cart', quantityMapString);
      quantityMapToCart(quantityMap);
    }
  }

  const cartCount = cart.reduce(function(previous, current) {
    return previous + current.quantity
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, cartCount }}>{children}</CartContext.Provider>
  )

}

export default WithUserProvider(CartProvider);


