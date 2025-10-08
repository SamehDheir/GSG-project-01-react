import Dogfood from '../assets/products/dogfood.jpg'
import Camera from '../assets/products/camera.png'
import Laptobp from '../assets/products/laptop.png'
import Curology from "../assets/products/curology.png";
import Car from "../assets/products/car.png";
import Cleats from '../assets/products/cleats.png'
import GameBad from '../assets/products/gamebad.png'
import Jacket from '../assets/products/jacket.png'

export default function CardProduct() {
  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: 100,
      evaluation: 3,
      countEvaluation: 35,
      image:
       Dogfood
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: 360,
      evaluation: 4,
      countEvaluation: 95,
      image:
       Camera
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      evaluation: 5,
      countEvaluation: 325,
      image:
       Laptobp
    },
    {
      id: 4,
      name: "Curology Product Set ",
      price: 500,
      evaluation: 4,
      countEvaluation: 145,
      image:
       Curology
    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: 590,
      evaluation: 5,
      countEvaluation: 65,
      image:
       Car
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      evaluation: 3,
      countEvaluation: 35,
      image:
       Cleats
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      evaluation: 4,
      countEvaluation: 55,
      image:
       GameBad
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: 660,
      evaluation: 4,
      countEvaluation: 55,
      image:
       Jacket
    },
  ];
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full my-10 text-[16px] text-base/7">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-start cursor-pointer"
          >
            <div className="relative w-full p-5 bg-gray-100 flex justify-center aspect-[4/3] rounded overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="sm:w-50 h-full sm:h-50 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
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
                className="size-6 bg-white rounded-full hover:bg-primary hover:text-white duration-300 cursor-pointer p-1 absolute top-12 right-3"
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

            <h2 className="font-bold mt-3">{product.name}</h2>

            <div className="flex gap-1 items-center mt-1">
              <h5 className="text-primary font-semibold">${product.price}</h5>
              <div className="flex ml-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={i < product.evaluation ? "currentColor" : "none"}
                    stroke={i < product.evaluation ? "currentColor" : "gray"}
                    className={`size-4 ${
                      i < product.evaluation
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-[12px] text-gray-700 ml-2">
                ({product.countEvaluation})
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          className="
        text-center bg-primary text-white  hover:bg-[#DB3333] cursor-pointer transition-colors duration-300 py-[16px] px-[48px] rounded"
        >
          View All Products
        </button>
      </div>
      <hr className="my-10 text-gray-200 border-1" />
    </div>
  );
}
