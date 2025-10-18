import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById, fetchRelatedProducts } from "../../api/product";
import StarRating from "../../components/StarRating";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../../store/cartSlice";
import Navbar from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState(null);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });

  const { data: relatedProducts, isLoading: isRelatedLoading } = useQuery({
    queryKey: ["relatedProducts", product?.category],
    queryFn: () => fetchRelatedProducts(product.category, product.id),
    enabled: !!product,
  });

  useEffect(() => {
    if (!product) return;
    document.title = `Product | ${product.title}`;
    if (product.images?.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (isLoading)
    return (
      <Loading
        variant="productDetails"
        count={4}
        countMobile={2}
        countIpad={3}
      />
    );
  if (isError || !product) return <Error />;

  return (
    <>
      <Navbar heartIcon={true} cartIcon={true} profileIcon={false} />

      <div className="px-5 sm:px-20 my-10">
        <h4 className="text-gray-500 text-sm mb-4">
          Home /{" "}
          <span className="text-gray-800 font-medium">{product.category}</span>{" "}
          / <span className="font-semibold">{product.title}</span>
        </h4>

        <div className="flex flex-col lg:flex-row gap-10 mt-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 justify-center md:p-0">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumbnail-${i}`}
                  className={`w-24 md:h-24 object-contain border rounded-md cursor-pointer hover:border-primary ${
                    mainImage === img ? "border-primary" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>

            <div className="flex-1 flex justify-center items-center bg-gray-50 rounded-md p-4">
              <img
                src={mainImage}
                alt={product.title}
                className="object-contain w-full max-w-md"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h2 className="text-2xl lg:text-[24px] font-semibold">
              {product.title}
            </h2>
            <StarRating rating={product.rating} />
            <p className="text-xl lg:text-[24px] text-gray-800">
              ${product.price}
            </p>
            <p className="text-gray-600 lg:text-[14px]">
              {product.description}
            </p>
            <hr className="border-1 border-gray-400 my-8" />
            <div className="flex items-center gap-3">
              <h4 className=" mb-2 text-[24px]">Colours:</h4>
              <div className="flex gap-3">
                <button className="w-6 h-6 rounded-full border-gray-400 border bg-black cursor-pointer"></button>
                <button className="w-6 h-6 rounded-full border-gray-400 border bg-primary cursor-pointer"></button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <h4 className="mb-2 text-[24px]">Size:</h4>
              <div className="flex gap-2 flex-wrap">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="w-10 py-1 border-gray-400 border rounded hover:bg-primary hover:text-white duration-300 cursor-pointer"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center border-gray-400 border rounded overflow-hidden w-30">
                <button
                  onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
                  className="flex-1 py-2 text-center border-gray-400 border-r hover:bg-gray-100 cursor-pointer"
                >
                  −
                </button>

                <span className="flex-1 text-center font-medium">{count}</span>

                <button
                  onClick={() => setCount((prev) => prev + 1)}
                  className="flex-1 py-2 text-center bg-primary text-white hover:bg-primary cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                className="bg-primary text-white px-10 py-2 rounded hover:bg-red-600 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(addToCart({ product, quantity: count }));
                  toast.success(`${product.title} added to cart!`);
                }}
              >
                Buy Now
              </button>
              <button className="relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-10 h-10 hover:text-white p-2 hover:bg-primary border rounded-full duration-300 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21C12 21 6 15 4 10.5C2 6 6 2 12 6C18 2 22 6 20 10.5C18 15 12 21 12 21Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4 mt-30">
          <span className="inline-block w-[20px] h-[40px] rounded bg-primary"></span>
          <h5 className="text-primary text-sm font-bold text-[16px]">
            Related Products
          </h5>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-[14px]">
          {isRelatedLoading ? (
            <Loading
              variant="products"
              message="Loading related products..."
              count={4}
              countMobile={2}
              countIpad={3}
            />
          ) : relatedProducts && relatedProducts.length > 0 ? (
            relatedProducts
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          ) : (
            <p className="text-gray-500">No related products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
