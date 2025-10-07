import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Countdown from "react-countdown";
import Gamepad from "../assets/products/joystik.png";
import KeyBoard from "../assets/products/keyboard.png";
import TV from "../assets/products/tv.png";
import Chair from "../assets/products/chair.png";
export default function OfferDay() {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 120,
      evaluation: 4,
      countEvaluation: 80,
      image: Gamepad,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      discount: 720,
      evaluation: 5,
      countEvaluation: 77,
      image: KeyBoard,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 170,
      discount: 199,
      evaluation: 4,
      countEvaluation: 99,
      image: TV,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair ",
      price: 375,
      discount: 420,
      evaluation: 3,
      countEvaluation: 30,
      image: Chair,
    },
    {
      id: 5,
      name: "S-Series Comfort Chair ",
      price: 375,
      discount: 420,
      evaluation: 3,
      countEvaluation: 30,
      image: Chair,
    },
    {
      id: 6,
      name: "S-Series Comfort Chair ",
      price: 375,
      discount: 420,
      evaluation: 3,
      countEvaluation: 30,
      image: Chair,
    },
    {
      id: 7,
      name: "S-Series Comfort Chair ",
      price: 375,
      discount: 420,
      evaluation: 3,
      countEvaluation: 30,
      image: Chair,
    },
  ];

  const targetDate = new Date("2025-10-16T00:00:00");

  return (
    <div className="px-5 sm:px-20 my-15">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block  w-[20px] h-[40px] rounded bg-primary"></span>
        <h5 className="text-primary text-sm font-bold text-[16px]">Today’s</h5>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap items-center justify-between md:w-[455px] lg:w-[600px]">
          <h2 className="font-semibold md:text-[32px] text-[28px]">
            Flash Sales
          </h2>
          <div className="w-[60%] sm:w-50">
            <Countdown
              date={targetDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="flex gap-4 mt-4">
                  <div className="flex flex-col items-center">
                    <span className=" text-[10px] sm:text-sm lg:text-base">
                      Days
                    </span>
                    <span className="text-lg sm:text-2xl font-bold">
                      {String(days).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className=" text-[10px] sm:text-sm lg:text-base">
                      Hours
                    </span>
                    <span className="text-lg sm:text-2xl font-bold">
                      {String(hours).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className=" text-[10px] sm:text-sm lg:text-base">
                      Minutes
                    </span>
                    <span className="text-lg sm:text-2xl font-bold">
                      {String(minutes).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className=" text-[10px] sm:text-sm lg:text-base">
                      Seconds
                    </span>
                    <span className="text-lg sm:text-2xl font-bold">
                      {String(seconds).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              )}
            />
          </div>
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
            className="size-6 bg-gray-100 rounded-full p-1 hover:bg-primary hover:text-white duration-300 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
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
            <div className="relative my-10 bg-gray-100 px-4 sm:px-10 rounded overflow-hidden group">
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

      <div className="text-center">
        <button className="text-center bg-primary  hover:bg-[#DB3333] cursor-pointer transition-colors duration-300 text-white py-[16px] px-[48px] rounded">
          View All Products
        </button>
      </div>
      <hr className="my-10 text-gray-200 border-1" />
    </div>
  );
}
