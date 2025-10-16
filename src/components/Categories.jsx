import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CameraIcon,
  ClockIcon,
  PhoneIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

export default function Categories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const categories = [
    { name: "Phones", icon: DevicePhoneMobileIcon },
    { name: "Computers", icon: ComputerDesktopIcon },
    { name: "SmartWatch", icon: ClockIcon },
    { name: "Camera", icon: CameraIcon },
    { name: "Headphones", icon: PhoneIcon },
    { name: "Gaming", icon: PuzzlePieceIcon },
  ];

  return (
    <div className="px-5 sm:px-20 my-15">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block w-[20px] h-[40px] rounded bg-primary"></span>
        <h5 className="text-primary text-sm font-bold text-[16px]">
          Categories
        </h5>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[25px] md:text-[32px] ">
          Browse By Category
        </h2>
        <div className="flex items-center">
          <button
            ref={prevRef}
            className="size-8 flex items-center justify-center bg-gray-100 rounded-full mr-2 hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          <button
            ref={nextRef}
            className="size-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
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

      <div className="mt-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <SwiperSlide key={idx}>
                <div
                  className="group flex flex-col items-center border p-6 cursor-pointer 
                             hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300" />
                  <h4 className="font-medium mt-2 text-[16px]">{cat.name}</h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <hr className="my-10 text-gray-200 border-1" />
    </div>
  );
}
