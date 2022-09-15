import React from 'react';

function CartList() {
	return (
		<>
			<div className="flex flex-col border-2 m-20 bg-white">
				<div className="flex justify-between border border-b-2 p-4 bg-gray-200">
					<div className="mx-auto">
						<h1 className="text-xl font-bold">Product</h1>
					</div>
					<div className="flex gap-24">
						<h1 className="text-xl font-bold">Price</h1>
						<h1 className="text-xl font-bold">Category</h1>
						<h1 className="text-xl font-bold mr-8">Subtotal</h1>
					</div>
				</div>

				<div className="flex justify-between items-center border-b-2 p-10">
					<div className="flex items-center gap-32">
						<span className="w-12 h-12 text-xl p-2 text-center rounded-full border-2">
							X
						</span>
						<img
							className="w-20 h-20 aspect-square mx-auto"
							src="https://m.economictimes.com/thumb/msid-91736153,width-1200,height-900,resizemode-4,imgsize-25750/iphone-13-pro-max.jpg"
						/>
						<h1 className="text-xl font-bold text-primary-default py-2">
							iPhone 13 Pro Max
						</h1>
					</div>
					<div className="flex justify-between gap-28">
						<h1 className="text-xl font-bold py-2">50,000</h1>
						<input
							type="number"
							value="2"
							className=" text-xl font-bold w-10 h-10 text-center border border-2"
						/>
						<h1 className="text-xl font-bold py-2">1,00,000</h1>
					</div>
				</div>

				<div className="flex justify-between items-center p-10 border-b-2">
					<div className="flex items-center gap-32">
						<span className="w-12 h-12 text-xl p-2 text-center rounded-full border-2">
							X
						</span>

						<img
							className="w-20 h-20 aspect-square mx-auto"
							src="https://i.pinimg.com/originals/a2/19/df/a219dfd23fedc5324684bf5c28ecec2e.jpg"
						/>
						<h1 className="text-xl font-bold text-primary-default py-2">
							Rose Gold Macbook Pro
						</h1>
					</div>
					<div className="flex gap-28">
						<h1 className="text-xl font-bold py-2">70,000</h1>
						<input
							type="number"
							value="3"
							className="py-2 text-xl font-bold w-10 h-10 text-center border border-2"
						/>
						<h1 className="text-xl font-bold py-2">2,10,000</h1>
					</div>
				</div>
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

