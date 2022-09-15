import React from 'react';
import CartList from "./CartList";
import CartRow from "./CartRow"


function CartPage(){
  return(
    <div className="flex flex-col p-2">   
      <CartList/>
      <CartRow/>
  </div>
 ); 

}

export default CartPage;
