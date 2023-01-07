import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import NotFound from "./pages/NotFound";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App min-h-screen bg-gray-50 text-gray-700">
      <Navbar />
      <ToastContainer className="w-2/3 md:w-[230px] text-sm md:text-base " />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
