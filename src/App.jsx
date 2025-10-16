import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard/dashboard";
import ProductDetails from "./pages/Product/ProductDetails";
import Cart from "./pages/Cart/Cart";
import { Toaster } from "react-hot-toast";
import CheckOut from "./pages/CheckOut/CheckOut";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <div className="max-w-full mx-auto">
      <BrowserRouter>
        <Toaster position="top-right" reverseOrder={false} />
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
