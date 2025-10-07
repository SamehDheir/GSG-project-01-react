import IPhone from "../assets/products/iphone.jpg";
import MacBookAir from "../assets/products/macbookair.jpg";
import Jacket from "../assets/products/jacket.png";
import TV from "../assets/products/tv.png";
import Chair from "../assets/products/chair.png";
import { useState, useEffect } from "react";

export default function SliderImage() {
  const products = [
    {
      id: 1,
      name: "MacBook Air",
      desc: "Up to 7% off Voucher",
      img: MacBookAir,
    },
    {
      id: 2,
      name: "Jacket",
      desc: "Up to 20% off Voucher",
      img: Jacket,
    },
    {
      id: 3,
      name: "iPhone",
      desc: "Up to 10% off Voucher",
      img: IPhone,
    },
    {
      id: 4,
      name: "Chair",
      desc: "Up to 50% off Voucher",
      img: Chair,
    },
    {
      id: 5,
      name: "TV",
      desc: "Up to 5% off Voucher",
      img: TV,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="relative w-full h-[200px] sm:h-[350px] overflow-hidden rounded-2xl bg-black  text-white">
      {products.map((product, idx) => (
        <div
          key={product.id}
          className={`absolute inset-0 flex items-center justify-evenly px-4 sm:px-10 transition-opacity duration-1000 ease-in-out ${
            activeIndex === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col  space-y-4 gap-3 max-w-[50%]">
            <h2 className="text-lg lg:text-2xl font-bold">{product.name}</h2>
            <p className="text-md lg:text-5xl w-65 font-semibold text-gray-300">
              {product.desc}
            </p>
            <button className="underline w-20">Shop Now</button>
          </div>

          <div className="w-[45%] h-full flex justify-end items-center">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[90%] rounded-lg transition-transform duration-700 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {products.map((_, idx) => (
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
