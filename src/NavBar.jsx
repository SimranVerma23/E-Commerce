import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from "react-router-dom";
import LinkBar from "./LinkBar";
import { WithCartProvider } from './WithProvider';


function NavBar({ cartCount, setCart }) {
  console.log(cartCount);
  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between max-w-6xl items-center mx-auto">
        <img
          className="w-40 h-20"
          src="https://s3-ap-southeast-1.amazonaws.com/p2swebsite/images/smeKhabar/news/amazon_1618225124036_113.jpg"
        />
        <div className='flex justify-center'>
          <div className='hidden md:block py-2'><LinkBar setCart={setCart} /></div>

          <Link to="/cart/">
            <div className="relative">
              <HiOutlineShoppingBag className="text-primary-default w-14 h-14" />
              <span className="absolute top-5 left-6 text-primary-default text-xl">{cartCount}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WithCartProvider(NavBar);
