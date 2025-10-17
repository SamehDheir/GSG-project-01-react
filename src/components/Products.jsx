import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/product";
import { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import { ProductCard } from "./ProductCard";

const Products = () => {
  const [showAll, setShowAll] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="px-5 sm:px-20 my-15">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block  w-[20px] h-[40px] rounded bg-primary"></span>
        <h5 className="text-primary text-sm font-bold text-[16px]">
          Our Products
        </h5>
      </div>
      <div className="flex justify-between items-baseline">
        <div className="flex flex-wrap items-center justify-between w-lg">
          <h2 className="font-semibold md:text-[32px] text-[28px]">
            Explore Our Products
          </h2>
        </div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 bg-gray-100 rounded-full p-1 mr-1  hover:bg-primary hover:text-white duration-300 cursor-pointer"
          >
            <path
              className="border"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 bg-gray-100 rounded-full p-1  hover:bg-primary hover:text-white duration-300 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full my-10 text-[16px] text-base/7">
        {(showAll ? data : data.slice(0, 8)).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center">
        <button
          className="
        text-center bg-primary text-white  hover:bg-[#DB3333] cursor-pointer transition-colors duration-300 py-[16px] px-[48px] rounded"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Hide Products" : "View All Products"}
        </button>
      </div>
      <hr className="my-10 text-gray-200 border-1" />
    </div>
  );
};

export default Products;
