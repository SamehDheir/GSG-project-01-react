import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cartSlice";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div key={product.id} className="flex flex-col items-start cursor-pointer mb-10">
      <div className="relative w-full p-5 bg-gray-100 flex justify-center aspect-[4/3] rounded overflow-hidden group">
        <Link key={product.id} to={`/products/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="sm:w-50 h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </Link>

        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart(product));
            toast.success(`${product.title} added to cart!`);
          }}
          className="absolute bottom-0 bg-black text-white p-3 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          Add To Cart
        </button>

        <span className="absolute top-4 left-3 bg-primary text-white text-xs px-2 py-1 rounded">
          {product.discountPercentage} %
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 bg-white rounded-full hover:bg-primary hover:text-white duration-300 cursor-pointer p-1 absolute top-3 right-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 bg-white rounded-full hover:bg-primary hover:text-white duration-300 cursor-pointer p-1 absolute top-12 right-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>

      <h2 className="font-medium mt-3">{product.title}</h2>

      <div className="flex gap-1 items-center mt-1">
        <h5 className="text-primary font-semibold">${product.price}</h5>
        <h5 className="text-gray-600 font-bold line-through text-sm ml-5">
          ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
        </h5>
      </div>
      <StarRating rating={product.rating} />
    </div>
  );
};
