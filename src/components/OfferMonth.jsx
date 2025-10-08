import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

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
      name: "S-Series Comfort Chair",
      price: 375,
      discount: 420,
      evaluation: 3,
      countEvaluation: 30,
      image: BookSelf,
    },
    {
      id: 5,
      name: "S-Series Comfort Chair",
      price: 375,
      discount: 420,
      evaluation: 3,
      countEvaluation: 30,
      image: BookSelf,
    },
  ];

  return (
    <div className="px-5 sm:px-10 lg:px-20 my-15">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block w-[20px] h-[40px] rounded bg-primary"></span>
        <h5 className="text-primary text-sm font-bold text-[16px]">
          This Month
        </h5>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-[24px] md:text-[32px]">
          Best Selling Products
        </h2>
        <button className="bg-primary text-white hover:bg-[#DB3333] transition-colors duration-300 text-[13px] sm:text-[16px] px-4 sm:px-7 py-2 sm:py-3 rounded">
          View All
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }, 
          1366: { slidesPerView: 4 },
        }}
        className="my-6"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-gray-100 rounded-lg overflow-hidden p-4 sm:p-6 flex flex-col items-center text-center h-[320px] sm:h-90">
              <div className="w-full  relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-200 h-50 sm:h-55 object-contain rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
                />
                <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                  40%
                </span>
              </div>
              <h3 className="font-semibold mt-3 text-[14px] sm:text-[16px] md:text-[18px]">
                {product.name}
              </h3>
              <p className="text-primary font-bold mt-1 text-[14px] sm:text-[16px]">
                ${product.price}{" "}
                <span className="line-through text-gray-500 ml-2">
                  ${product.discount}
                </span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
