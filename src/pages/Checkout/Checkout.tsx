import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext";

import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const { cart, cartTotal, cartQuantity } = useCart();

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!address || !payment) {
      alert("Preencha o endereço e a forma de pagamento.");
      return;
    }

    alert("Pedido realizado com sucesso! 🚀");

    navigate("/");
  }

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <div className="checkout-empty">
          <span>🛒</span>

          <h1>Seu carrinho está vazio</h1>

          <p>Adicione produtos antes de finalizar seu pedido.</p>

          <Link to="/" className="checkout-back-button">
            Voltar para restaurantes
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-main">
          <Link to="/" className="checkout-back">
            ← Voltar
          </Link>

          <div className="checkout-header">
            <h1>Finalizar pedido</h1>

            <p>Confira seus dados antes de confirmar.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <section className="checkout-section">
              <h2>📍 Endereço de entrega</h2>

              <label htmlFor="address">Endereço completo</label>

              <textarea
                id="address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Ex: Rua das Flores, 123 - Centro"
                rows={4}
              />
            </section>

            <section className="checkout-section">
              <h2>💳 Forma de pagamento</h2>

              <div className="checkout-payment-options">
                <label
                  className={`checkout-payment-option ${
                    payment === "pix" ? "checkout-payment-active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="pix"
                    checked={payment === "pix"}
                    onChange={(event) => setPayment(event.target.value)}
                  />

                  <span>💠</span>

                  <div>
                    <strong>Pix</strong>
                    <small>Pagamento instantâneo</small>
                  </div>
                </label>

                <label
                  className={`checkout-payment-option ${
                    payment === "card" ? "checkout-payment-active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={payment === "card"}
                    onChange={(event) => setPayment(event.target.value)}
                  />

                  <span>💳</span>

                  <div>
                    <strong>Cartão</strong>
                    <small>Crédito ou débito</small>
                  </div>
                </label>

                <label
                  className={`checkout-payment-option ${
                    payment === "cash" ? "checkout-payment-active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={payment === "cash"}
                    onChange={(event) => setPayment(event.target.value)}
                  />

                  <span>💵</span>

                  <div>
                    <strong>Dinheiro</strong>
                    <small>Pagamento na entrega</small>
                  </div>
                </label>
              </div>
            </section>

            <button type="submit" className="checkout-submit">
              Confirmar pedido
            </button>
          </form>
        </div>

        <aside className="checkout-summary">
          <h2>Resumo do pedido</h2>

          <div className="checkout-summary-products">
            {cart.map((item) => (
              <div key={item.id} className="checkout-summary-product">
                <div>
                  <strong>{item.name}</strong>

                  <span>{item.quantity}x</span>
                </div>

                <strong>
                  R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                </strong>
              </div>
            ))}
          </div>

          <hr />

          <div className="checkout-summary-info">
            <span>Itens</span>
            <strong>{cartQuantity}</strong>
          </div>

          <div className="checkout-summary-info">
            <span>Subtotal</span>

            <strong>R$ {cartTotal.toFixed(2).replace(".", ",")}</strong>
          </div>

          <div className="checkout-summary-info">
            <span>Entrega</span>
            <span>R$ 5,00</span>
          </div>

          <hr />

          <div className="checkout-summary-total">
            <span>Total</span>

            <strong>R$ {(cartTotal + 5).toFixed(2).replace(".", ",")}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
