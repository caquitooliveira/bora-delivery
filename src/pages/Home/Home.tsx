import { useState } from "react";



import "./Home.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { restaurants } from "../../data/restaurants";
import { categories } from "../../data/categories";

interface HomeProps {
  searchTerm: string;
}

function Home({ searchTerm }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCategory =
      selectedCategory === "Todos" ||
      restaurant.category === selectedCategory;

    const matchesSearch =
      restaurant.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      restaurant.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="home">

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-container">

          <div className="home-hero-content">

            <button className="home-hero-button"
            onClick={() => {
              document
              .getElementById("restaurantes")
              ?.scrollIntoView({ behavior: "smooth"});
            }}
            >
              Encontrar restaurantes
            </button>
          </div>
          </div>
      </section>

      {/* CATEGORIAS */}

      <section className="home-categories">
        <div className="home-categories-container">

          <div className="home-categories-header">
            <h2>Explore por categorias</h2>

            <p>
              Encontre o que você está com vontade de comer
            </p>
          </div>

          <div className="home-categories-list">

            <button
              className={`category-card ${
                selectedCategory === "Todos"
                  ? "category-card-active"
                  : ""
              }`}
              onClick={() => setSelectedCategory("Todos")}
            >
              <span className="category-card-icon">
                🍽️
              </span>

              <strong>Todos</strong>
            </button>

            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                icon={category.icon}
                name={category.name}
                onClick={() =>
                  setSelectedCategory(category.name)
                }
                active={
                  selectedCategory === category.name
                }
              />
            ))}

          </div>

        </div>
      </section>

      {/* RESTAURANTES */}

      <section id="restaurantes" className="home-restaurants">
        <div className="home-restaurants-container">

          <div className="home-restaurants-header">
            <h2>Restaurantes perto de você</h2>

            <p>
              Encontre seu restaurante favorito
            </p>
          </div>

          <div className="home-restaurants-list">

            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.name}
                  name={restaurant.name}
                  category={restaurant.category}
                  rating={restaurant.rating}
                  deliveryTime={restaurant.deliveryTime}
                  deliveryFee={restaurant.deliveryFee}
                  image={restaurant.image}
                />
              ))
            ) : (
              <div className="home-empty-state">

                <span className="home-empty-icon">
                  😕
                </span>

                <h3>
                  Nenhum restaurante encontrado
                </h3>

                <p>
                  Não encontramos restaurantes para sua busca.
                  <br />
                  Tente outra categoria ou pesquise outro nome.
                </p>

              </div>
            )}

          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;

