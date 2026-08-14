import { useNavigate } from "react-router-dom";

import "./RestaurantCard.css";

interface RestaurantCardProps {
  name: string;
  category: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
}

function RestaurantCard({
  name,
  category,
  rating,
  deliveryTime,
  deliveryFee,
  image,
}: RestaurantCardProps) {
  const navigate = useNavigate();

  const restaurantId = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

  return (
    <article
      className="restaurant-card"
      onClick={() => navigate(`/restaurante/${restaurantId}`)}
      role="button"
      tabIndex={0}
    >
      <div className="restaurant-card-image">
        <img src={image} alt={name} />
      </div>

      <div className="restaurant-card-content">
        <h3>{name}</h3>

        <p className="restaurant-card-category">{category}</p>

        <div className="restaurant-card-info">
          <span>⭐ {rating}</span>
          <span>•</span>
          <span>{deliveryTime}</span>
        </div>

        <p className="restaurant-card-delivery">
          R$ {deliveryFee.toFixed(2).replace(".", ",")} entrega
        </p>
      </div>
    </article>
  );
}

export default RestaurantCard;
