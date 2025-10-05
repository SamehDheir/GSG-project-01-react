import T_Shirt from "../assets/products/t-shirt.png";
import Bag from "../assets/products/bag.png";
import CPU from "../assets/products/cpu.png";
import BookSelf from "../assets/products/bookself.png";

export default function OfferMonth() {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 120,
      evaluation: 4,
      countEvaluation: 80,
      image: T_Shirt,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      discount: 720,
      evaluation: 5,
      countEvaluation: 77,
      image: Bag,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 170,
      discount: 199,
      evaluation: 4,
      countEvaluation: 99,
      image: CPU,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair ",
      price: 375,
      discount: 420,
      evaluation: 3,
      countEvaluation: 30,
      image: BookSelf,
    },
  ];
  return (
    <div className="px-20 my-15">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block  w-[20px] h-[40px] rounded bg-primary"></span>
        <h5 className="text-primary text-sm font-bold text-[16px]">
          This Month
        </h5>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold md:text-[32px] text-[19px]">
          Best Selling Products
        </h2>
        <button className="bg-primary text-white hover:bg-[#DB3333] cursor-pointer transition-colors duration-300 text-[13px] sm:text-[16px] px-4 sm:px-7 py-2 sm:py-3 rounded ">
          View All
        </button>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-between item-center my-10 text-[16px] text-base/7">
        {products.map((product) => (
          <div key={product.id} className="mb-15">
            <div className="relative hover:scale-110 transition-transform duration-300 cursor-pointer bg-gray-100 p-10 w-80 h-80 md:w-[270px] md:h-[250px] mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 bg-white rounded-full hover:bg-primary hover:text-white duration-300 cursor-pointer p-1 absolute top-3 right-3"
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
                className="size-6 bg-white rounded-full  hover:bg-primary duration-300 cursor-pointer hover:text-white p-1 absolute top-10 right-3"
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
            <h2 className="font-bold">{product.name}</h2>
            <h5 className="text-primary">
              ${product.price}{" "}
              <span className="line-through text-gray-600 ml-3">
                ${product.discount}
              </span>
            </h5>
            <div className="flex gap-0.5 items-center">
              {Array.from({ length: 5 }, (_, i) =>
                i < product.evaluation ? (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )
              )}
              <span className="text-[12px] text-gray-900 ml-3">
                ({product.countEvaluation})
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
