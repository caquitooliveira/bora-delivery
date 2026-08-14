import "./Header.css";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CartModal from "../CartModal/CartModal";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  const { cartQuantity } = useCart();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          Bora Delivery
        </a>

        <div className="header-location">
          📍
          <div>
            <span>Entregar em</span> <strong>Seu endereço</strong>
          </div>
        </div>

        <div className="header-search">
          <input
            type="text"
            placeholder="Buscar restaurantes ou pratos"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <button 
        className="header-cart"
        onClick={() => setIsCartOpen(true)}
        >
          🛒 
          <span>{cartQuantity}</span>
        </button>
      </div>
      {isCartOpen && (
  <CartModal
    onClose={() => setIsCartOpen(false)}
  />
)}
    </header>

    
  );
}
export default Header;
