import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";

const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
  {
    id: 3,
    name: "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
    description:
      "Witness millions of shades of color through powerful Dynamic Crystal technology",
    price: 497.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
    category: "TV",
  },
  {
    id: 4,
    name: "Sony 65 Inch 4K Ultra HD TV X80K Series: LED Smart Google TV",
    description:
      "The 4K HDR Processor X1 delivers a picture that is smooth and clear, full of rich colors and detailed contrast",
    price: 698,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/287330_fhhcyx.jpg",
    category: "TV",
  },
  {
    id: 5,
    name: "PlayStation 4 Slim 1TB Console - Black",
    description:
      "When present, batteries have a capacity that exceeds 80% of the new equivalent",
    price: 479.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/0188101_sony-playstation-4-slim-1tb-gaming-console-ps4_550_obrjcw.jpg",
    category: "Console",
  },
  {
    id: 6,
    name: "Xbox Series S Fortnite & Rocket League Bundle",
    description:
      "Get the all-digital Xbox Series S Fortnite & Rocket League Bundle featuring the Midnight Drive Pack",
    price: 199,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/2f0a6466-be4f-45a1-868f-dce57c3c6469.0838a0a2ac552dd7273083559d7f3c70_d4i7zb.jpg",
    category: "Console",
  },
];

const Cart = () => {
  return (
    <div className="cart-section py-10 container mx-auto min-h-screen">
      <h2 className="section-title text-2xl font-bold text-center tracking-widest mb-10">
        SHOPPING CART
      </h2>

      <div className="cart-container">
        <div className="headline grid grid-cols-6 uppercase text-sm tracking-widest border-b font-medium pb-4">
          <p className="col-span-3">product</p>
          <p>price</p>
          <p>quantity</p>
          <p className="justify-self-end">total</p>
        </div>
        <div className="cart-item-wrapper flex flex-col gap-5">
          {data.map((item) => (
            //render cart item
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="cart-lower flex justify-between pt-10">
        <button className="p-3 px-6 uppercase bg-rose-100 text-rose-500 border border-rose-600 self-start tracking-wider font-medium hover:bg-rose-500 hover:text-rose-50 duration-300">
          clear cart
        </button>
        <div className="flex flex-col gap-3">
          <div className="sub-total-wrapper flex justify-between text-2xl">
            <span className=" text-cyan-500 font-medium">Subtotal</span>
            <span className="text-cyan-500 font-medium">$607.98</span>
          </div>
          <p className="text-gray-400 text-lg">
            Taxes and shipping costs are calculated at the checkout
          </p>
          <button className="uppercase bg-cyan-500 py-3 text-xl text-cyan-50 hover:bg-gray-700 hover:text-gray-50 duration-300">
            checkout
          </button>
          <Link
            to={"/"}
            className="text-cyan-500 text-xl self-start font-medium capitalize group relative flex gap-3"
          >
            <span className="duration-100">←</span>
            <span>continue shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
