import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Countdown from "react-countdown";
import { fetchDiscountProducts } from "../api/product";
import Loading from "./Loading";
import Error from "./Error";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { ProductCard } from "./ProductCard";

export default function OfferDay() {
  const [showAll, setShowAll] = useState(false);
  const swiperRef = useRef(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchDiscountProducts(12),
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const targetDate = new Date("2026-10-16T00:00:00");

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

      {showAll ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full my-10 text-[16px] text-base/7">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
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
          {data.slice(0, 8).map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="text-center mt-6">
        <button
          className="
        text-center bg-primary text-white  hover:bg-[#DB3333] cursor-pointer transition-colors duration-300 py-[16px] px-[48px] rounded"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Hide Products" : "View All Products"}
        </button>
      </div>

      <hr className="my-10 border-gray-200" />
    </div>
  );
}
