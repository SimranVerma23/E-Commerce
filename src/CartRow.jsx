import React from 'react';
import { useState } from 'react';
import {HiX } from 'react-icons/hi';



function CartRow({ thumbnail, price, title, id, saveData , cart }) {
	const count = saveData;
   const [visiblity, setVisiblity] = useState(true);
	const [quantity, setQuantity] = useState(count[id]);
	console.log("cart", cart);

	function handleInputChange(event) {
		setQuantity(+event.target.value);
	}
	
	function handleClick() {
		setVisiblity(false);
		console.log(visiblity);
		myFunc(id);
	}
	const myFunc = (id) => {
    const myObj = localStorage.getItem('my-cart');
    let keys = Object.keys(JSON.parse(myObj));
    const index = keys.indexOf(id.toString());
    keys = keys.filter((a) => +a !== id);
    let values = Object.values(JSON.parse(myObj));
    values.splice(index, 1);

    const obj = {};
    keys.forEach((value, index) => {
      obj[value] = values[index];
    });
    localStorage.clear();
    localStorage.setItem('my-cart', JSON.stringify(obj));
     cart(obj);
  };



	return (visiblity ?
		(
			<div className="flex justify-between items-center border-b-2 sm:p-10">
				<div className="flex items-center sm:gap-32">
					<HiX className="text-4xl border-2 rounded-full" onClick={handleClick}>
						X
					</HiX>
					<img
						className="w-20 h-20 aspect-square sm:mx-auto"
						src={thumbnail}
					/>
					<h1 className="text-xl font-bold text-primary-default py-2">
						{title}
					</h1>
				</div>
				<div className="flex justify-between gap-32">
					<h1 className="text-xl font-bold py-2">{price}</h1>
					<input
						type='number'
						value={quantity}
						onChange={handleInputChange}
						className=" text-xl font-bold w-10 h-10 text-center border border-2"
					/>
					<h1 className="text-xl font-bold py-2">{price * quantity}</h1>
				</div>
			</div>) : <div className='hidden'></div>
	);

}

export default CartRow;
