import React from 'react';
import CartRow from './CartRow';
import { HiArrowCircleLeft } from 'react-icons/hi';
import { Link } from "react-router-dom"


function CartList({product , saveData ,cart}) {  
	
	console.log("my product ", product, saveData, cart);

   
	return (
		<>	<Link to="/">
					<HiArrowCircleLeft className=" text-3xl sm:text-6xl"/>
				</Link>


     	  	<div className="flex flex-col border-2 m-20 bg-white">
				<div className="flex justify-between border border-b-2 p-4 bg-gray-200">
					<div className="mx-auto">
						<h1 className="text-xl font-bold">Product</h1>
					</div>
					<div className="flex gap-20">
						<h1 className="text-xl font-bold">Price</h1>
						<h1 className="text-xl font-bold">Category</h1>
						<h1 className="text-xl font-bold mr-8">Subtotal</h1>
					</div>
			</div>
              { product.length > 0 && product.map(function (items) {
	 return < CartRow  key={items.title} {...items} saveData={saveData} cart={cart} />
	})
}

				<div className="flex justify-between p-4">
					<div className="flex gap-4">
						<button className="bg-white font-bold text-gray-400 text-xl py-4 px-12 border-2 border-gray-400">
							COUPON CODE
						</button>
						<button className="bg-primary-default text-white font-bold text-xl border-2 border-primary-dark hover:bg-primary-dark px-12 py-4 rounded-md">
							APPLY COUPON
						</button>
					</div>
					<div>
						<button className="px-12 py-4 bg-red-200 text-gray-400 rounded-md font-bold text-xl hover:bg-gray-200">
							UPDATE CART
						</button>
					</div>
				</div>

			</div>
			</>

	);
}

export default CartList;

