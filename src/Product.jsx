import React from 'react';
import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";


function Product({ id, thumbnail, title, category, price }) {
  return (
    <div className="max-w-sm pb-4 overflow-hidden shadow shadow-xl shadow-gray-600">
      <Link to={"/products/" + id}>
        <div>
          <div className="w-full aspect-square">
            <img className="w-full h-full object-cover" src={thumbnail} />
          </div>
          <span className="text-gray-600 ml-3 text-xl sm:text-2xl font-bold">{title}</span>
          <h1 className="sm:text-xl ml-3">Category:{category}</h1>
          <h2 className="sm:text-xl font-bold ml-3">Rs.{price}</h2>
          <span className="grow"></span>
          <div className="flex ml-3">
            <HiStar className="text-2xl text-primary-default" />
            <HiStar className="text-2xl text-primary-default" />
            <HiStar className="text-2xl text-primary-default" />
            <HiStar className="text-2xl text-primary-default" />
            <HiStar className="text-2xl text-primary-default" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;





