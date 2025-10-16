import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <>
      <Navbar heartIcon={true} cartIcon={true} profileIcon={true} />

      <div className="px-4 sm:px-10 md:px-20 my-10">
        <h4 className="text-gray-500 text-sm mb-4">
          Home / <span className="text-gray-800 font-medium">404 Error</span>
        </h4>
        <div className="flex flex-col items-center justify-center mt-20 bg-white text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4">
            404 Not Found
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Your visited page not found. You may go to home page.
          </p>
          <Link to={"/"}>
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-red-500 duration-300 cursor-pointer">
              Back to home page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
