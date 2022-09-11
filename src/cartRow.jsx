import React from 'react';
import Button from "./Button";

function CartRow(){
  return(
    		<div className="px-96">
			<div className="flex flex-col border border-2 border-gray-400">
				<div className="p-4 bg-gray-200 border border-b-2 border-gray-400 text-center">
					<h1 className="text-2xl font-bold">Cart Totals</h1>
				</div>
				<div className="flex p-4 justify-between border-b-2 border-gray-400">
					<h2 className="text-xl font-bold ml-20">Subtotal</h2>
					<p className="text-xl font-bold mr-20">$166.00</p>
				</div>
				<div className="flex p-4 justify-between border-b-2 border-gray-400">
					<h2 className="text-xl font-bold ml-20">total</h2>
					<p className="text-xl font-bold mr-20">$166.00</p>
				</div>
				<div className="text-center p-4">
					<Button>PROCEED TO CHECKOUT</Button>
				</div>
			</div>
		</div>

 ); 

}

export default CartRow;

