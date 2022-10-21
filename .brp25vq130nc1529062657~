import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductData } from './Api';
import Loading from './Loading';
import NotFound from './NotFound';
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';


function ProductDetail({onAddToCart}) {
	const [product, setProduct] = useState();
	const [loading, setLoading] = useState(true);
	const [count, setCount] = useState(1);

	const id = +useParams().id;

	useEffect(
		function() {
			const p = getProductData(id);
			p.then(function(data) {
				setProduct(data);
				setLoading(false);
			}).catch(function(data) {
				setLoading(false);
			});
		},
		[id]
	);

	function handleCountChange(event) {
		setCount(+event.target.value);
	}

	function handleButtonChange() {
		onAddToCart(+id ,+count);
	}
	if (loading) {
		return <Loading />;
	}
	if (!product) {
		return <NotFound />;
	}

	return (
		<>
			<div className=" py-5 sm:px-20 sm:pb-20 bg-gray-300 mb-4 shadow shadow-2xl shadow-gray-900 ">
				<Link to="/">
					<HiArrowCircleLeft className=" text-3xl sm:text-6xl" />
				</Link>

				<div className=" flex flex-col sm:flex-row sm:p-10 bg-white shadow shadow-2xl shadow-black rounded-md">
					<div className="sm:w-1/2 aspect-square">
						<img className="w-full h-full" src={product.thumbnail} />
					</div>
					<div className="flex flex-col sm:w-1/2 sm:px-10 px-4 py-4 sm:py-0">
						<h3 className="mb-3 text-xl sm:text-3xl font-bold">
							{product.title}
						</h3>
						<h1 className="text-2xl font-bold text-gray-600 mb-4">
							Rs.{product.price}
						</h1>
						<h2 className="text-2xl font-bold text-gray-600 mb-3">
							Discount%:
							{product.discountPercentage}
						</h2>
						<p className="text-gray-500 mb-3 text-xl">{product.description}</p>
						<div className="flex sm:flex-row gap-2">
							<input
								value={count}
								onChange={handleCountChange}
								type="number"
								className="bg-white border border-gray-400 rounded-md w-10 text-center"
							/>
							<button
								onClick={handleButtonChange}
								className=" px-4 py-2 sm:px-6 sm:py-2 hover:bg-primary-dark bg-primary-default rounded-md text-white font-bold sm:text-xl "
							>
								Add To Cart
							</button>
						</div>
						<h3 className="text-gray-500 font-base sm:text-xl">
							Category:{product.category}
						</h3>
					</div>
				</div>
				<div className="flex justify-between rounded-xl mt-5">
					<div>
						{id > 1 && (
							<Link
								className="p-2 hover:bg-green-700 bg-green-400 border border-4 border-green-600 rounded-xl text-white flex items-center gap-2 text-2xl"
								to={'/products/' + (id - 1)}
							>
								<HiArrowCircleLeft className="text-2xl" />Previous
							</Link>
						)}
					</div>
					<div>
						<Link
							className="p-2 hover:bg-orange-700 bg-orange-400 border-4 border-orange-600 rounded-xl text-white px-6 flex items-center gap-2 text-2xl"
							to={'/products/' + (id + 1)}
						>
							<HiArrowCircleRight className="text-2xl" />Next
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductDetail;
