import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import "./CartModal.css";

interface CartModalProps {
  onClose: () => void;
}

function CartModal({ onClose }: CartModalProps) {
  const navigate = useNavigate();
  const {
    cart,
    cartTotal,
    cartQuantity,
    addToCart,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <div
      className="cart-modal-overlay"
      onClick={onClose}
    >
      <div
        className="cart-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="cart-modal-header">
          <div>
            <h2>Seu carrinho 🛒</h2>

            <span>
              {cartQuantity}{" "}
              {cartQuantity === 1 ? "item" : "itens"}
            </span>
          </div>

          <button
            className="cart-modal-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-modal-empty">
            <span>🛒</span>

            <h3>Seu carrinho está vazio</h3>

            <p>
              Adicione produtos para começar seu pedido.
            </p>
          </div>
        ) : (
          <>
            <div className="cart-modal-items">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="cart-modal-item"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-modal-item-info">
                    <h3>{item.name}</h3>

                    <span>
                      R$ {item.price.toFixed(2).replace(".", ",")}
                    </span>

                    <div className="cart-modal-quantity">
                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                      >
                        −
                      </button>

                      <strong>{item.quantity}</strong>

                      <button
                        onClick={() =>
                          addToCart(item)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <strong className="cart-modal-item-total">
                    R${" "}
                    {(item.price * item.quantity)
                      .toFixed(2)
                      .replace(".", ",")}
                  </strong>
                </article>
              ))}
            </div>

            <div className="cart-modal-footer">
              <div className="cart-modal-total">
                <span>Total</span>

                <strong>
                  R$ {cartTotal.toFixed(2).replace(".", ",")}
                </strong>
              </div>

              <button className="cart-modal-checkout"
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
              >
                Finalizar pedido
              </button>

              <button
                className="cart-modal-clear"
                onClick={clearCart}
              >
                Limpar carrinho
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;

