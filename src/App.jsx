import { useEffect, useState } from "react";
import AppNavbar from "./components/AppNavBar";
import "./App.css";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Product from "./components/Product";
import { getProducts } from "./services/utils";
import { Routes, Route } from "react-router-dom";
import SlidingAlert from "./components/SlidingAlert";
import { useSelector } from "react-redux";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const alert = useSelector((state) => state.alert);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  });
  return (
    <>
      <AppNavbar />
      {alert && <SlidingAlert alert={alert} />}
      <Routes>
        <Route path="/product/:id" element={<Product products={products} />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/:category"
          element={<Explore products={products} loading={loading} />}
        />
      </Routes>
    </>
  );
}

export default App;
