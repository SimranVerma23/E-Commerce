import React from 'react';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from "./Contexts";

function LinkBar({ setCart }) {

  const { setUser } = useContext(UserContext);

  function handleLogOut() {
    localStorage.removeItem("token");
    setUser(undefined);
    localStorage.removeItem("my-cart");
    setCart({});
  }

  return (
    <div className="md:max-w-6xl md:bg-gray-none md:mx-auto flex  flex-col md:items-center md:flex-row md:justify-end gap-4">
      <Link className="text-2xl" to="/">Home</Link>
      <Link className="text-2xl" to="/signup/">SignUp</Link>
      <Link className="text-2xl" to="/login/">Login</Link>
      <button className="text-2xl px-4 py-2 bg-gray-500 text-white rounded-md" onClick={handleLogOut}>LogOut</button>

    </div>

  );

}

export default LinkBar;
