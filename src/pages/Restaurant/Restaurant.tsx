import { Link, useParams } from "react-router-dom";

import "./Restaurant.css";
import { restaurants } from "../../data/restaurants";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

function Restaurant() {
  const { id } = useParams();

  const restaurant = restaurants.find((restaurant) => {
    const restaurantId = restaurant.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");

    return restaurantId === id;
  });

  if (!restaurant) {
    return (
      <main className="restaurant-page">
        <h1>Restaurante não encontrado</h1>
        <Link to="/"> Voltar para a Home </Link>
      </main>
    );
  }

  const restaurantProducts = products.filter(
  (product) => product.restaurantId === id
);

  return (
    <main className="restaurant-page">
      <Link to="/" className="restaurant-back">
        ← Voltar
      </Link>

      <div className="restaurant-header">
        <div className="restaurant-header-image">
          <img src={restaurant.image} alt={restaurant.name} />
        </div>

        <div className="restaurant-header-content">
          <span className="restaurant-category">{restaurant.category}</span>

          <h1>{restaurant.name}</h1>

          <div className="restaurant-info">
            <span>⭐ {restaurant.rating}</span> <span>•</span>
            <span>{restaurant.deliveryTime}</span> <span>•</span>
            <span>
              R$ {restaurant.deliveryFee.toFixed(2).replace(".", ",")}
              entrega
            </span>
          </div>
        </div>
      </div>

      <section className="restaurant-menu">
        <div className="restaurant-menu-header">

          <h2>Cardápio</h2>

          <p> Escolha seus pratos favoritos </p>
        </div>

        <div className="restaurant-products">
          {restaurantProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Restaurant;
