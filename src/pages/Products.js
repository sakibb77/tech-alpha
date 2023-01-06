import React from "react";
import { useSelector } from "react-redux";
import Card from "../Components/Card";

const Products = () => {
  const { items: data, status } = useSelector((state) => state.product);

  return (
    <div className="products-section min-h-screen container mx-auto py-10">
      <div className="section-title uppercase text-2xl font-bold text-center mb-10">
        <h1>browse all products</h1>
      </div>

      <div className="products-wrapper grid  gap-10 justify-items-center px-5 md:px-0">
        {status && <p>{status}</p>}

        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
