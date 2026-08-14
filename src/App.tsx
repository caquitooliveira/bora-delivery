import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider>
    <BrowserRouter>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />

        <Route path="/restaurante/:id" element={<Restaurant />} />

        <Route path="/carrinho" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />}
        />
 
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
