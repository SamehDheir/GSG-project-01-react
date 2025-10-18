import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import { clearCart } from "../../store/cartSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const CheckOut = () => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to proceed with checkout");
      navigate("/login", { replace: true });
    }
    setCheckingAuth(false);
  }, [navigate]);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    dispatch(clearCart());
    toast.success("Order placed successfully!");
  };
  if (checkingAuth) {
    return <Loading />;
  }
  return (
    <>
      <Navbar heartIcon={true} cartIcon={true} profileIcon={true} />

      <div className="px-4 sm:px-10 lg:px-20 my-10 max-w-[1440px] mx-auto">
        <h4 className="text-gray-500 text-sm mb-4">
          Account / My Account / Product / View Cart /{" "}
          <span className="text-gray-800 font-medium">CheckOut</span>
        </h4>

        <h2 className="my-8 text-2xl sm:text-3xl md:text-4xl font-semibold">
          Billing Details
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <form method="post" className="space-y-6">
            {[
              { id: "firstName", label: "First Name", type: "text" },
              { id: "lastName", label: "Last Name", type: "text" },
              { id: "companyName", label: "Company Name", type: "text" },
              { id: "streetAddress", label: "Street Address", type: "text" },
              {
                id: "apartment",
                label: "Apartment, floor, etc. (optional)",
                type: "text",
              },
              { id: "city", label: "Town/City", type: "text" },
              { id: "phone", label: "Phone Number", type: "text" },
              { id: "email", label: "Email Address", type: "email" },
            ].map((field) => (
              <div key={field.id} className="flex flex-col">
                <label htmlFor={field.id} className="text-gray-500 mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.id}
                  id={field.id}
                  className="bg-gray-200 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-primary w-full"
                />
              </div>
            ))}

            <div className="flex items-center gap-2">
              <label className="relative flex items-center cursor-pointer">
                <input type="checkbox" className="" />

                <span className="ml-2 text-gray-700 select-none">
                  Save this information for faster check-out next time
                </span>
              </label>
            </div>
          </form>

          <div className="space-y-6">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between items-center text-gray-700"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.product.thumbnail || item.product.images?.[0]}
                      alt={item.product.title}
                      className="w-12 h-12 object-cover"
                    />
                    <h5>
                      {item.product.title}
                      <span className="font-bold"> X {item.quantity}</span>
                    </h5>
                  </div>
                  <h5>${(item.product.price * item.quantity).toFixed(2)}</h5>
                </div>
              ))
            )}

            <div className="flex justify-between text-gray-700">
              <h5>Subtotal:</h5>
              <h5>${totalPrice.toFixed(2)}</h5>
            </div>
            <hr />
            <div className="flex justify-between text-gray-700">
              <h5>Shipping:</h5>
              <h5>Free</h5>
            </div>
            <hr />
            <div className="flex justify-between font-medium text-gray-800">
              <h5>Total:</h5>
              <h5 className="font-bold">${totalPrice.toFixed(2)}</h5>
            </div>

            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <input type="radio" id="bank" name="payment" />
                <label htmlFor="bank">Bank</label>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" id="cod" name="payment" />
                <label htmlFor="cod">Cash on delivery</label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 border border-gray-400 rounded p-3 focus:outline-none focus:border-primary"
              />
              <button className="cursor-pointer bg-primary text-white px-6 py-3 rounded hover:bg-[#DB3333] transition">
                Apply Coupon
              </button>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="cursor-pointer w-full md:w-1/3 bg-primary text-white py-3 rounded hover:bg-[#DB3333] transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
