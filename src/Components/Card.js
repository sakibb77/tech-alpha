import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/product/cartSlice";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //add to cart handler
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));

    navigate("/cart");
  };

  return (
    <div className="product flex flex-col gap-2 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden max-w[280px]">
      <div className="img w-[80%] m-auto">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="texts flex flex-col gap-3 px-5 pb-5">
        <span className="category-tag uppercase tracking-widest text-xs font-semibold text-sky-500 ">
          {product.category}
        </span>
        <h3 className="title text-xl font-medium h-[5.25rem]">
          {product.name}
        </h3>
        <p className="details text-gray-500 h-[6rem]">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="price text-xl font-semibold text-orange-500">
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addToCartHandler(product)}
            className="uppercase bg-violet-500 text-sm md:text-base text-violet-50 font-medium p-2 px-4 md:p-3 md:px-7 rounded-md hover:bg-orange-500 hover:text-orange-50 duration-300 shadow-lg shadow-violet-300 hover:shadow-orange-300"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
