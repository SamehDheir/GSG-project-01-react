import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Countdown from "react-countdown";
import Gamepad from "../assets/products/joystik.png";
import KeyBoard from "../assets/products/keyboard.png";
import TV from "../assets/products/tv.png";
import Chair from "../assets/products/chair.png";

export default function OfferDay() {
  const swiperRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 120,
      image: Gamepad,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      discount: 720,
      image: KeyBoard,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 170,
      discount: 199,
      image: TV,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      discount: 420,
      image: Chair,
    },
    {
      id: 5,
      name: "S-Series Comfort Chair",
      price: 375,
      discount: 420,
      image: Chair,
    },
    {
      id: 6,
      name: "S-Series Comfort Chair",
      price: 375,
      discount: 420,
      image: Chair,
    },
    {
      id: 7,
      name: "S-Series Comfort Chair",
      price: 375,
      discount: 420,
      image: Chair,
    },
  ];

  const targetDate = new Date("2025-10-16T00:00:00");

  return (
    <div className="px-5 sm:px-10 lg:px-20 my-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block w-[20px] h-[40px] rounded bg-primary"></span>
        <h5 className="text-primary text-sm font-bold text-[16px]">Today’s</h5>
      </div>

      <div className="flex flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-22">
          <h2 className="font-semibold text-[28px] md:text-[32px]">
            Flash Sales
          </h2>
          <div className="w-full md:w-60 mt-2 md:mt-0">
            <Countdown
              date={targetDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="flex gap-2 sm:gap-4 justify-start">
                  {[
                    { label: "Days", value: days },
                    { label: "Hours", value: hours },
                    { label: "Minutes", value: minutes },
                    { label: "Seconds", value: seconds },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="text-[10px] sm:text-sm lg:text-base">
                        {item.label}
                      </span>
                      <span className="text-lg sm:text-2xl font-bold">
                        {String(item.value).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
        </div>

        <div className="flex gap-1">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Pagination]}
        spaceBetween={20}
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
            <div className="bg-gray-100 rounded-lg overflow-hidden p-3 sm:p-4 flex flex-col items-center text-center h-[320px] sm:h-90">
              <div className="w-full relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-200 h-55 sm:h-55 object-contain rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
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

      <div className="text-center mt-6">
        <button className="bg-primary text-white hover:bg-[#DB3333] transition-colors duration-300 py-3 px-6 rounded">
          View All Products
        </button>
      </div>

      <hr className="my-10 border-gray-200" />
    </div>
  );
}
