import React from 'react';
import { Link } from "react-router-dom";

function LinkBar() {
  return (
    <div className="bg-gray-700 py-4 px-8">
    <div className=" max-w-6xl mx-auto">
      <Link to="/" className="text-white text-3xl">Products</Link>
    </div>
      </div>

  );

}

export default LinkBar;
