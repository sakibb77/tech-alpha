import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App min-h-screen bg-gray-50 text-gray-700">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
