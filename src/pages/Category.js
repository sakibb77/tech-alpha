import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

const Category = () => {
  const category = useParams();

  const { items: data } = useSelector((state) => state.product);
  const filterdData = data?.filter((item) => item.category === category.name);
  console.log(filterdData);

  return (
    <div className="products-section min-h-screen container mx-auto py-10">
      <div className="section-title uppercase text-lg md:text-xl lg:text-2xl font-bold text-center mb-10">
        <h1>browse {category?.name}</h1>
      </div>

      <div className="category-wrapper grid  gap-10 items-center justify-center justify-items-center px-5 md:px-0">
        {/* {status && <p>{status}</p>} */}

        {filterdData?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
