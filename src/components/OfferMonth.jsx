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
      name: "S-Series Comfort Chair ",
      price: 375,
      discount: 420,
      evaluation: 3,
      countEvaluation: 30,
      image: BookSelf,
    },
    {
      id: 5,
      name: "S-Series Comfort Chair ",
      price: 375,
      discount: 420,
      evaluation: 3,
      countEvaluation: 30,
      image: BookSelf,
    },
  ];
  return (
    <div className="px-5 sm:px-20 my-15">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block  w-[20px] h-[40px] rounded bg-primary"></span>
        <h5 className="text-primary text-sm font-bold text-[16px]">
          This Month
        </h5>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[24px] md:text-[32px] ">
          Best Selling Products
        </h2>
        <button className="bg-primary text-white hover:bg-[#DB3333] cursor-pointer transition-colors duration-300 text-[13px] sm:text-[16px] px-4 sm:px-7 py-2 sm:py-3 rounded ">
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
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative my-10 bg-gray-100 p-4 sm:px-10 rounded overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 sm:h-56 md:h-60 lg:h-72 object-cover rounded mb-3 transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              <span className="bg-primary text-white text-xs px-3 py-1 rounded absolute top-2 left-2">
                %40
              </span>

              <h2 className="font-bold">{product.name}</h2>
              <h5 className="text-primary">
                ${product.price}{" "}
                <span className="line-through text-gray-600 ml-2">
                  ${product.discount}
                </span>
              </h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
