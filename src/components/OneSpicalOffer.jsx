import Countdown from "react-countdown";
import BomBox from "../assets/products/Frame.png";
export default function OneSpicalOffer() {
  const targetDate = new Date("2025-10-18T00:00:00");

  return (
    <div className="flex justify-around gap-0 sm:gap-10 flex-wrap-reverse items-center bg-black text-white pb-7 mx-5 p-5 sm:px-20 lg:mx-20 rounded">
      <div className=" flex-1 space-y-8">
        <h4 className="text-secondary font-bold">Categories</h4>
        <h2 className="font-bold text-lg sm:text-2xl lg:text-[40px] w-90">
          Enhance Your Music Experience
        </h2>
        <div className="w-50">
          <Countdown
            date={targetDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="flex gap-4 mt-4">
                {[
                  { label: "Days", value: days },
                  { label: "Hours", value: hours },
                  { label: "Minutes", value: minutes },
                  { label: "Seconds", value: seconds },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative flex items-center justify-center bg-white p-3 text-black rounded shadow-md"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <span className="font-bold text-lg leading-none">
                        {String(item.value).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] leading-none mt-1">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          />
        </div>
        <button className="bg-secondary hover:bg-[#00FF44] duration-300 cursor-pointer py-[16px] px-[48px] rounded text-white">
          Buy Now
        </button>
      </div>
      <div className="flex-1 hover:scale-110 transition-transform duration-300 cursor-pointer">
        <img
          src={BomBox}
          alt="Bom Box"
          className=" w-full md:w-80 lg:w-[568px]"
        />
      </div>
    </div>
  );
}
