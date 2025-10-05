import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-4 py-4 border border-gray-500 md:px-10">
      <div className="grid grid-cols-2 md:grid-cols-[0.5fr_2fr_1fr] items-center gap-4">
        <h1 className="text-[30px] font-bold">
          <a href="#">Exclusive</a>
        </h1>

        <ul className="hidden sm:flex justify-center space-x-6 text-lg">
          <li>
            <a href="#" className="underline hover:font-bold text-[13px] lg:text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold text-[13px] lg:text-lg">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold text-[13px] lg:text-lg">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold text-[13px] lg:text-lg">
              Sign Up
            </a>
          </li>
        </ul>

        <div className="flex justify-end items-center space-x-3">
          <div className="hidden sm:block relative w-48">
            <input
              type="search"
              className="border border-gray-400 bg-gray-100 rounded w-full pr-10 pl-2 py-1 focus:outline-primary"
              placeholder="What are you looking for?"
            />
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex items-center space-x-3">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-black hover:stroke-primary transition-colors duration-300 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-black hover:stroke-primary transition-colors duration-300 cursor-pointer"
            >
              <path
                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <button
            className="sm:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-black hover:stroke-primary transition-colors duration-300 cursor-pointer"
            >
              <path
                d="M4 6L20 6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12L20 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18L20 18"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="flex flex-col space-y-2 mt-3 sm:hidden text-lg">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
