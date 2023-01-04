import React from "react";
import { currencyFormatter } from "../utilities/currencyFormatter";

const CartItem = ({ item }) => {
  return (
    <div
      key={item.id}
      className="cart-item grid grid-cols-6 items-center border-b"
    >
      <div className="cart-left col-span-3 flex items-center gap-8">
        <div className="cart-item-img w-32 h-32">
          <img src={item.image} alt="" className="object-cover" />
        </div>
        <div className="cart-item-text flex flex-col gap-2 items-start">
          <p className="">{item.name}</p>
          <button className="uppercase text-gray-400 hover:text-rose-500 duration-300">
            remove
          </button>
        </div>
      </div>
      <div className="cart-item-price">
        <p>{currencyFormatter(item.price)}</p>
      </div>
      <div className="cart-item-quantity text-lg flex">
        <button className="h-8 w-7 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50">
          -
        </button>
        <span className="h-8 w-10 flex justify-center items-center bg-gray-100 border border-gray-300 ">
          1
        </span>
        <button className="h-8 w-7 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50">
          +
        </button>
      </div>
      <div className="cart-item-total justify-self-end">
        <p>{currencyFormatter(item.price)}</p>
      </div>
    </div>
  );
};

export default CartItem;
