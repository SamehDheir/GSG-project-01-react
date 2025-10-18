import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchDiscountProducts } from "../api/product";
import Loading from "./Loading";
import Error from "./Error";
import { ProductCard } from "./ProductCard";

export default function OfferMonth() {
  const [showAll, setShowAll] = useState(false);
  const swiperRef = useRef(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", "monthly"],
    queryFn: () => fetchDiscountProducts(101),
  });

  if (isLoading)
    return <Loading variant="offer" count={4} countMobile={2} countIpad={3} />;

  if (isError) return <Error />;

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
        <button
          className="bg-primary text-white hover:bg-[#DB3333] transition-colors duration-300 text-[13px] sm:text-[16px] px-4 sm:px-7 py-2 sm:py-3 rounded"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Hide" : "View All"}
        </button>
      </div>

      {showAll ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full my-10 text-[14px] text-base/7">
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
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
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
    </div>
  );
}
