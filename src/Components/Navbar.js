import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="bg-violet-700 text-violet-50 h-20 flex items-center justify-center">
      <div className="navbar container mx-auto flex items-center justify-between">
        <div className="logo">
          <span className="text-xl font-semibold select-none">
            tech<span className="text-orange-500">alfa</span>
          </span>
        </div>
        <div className="nav-links flex gap-3 items-center text-base">
          <Link to={"/"} className="nav-link ">
            Home
          </Link>
          <Link to={"/products"} className="nav-link ">
            products
          </Link>
          <Link to={"/cart"} className="relative ">
            <BsCart3 />
            <span className="cart-counter h-5 w-5 absolute -top-3 -right-3 text-xs rounded-full bg-orange-600 font-medium flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
