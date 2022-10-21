import React from 'react';




function CartRow({ product ,quantity, onChange,onRemove }) {
	const { thumbnail, price, title, id, } = product;

	function handleChange(event) {
		onChange(id, +event.target.value);
	}
	
	function handleRemove() {
		onRemove(id);		
	}
	
    return (<>
		<div className="md:hidden flex flex-col ">
			<div className="self-end">
				<button onClick={handleRemove} productId={id} className="m-4 h-10 w-10 rounded-full border-2">X</button>
			</div>
			<img src={thumbnail} className="m-4 mx-auto aspect-square h-20 w-20" />
			<div className="flex justify-between border-y-2 border-gray-500 p-6">
				<h1 className="text-xl font-semibold text-gray-700">Product:</h1>
				<h1 className="text-xl font-semibold text-red-700">{title}</h1>
			</div>
			<div className="flex justify-between border-b-2 border-gray-500 p-6">
				<h1 className="text-xl font-semibold text-gray-700">Price:</h1>
				<h1 className="text-xl font-semibold text-gray-700">{price}</h1>
			</div>
			<div className="flex justify-between border-b-2 border-gray-500 p-6">
				<h1 className="text-xl font-semibold text-gray-700">Quantity:</h1>
				<input type="number" value={quantity} productId={id} onChange={handleChange} className="h-10 w-10 border border-gray-400 text-center" />
			</div>
			<div className="flex justify-between border-gray-500 p-6 border-b-2">
				<h1 className="text-xl font-semibold text-gray-700">Subtotal</h1>
				<h1 className="text-xl font-semibold text-gray-700">{price * quantity}</h1>
			</div>
		</div>
         
		
		<div className="hidden md:block">
			<div className="flex items-center justify-between py-4 border-b-2 border-gray-500">
				 <div className="flex gap-8">
					<button onClick={handleRemove} productId={id} className="m-4 h-10 w-10 rounded-full border-2">X</button>
					<img src={thumbnail} className="aspect-square h-20 w-20"/>
				 </div>
				 <h1 className="text-xl font-semibold text-red-700 grow ml-10">{title}</h1>
				 <h1 className="text-xl font-semibold text-gray-700 w-24">{price}</h1>
				 <div className='w-24'>
					<input type="number" value={quantity} productId={id} onChange={handleChange} className="h-10 w-10 border border-gray-400 text-center mx-auto" />
				 </div>
				 <h1 className="text-xl font-semibold text-gray-700 w-24">{price * quantity}</h1>
			</div>
		</div>
	</> );

}

export default CartRow;
