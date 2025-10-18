import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currentUser } from "../api/auth";

export default function Navbar({
  profileIcon = true,
  heartIcon = true,
  cartIcon = true,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [sticky, setSticky] = useState(false);
  const cartCount = useSelector((state) => state.cart.cartCount);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      currentUser(token)
        .then((data) => setUser(data))
        .catch((err) => console.log(err));
    }

    const handleScroll = () => {
      if (window.scrollY > 40) setSticky(true); 
      else setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`px-5 py-4 sm:px-10 lg:px-20 mb-2 bg-white z-50 transition-all duration-300 ${
          sticky
            ? "fixed top-0 left-0 w-full shadow-md"
            : "sticky top-[40px] border-b border-gray-300"
        }`}
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-[0.5fr_2fr_1fr] items-center gap-4">
          <h1 className="lg:text-[30px] sm:text-2xl font-bold hover:text-primary transition-colors duration-300">
            <Link to="/">Exclusive</Link>
          </h1>

          <ul className="hidden sm:flex justify-center space-x-6 text-lg">
            {["Home", "Contact", "About", "Login"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-700 font-medium text-sm lg:text-lg hover:text-primary hover:font-bold transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-end items-center space-x-4">
            <div className="hidden sm:block relative md:w-36 lg:w-64">
              <input
                type="search"
                className="border border-gray-300 bg-gray-100 rounded-full w-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="Search for products..."
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
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

            {/* Icons */}
            <div className="flex items-center space-x-3">
              {heartIcon && (
                <button className="relative p-1 hover:text-primary cursor-pointer transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21C12 21 6 15 4 10.5C2 6 6 2 12 6C18 2 22 6 20 10.5C18 15 12 21 12 21Z"
                    />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              )}

              {cartIcon && (
                <Link to="/cart">
                  <button className="relative p-1 hover:text-primary transition-colors duration-300 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3H5L6 14H19L20 7H6"
                      />
                      <circle cx="7.5" cy="20.5" r="1.5" />
                      <circle cx="17.5" cy="20.5" r="1.5" />
                    </svg>
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </Link>
              )}

              {profileIcon &&
                (user && user.image ? (
                  <Link to="/profile">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover hover:ring-2 hover:ring-primary transition"
                    />
                  </Link>
                ) : (
                  <Link to="/profile">
                    <button className="relative p-1 hover:text-primary cursor-pointer transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                        />
                      </svg>
                    </button>
                  </Link>
                ))}
            </div>

            {/* Mobile menu toggle */}
            <button
              className="sm:hidden p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-black hover:stroke-primary transition-colors duration-300"
              >
                <path
                  d="M4 6L20 6M4 12L20 12M4 18L20 18"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="flex flex-col space-y-2 mt-3 sm:hidden text-lg bg-white p-4 rounded shadow-md">
            {["Home", "Contact", "About", "Login"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block py-2 px-4 hover:bg-gray-100 rounded transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}
