
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

import "./Cart.css";

function Cart() {
  const {
    cart,
    cartTotal,
    cartQuantity,
    removeFromCart,
    clearCart,
    addToCart,
  } = useCart();

  return (
    <main className="cart-page">
      <Link to="/" className="cart-back">
        ← Continuar comprando
      </Link>

      <div className="cart-header">
        <h1>Seu carrinho 🛒</h1>

        <p>
          {cartQuantity} {cartQuantity === 1 ? "item" : "itens"}
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <span>🛒</span>

          <h2>Seu carrinho está vazio</h2>

          <p>
            Adicione alguns produtos para começar seu pedido.
          </p>

          <Link to="/" className="cart-empty-button">
            Ver restaurantes
          </Link>
        </div>
      ) : (
        <div className="cart-content">

          <div className="cart-items">

            {cart.map((item) => (
              <article
                key={item.id}
                className="cart-item"
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>

                  <p>
                    R$ {item.price.toFixed(2).replace(".", ",")}
                  </p>

                  <div className="cart-item-actions">
                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      −
                    </button>

                    <strong>{item.quantity}</strong>

                    <button
                    onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <strong className="cart-item-total">
                  R${" "}
                  {(item.price * item.quantity)
                    .toFixed(2)
                    .replace(".", ",")}
                </strong>
              </article>
            ))}

          </div>

          <aside className="cart-summary">

            <h2>Resumo do pedido</h2>

            <div className="cart-summary-row">
              <span>Subtotal</span>

              <strong>
                R$ {cartTotal.toFixed(2).replace(".", ",")}
              </strong>
            </div>

            <div className="cart-summary-row">
              <span>Entrega</span>

              <span>A calcular</span>
            </div>

            <hr />

            <div className="cart-summary-total">
              <span>Total</span>

              <strong>
                R$ {cartTotal.toFixed(2).replace(".", ",")}
              </strong>
            </div>

            <button className="cart-checkout-button">
              Finalizar pedido
            </button>

            <button
              className="cart-clear-button"
              onClick={clearCart}
            >
              Limpar carrinho
            </button>

          </aside>

        </div>
      )}
    </main>
  );
}

export default Cart;

