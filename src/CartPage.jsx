import React, { useEffect } from 'react';
import { useState } from 'react';
import { getProductData } from './Api';
import CartList from './CartList';

function CartPage({product , saveData ,cart}) {

  console.log("my cart", product, saveData);
 
  return (
    <div className="flex flex-col">
      < CartList product={product} saveData={ saveData} cart={cart} />
    </div>
  );

}

export default CartPage;
