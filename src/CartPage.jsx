import React from 'react';
import CartList from "./CartList";
import cartRow from "./cartRow"


function CartPage() {
  return (
    <div className="flex flex-col">
      <CartList/>
      <cartRow/>
    </div>
  );

}

export default CartPage;
