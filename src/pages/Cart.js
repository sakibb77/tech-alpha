import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import {
  clearFromCart,
  getSubTotal,
  removeFromCart,
} from "../features/product/cartSlice";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Cart = () => {
  const { cartItems: data, cartTotalAmount } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const cartClearHandler = () => {
    dispatch(clearFromCart());
  };

  useEffect(() => {
    dispatch(getSubTotal());
  }, [dispatch, data]);

  return (
    <div className="cart-section py-6 md:py-10 px-4  container mx-auto min-h-screen">
      <h2 className="uppercase section-title text-lg md:text-xl lg:text-2xl font-bold text-center tracking-wide mb-6 md:mb-10">
        {data.length === 0
          ? "your cart is empty"
          : `you have added ${data.length} item${data.length > 1 ? "s" : ""}`}
      </h2>

      {data.length === 0 && (
        <div className="flex items-center justify-center">
          <Link
            to={"/products"}
            className=" text-violet-50 bg-orange-500 text-base md:text-xl p-3 px-7 rounded-lg  font-medium capitalize group relative flex justify-center gap-3"
          >
            <span className="duration-100">←</span>
            <span>continue shopping</span>
          </Link>
        </div>
      )}

      {data.length > 0 && (
        <>
          <div className="cart-container">
            <div className="headline hidden md:grid grid-cols-6 uppercase text-sm tracking-widest border-b border-gray-200 font-medium pb-4">
              <p className="col-span-3">product</p>
              <p>price</p>
              <p>quantity</p>
              <p className="justify-self-end">total</p>
            </div>
            <div className="cart-item-wrapper flex flex-col gap-2 md:gap-5">
              {data?.map((item) => (
                //render cart item
                <CartItem
                  item={item}
                  key={item.id}
                  handleRemove={handleRemove}
                />
              ))}
            </div>
          </div>
          <div className="cart-lower justify-center gap-3 flex flex-col-reverse md:flex-row  md:justify-between items-center pt-10">
            <button
              onClick={() => cartClearHandler()}
              className="p-1 px-3 md:p-3 md:px-6 uppercase bg-rose-100 text-rose-500 border border-rose-600 md:self-start tracking-wider font-medium hover:bg-rose-500 hover:text-rose-50 duration-300"
            >
              clear cart
            </button>
            <div className="flex flex-col gap-3">
              <div className="sub-total-wrapper flex justify-between text-lg md:text-2xl">
                <span className=" text-cyan-500 font-medium">Subtotal</span>
                <span className="text-cyan-500 font-medium">
                  {currencyFormatter(cartTotalAmount)}
                </span>
              </div>
              <p className="text-gray-400 text-lg text-center md:text-start">
                Taxes and shipping costs are calculated at the checkout
              </p>
              <button className="uppercase bg-cyan-500 py-2 md:py-3 text-lg md:text-xl text-cyan-50 hover:bg-gray-700 hover:text-gray-50 duration-300">
                checkout
              </button>
              <Link
                to={"/products"}
                className="text-cyan-500 text-base md:text-xl self-start font-medium capitalize group relative flex gap-3"
              >
                <span className="duration-100">←</span>
                <span>continue shopping</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
