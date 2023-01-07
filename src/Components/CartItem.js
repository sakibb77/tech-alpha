import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity } from "../features/product/cartSlice";
import { currencyFormatter } from "../utilities/currencyFormatter";

const CartItem = ({ item, handleRemove }) => {
  const dispatch = useDispatch();

  const handleDecrease = (product) => {
    dispatch(decreaseQuantity(product));
  };
  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div
      key={item.id}
      className="cart-item grid  md:grid-cols-6 auto-rows-min  md:h-auto items-start md:items-center border-b border-gray-200 pb-2"
    >
      <div className="cart-left col-span-2 md:col-span-3 flex items-start md:items-center gap-3 md:gap-8">
        <div className="cart-item-img w-16 h-16 md:w-32 md:h-32 row-span-3">
          <img src={item.image} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="cart-item-text flex flex-col gap-2 items-start">
          <p className="text-xs md:text-base">{item.name}</p>
          <button
            onClick={() => handleRemove(item)}
            className="uppercase text-xs md:text-base font-semibold text-rose-400 md:hover:text-rose-500 duration-300 md:text-gray-400"
          >
            remove
          </button>
        </div>
      </div>
      <div className="cart-item-price hidden md:block">
        <p>{currencyFormatter(item.price)}</p>
      </div>
      <div className="flex justify-between col-span-2 px-4 md:px-0">
        <div className="cart-item-quantity text-lg flex">
          <button
            onClick={() => handleDecrease(item)}
            className="h-8 w-7 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
          >
            -
          </button>
          <span className="h-8 w-10 flex justify-center items-center bg-gray-100 border border-gray-300 ">
            {item.cartQuantity}
          </span>
          <button
            onClick={() => handleIncrease(item)}
            className="h-8 w-7 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
          >
            +
          </button>
        </div>
        <div className="cart-item-total justify-self-end">
          <p>{currencyFormatter(item.price * item.cartQuantity)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
