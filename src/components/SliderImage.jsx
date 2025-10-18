import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/product";

export default function SliderImage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const slideCount = data?.slice(0, 4).length ?? 0;

  useEffect(() => {
    if (!slideCount) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideCount]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || !slideCount) return;

    let startX = 0;
    let endX = 0;

    const onTouchStart = (e) => (startX = e.touches[0].clientX);
    const onTouchEnd = (e) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) setActiveIndex((p) => (p + 1) % slideCount);
      if (endX - startX > 50)
        setActiveIndex((p) => (p - 1 + slideCount) % slideCount);
    };

    slider.addEventListener("touchstart", onTouchStart);
    slider.addEventListener("touchend", onTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", onTouchStart);
      slider.removeEventListener("touchend", onTouchEnd);
    };
  }, [slideCount]);

  if (isLoading)
    return (
      <div className="relative w-full h-[200px] sm:h-[350px] overflow-hidden rounded-2xl bg-gray-800 animate-pulse">
        <div className="absolute inset-0 flex justify-evenly items-center px-10 text-gray-600">
          <div className="w-1/2 space-y-4">
            <div className="h-6 bg-gray-700 rounded w-1/2"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/3"></div>
          </div>
          <div className="w-1/2 h-[90%] bg-gray-700 rounded"></div>
        </div>
      </div>
    );

  if (isError || !data?.length) return null;

  return (
    <div
      ref={sliderRef}
      className="relative w-full md:flex-1 h-[200px] md:h-[350px] overflow-hidden rounded-2xl bg-black text-white"
    >
      {data.slice(0, 4).map((product, idx) => (
        <div
          key={product.id}
          className={`absolute inset-0 flex items-center justify-evenly px-4 sm:px-10 transition-opacity duration-1000 ease-in-out ${
            activeIndex === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 gap-3 max-w-[50%]">
            <h2 className="text-lg lg:text-2xl font-bold line-clamp-2">
              {product.title}
            </h2>
            <p className="text-md lg:text-4xl font-semibold text-gray-300 line-clamp-2">
              {product.desc || product.description || ""}
            </p>
            <button className="underline w-24">Shop Now</button>
          </div>

          <div className="w-[45%] h-full flex justify-end items-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-[90%] rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 object-contain"
            />
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          setActiveIndex(
            (prev) =>
              (prev - 1 + data.slice(0, 4).length) % data.slice(0, 4).length
          )
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={() =>
          setActiveIndex((prev) => (prev + 1) % data.slice(0, 4).length)
        }
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {data.slice(0, 4).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? "bg-primary border-2 border-white scale-110"
                : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
