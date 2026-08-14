import { useCart } from "../../context/CartContext";

import type { Product } from "../../data/products";

import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const {
    cart,
    addToCart,
    replaceCart,
    removeFromCart,
  } = useCart();

  const cartItem = cart.find(
    (item) => item.id === product.id
  );

  const quantity = cartItem?.quantity ?? 0;

  function handleAddToCart() {
    if (cart.length === 0) {
      addToCart(product);
      return;
    }

    const differentRestaurant = cart.some(
      (item) => item.restaurantId !== product.restaurantId
    );

    if (!differentRestaurant) {
      addToCart(product);
      return;
    }

    const confirmChange = window.confirm(
      "Seu carrinho possui produtos de outro restaurante. Deseja limpar o carrinho e adicionar este produto?"
    );

    if (confirmChange) {
      replaceCart(product);
    }
  }

  return (
    <article className="product-card">
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-card-content">
        <h3>{product.name}</h3>

        <p className="product-card-description">
          {product.description}
        </p>

        <strong className="product-card-price">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </strong>

        <button
          className="product-card-button"
          onClick={handleAddToCart}
        >
          Adicionar
        </button>
        <br />
          <div className="product-card-quantity">
            <button
            type="button"
            onClick={() => removeFromCart(product.id)}
            aria-label="{`Diminuir quantidade de ${product.name}`}"
            >
              -
              </button>

              <strong>{quantity}</strong>

              <button
              type="button"
              onClick={() => addToCart(product)}
              aria-label="{`Aumentar quandtidade de ${product.name}`}"
              >
                +
              </button>
      </div>
      </div>
    </article>
  );
}


export default ProductCard;

