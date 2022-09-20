import React from 'react';
import { Link } from "react-router-dom";

function LinkBar() {
  return (
    <div className="bg-gray-700 py-4 px-8">
    <div className=" max-w-6xl mx-auto flex gap-4">
      <Link to="/" className="text-white text-2xl">Home</Link>
      <Link to ="/signup/" className="text-white text-2xl">Signup</Link>
      <Link to ="/login/" className="text-white text-2xl">Login</Link>

    </div>
      </div>

  );

}

export default LinkBar;
