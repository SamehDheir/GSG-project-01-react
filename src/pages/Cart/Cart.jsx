import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import { removeFromCart, setCartItems } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    document.title = "Cart Page | Exclusive";
  }, []);

  const handleQuantityChange = (productId, value) => {
    const quantity = parseInt(value);
    if (quantity <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(
        setCartItems(
          items.map((it) =>
            it.product.id === productId ? { ...it, quantity } : it
          )
        )
      );
    }
  };

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleUpdateCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    dispatch(setCartItems(savedCart));
  };
  return (
    <>
      <Navbar heartIcon={true} cartIcon={true} profileIcon={true} />

      
      <div className="px-4 sm:px-10 md:px-20 my-10">
        <h4 className="text-gray-500 text-sm mb-4">
          Home / <span className="text-gray-800 font-medium">Cart</span>
        </h4>

        {items.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="hidden md:grid md:grid-cols-4 text-center text-gray-700 border-b p-4 font-semibold">
              <h5 className="text-left">Product</h5>
              <h5>Price</h5>
              <h5>Quantity</h5>
              <h5>Subtotal</h5>
            </div>

            {items.map((item) => (
              <div
                key={item.product.id}
                className="relative group flex flex-col md:grid md:grid-cols-4 items-center gap-4 text-center shadow p-3 my-3 border-b transition-all"
              >
                <div className="flex items-center justify-center md:justify-start gap-3 relative">
                  <div className="relative">
                    <img
                      src={item.product.thumbnail}
                      alt={item.product.title}
                      className="w-20 h-20 object-contain"
                    />

                    <button
                      onClick={() => {
                        dispatch(removeFromCart(item.product.id));
                        toast.success("Product removed from cart successfully");
                      }}
                      className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 cursor-pointer"
                      title="Remove item"
                    >
                      ❌
                    </button>
                  </div>

                  <h5 className="font-medium text-gray-800">
                    {item.product.title}
                  </h5>
                </div>

                <div className="flex md:block justify-between w-full md:w-auto">
                  <span className="md:hidden text-gray-500">Price:</span>
                  <h5 className="text-gray-700">${item.product.price}</h5>
                </div>

                <div className="flex md:block justify-between w-full md:w-auto">
                  <span className="md:hidden text-gray-500">Quantity:</span>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.product.id, e.target.value)
                    }
                    className="w-16 text-center border border-gray-300 rounded focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex md:block justify-between w-full md:w-auto">
                  <span className="md:hidden text-gray-500">Subtotal:</span>
                  <h5 className="text-gray-700">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </h5>
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 my-5">
              <Link to={"/"}>
                <button className="hover:bg-[#DB3333] hover:text-white cursor-pointer transition-colors duration-300 rounded border border-gray-400 py-3 px-6 w-full sm:w-auto">
                  Return To Shop
                </button>
              </Link>
              <button
                onClick={handleUpdateCart}
                className="hover:bg-[#DB3333] hover:text-white cursor-pointer transition-colors duration-300 rounded border border-gray-400 py-3 px-6 w-full sm:w-auto"
              >
                Update Cart
              </button>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-5 mt-10">
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-1/2 h-1/2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 rounded border border-gray-400 p-3 focus:outline-none focus:border-primary"
                />
                <button className="hover:bg-[#DB3333] cursor-pointer transition-colors duration-300 rounded border border-gray-400 py-3 px-9 bg-primary text-white w-full sm:w-auto">
                  Apply Coupon
                </button>
              </div>

              <div className="border border-gray-500 p-5 rounded w-full lg:w-1/3">
                <h4 className="font-semibold text-lg mb-3">Cart Total</h4>

                <div className="flex justify-between mb-2 text-gray-700">
                  <h5>Subtotal:</h5>
                  <h5>${total.toFixed(2)}</h5>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2 text-gray-700">
                  <h5>Shipping:</h5>
                  <h5>Free</h5>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-4 font-medium text-gray-800">
                  <h5>Total:</h5>
                  <h5 className="font-bold">${total.toFixed(2)}</h5>
                </div>

                <Link to={"/checkout"}>
                  <button className="hover:bg-[#DB3333] cursor-pointer transition-colors duration-300 rounded border border-gray-400 py-3 px-9 bg-primary text-white w-full">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
