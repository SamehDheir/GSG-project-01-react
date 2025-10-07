import PlayStaution from "../assets/products/playstaution.png";
import Women from "../assets/products/women.jpg";
import Speakers from "../assets/products/speakers.png";
import Perfume from "../assets/products/perfume.png";

export default function Featured() {
  return (
    <div className="px-5 sm:px-20 my-15">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block w-[20px] h-[40px] rounded bg-primary"></span>
        <h5 className="text-primary text-sm font-bold text-[16px]">Featured</h5>
      </div>

      <h2 className="font-semibold md:text-[32px] text-[28px] mb-5">
        New Arrival
      </h2>

      <div className="flex flex-col lg:flex-row flex-wrap gap-7 w-full">
        <div className="flex-1 min-w-[300px] h-[250px] sm:h-[280px] md:h-[300px] lg:h-[430px] relative bg-black rounded overflow-hidden group">
          <img
            src={PlayStaution}
            alt=""
            className="w-full h-full object-contant rounded transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute bottom-3 left-5 text-white">
            <h4 className="text-lg font-bold">PlayStation 5</h4>
            <p className="w-[80%]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="border-0 underline pb-1">Shop Now</button>
          </div>
        </div>

        <div className="flex-1 min-w-[300px] flex flex-col gap-7">
          <div className="h-[250px] sm:h-[280px] md:h-[300px] lg:h-[200px] relative bg-black rounded overflow-hidden group">
            <img
              src={Women}
              alt=""
              className="w-full h-full object-right rounded transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-3 left-5 text-white">
              <h4 className="text-lg font-bold">Women’s Collections</h4>
              <p className="w-[80%]">
                Featured woman collections that give you another vibe.
              </p>
              <button className="border-0 underline pb-1">Shop Now</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-7">
            <div className="flex-1 h-[250px] sm:h-[280px] md:h-[300px] lg:h-[200px] relative bg-black rounded overflow-hidden group">
              <img
                src={Speakers}
                alt=""
                className="w-full h-full object-contant rounded transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute bottom-3 left-5 text-white">
                <h4 className="text-lg font-bold">Speakers</h4>
                <p className="w-[80%]">Amazon wireless speakers</p>
                <button className="border-0 underline pb-1">Shop Now</button>
              </div>
            </div>

            <div className="flex-1 h-[250px] sm:h-[280px] md:h-[300px] lg:h-[200px] relative bg-black rounded overflow-hidden group">
              <img
                src={Perfume}
                alt=""
                className="w-full h-full object-contant rounded transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute bottom-3 left-5 text-white">
                <h4 className="text-lg font-bold">Perfume</h4>
                <p className="w-[80%]">GUCCI INTENSE OUD EDP</p>
                <button className="border-0 underline pb-1">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-20 text-center">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 mb-4 bg-black text-white rounded-full p-2 border-4 border-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
          <h2 className="font-bold text-lg">FREE AND FAST DELIVERY</h2>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>

        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 mb-4 bg-black text-white rounded-full p-2 border-4 border-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
            />
          </svg>
          <h2 className="font-bold text-lg">CUSTOMER SERVICE</h2>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>

        <div className="flex flex-col items-center sm:col-span-full sm:justify-self-center lg:col-span-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 mb-4 bg-black text-white rounded-full p-2 border-4 border-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
          <h2 className="font-bold text-lg">SECURE PAYMENT</h2>
          <p className="text-sm">100% secure payment system</p>
        </div>
      </div>
    </div>
  );
}
