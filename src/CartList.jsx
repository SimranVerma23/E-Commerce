import React , {useState , useEffect} from 'react';
import CartRow from './CartRow';
import { HiArrowCircleLeft } from 'react-icons/hi';
import { Link } from "react-router-dom"
import { WithCartProvider } from './WithProvider';



function CartList({ cart, updateCart }) { 
	console.log("cart", cart);
	
	 const [quantityMap, setQuantityMap] = useState(cart);

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

  useEffect(
    function () {
      setQuantityMap(cartToQuantityMap());
    },
    [cart]
  );

  function handleChange(productId, newValue) {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
  }

  function myUpdateCart() {
    updateCart(quantityMap);
  }

  function handleRemove(productId) {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  }

	 
	return (<div>
		
		<Link to="/">
			<HiArrowCircleLeft className="text-3xl md:text-6xl" />
		</Link>


		<div className="md:mx-28 border-2 border-gray-500">
				
			<div className="md:hidden">
				{cart.map((cartItem)=>(
					<CartRow key={cartItem.product.id} quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
						product = {cartItem.product}
						onRemove={handleRemove}
						onChange={handleChange} />
				))}
			</div>
  
			<div className="hidden md:block">
				<div className="flex justify-between space-x-2 p-4 bg-secondary-default border-b-2 border-gray-500">
						<h1 className="text-xl font-semibold text-gray-700 grow ml-52">Product</h1>
		                <h1 className="text-xl font-semibold text-gray-700 w-24 text-center">Price</h1>
						<h1 className="text-xl font-semibold text-gray-700 w-24">Quantity</h1>
						<h1 className="text-xl font-semibold text-gray-700 w-24">Subtotal</h1>
				</div>
				{cart.map((cartItem) => (
					<CartRow key={cartItem.product.id} quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
						product = {cartItem.product}
						onRemove={handleRemove}
						onChange={handleChange} />
				))}
			</div>
			<div className="flex flex-col gap-3 md:flex-row md:justify-between p-4">
				<div className="flex justify-center gap-8">
					<button className="bg-white md:font-bold py-2 px-6 text-gray-400 md:text-xl md:py-4 md:px-12 border-2 border-gray-400">
						COUPON CODE
					</button>
					<button className="bg-red-500 text-white py-2 px-6 md:font-bold md:text-xl border-2 border-red-600 hover:bg-red-600 md:px-12 md:py-4 rounded-md">
						APPLY COUPON
					</button>
				</div>
				<button onClick={myUpdateCart} className="px-12 py-4 bg-red-200 text-gray-400 rounded-md font-bold text-xl hover:bg-gray-200">
					UPDATE CART
				</button>
			</div>
		</div>
		<div className='flex justify-end'>
<div className="flex flex-col border-2 border-gray-700 w-full sm:max-w-md md:w-96 md:mx-28 sm:my-4">
  <h1 className="border-b-2 border-gray-700 py-4 pl-4 text-xl font-bold text-gray-700 bg-secondary-default">Cart Total</h1>
  <div className="flex gap-28 border-b-2 border-gray-700 py-4 pl-4">
    <h1 className="ml-2 text-xl font-semibold text-gray-700">Subtotal</h1>
    <h1 className="text-xl font-semibold text-gray-700">4537</h1>
  </div>
  <div className="flex gap-36 border-b-2 border-gray-700 py-4 pl-4">
    <h1 className="ml-2 text-xl font-semibold text-gray-700">total</h1>
    <h1 className="text-xl font-semibold text-gray-700">4537</h1>
  </div>
  <button className="m-4 rounded-md bg-red-500 p-4">PROCEED TO CHECKOUT</button>
	</div>
    </div>
	</div>);

}

export default WithCartProvider(CartList);

