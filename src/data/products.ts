
export interface Product {
  id: number;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [

  // 🍔 Burger House

  {
    id: 1,
    restaurantId: "burger-house",
    name: "X-Burger",
    description: "Hambúrguer artesanal, queijo, alface e tomate.",
    price: 24.90,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },

  {
    id: 2,
    restaurantId: "burger-house",
    name: "Bacon Burger",
    description: "Hambúrguer artesanal com queijo e bacon crocante.",
    price: 28.90,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },

  {
    id: 3,
    restaurantId: "burger-house",
    name: "Batata Frita",
    description: "Porção de batata frita crocante.",
    price: 12.90,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
  },

  {
    id: 4,
    restaurantId: "burger-house",
    name: "Refrigerante",
    description: "Refrigerante gelado 350ml.",
    price: 6.90,
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e",
  },


  // 🍕 Pizza Prime

  {
    id: 5,
    restaurantId: "pizza-prime",
    name: "Pizza Margherita",
    description: "Molho de tomate, queijo e manjericão.",
    price: 39.90    ,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
  },

  {
    id: 6,
    restaurantId: "pizza-prime",
    name: "Pizza Calabresa",
    description: "Calabresa, queijo, cebola e molho de tomate.",
    price: 44.90,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },

  {
    id: 7,
    restaurantId: "pizza-prime",
    name: "Pizza Frango com Catupiry",
    description: "Frango desfiado, queijo e catupiry.",
    price: 46.90,
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498",
  },

  {
    id: 8,
    restaurantId: "pizza-prime",
    name: "Pizza Quatro Queijos",
    description: "Mussarela, provolone, parmesão e gorgonzola.",
    price: 49.90,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
  },


  // 🍣 Sushi House

  {
    id: 9,
    restaurantId: "sushi-house",
    name: "Combo Sushi",
    description: "Seleção especial de sushi e sashimi.",
    price: 49.90,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
  },

  {
    id: 10,
    restaurantId: "sushi-house",
    name: "Temaki Salmão",
    description: "Temaki de salmão fresco com cream cheese.",
    price: 24.90,
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },

  {
    id: 11,
    restaurantId: "sushi-house",
    name: "Hot Roll",
    description: "Hot roll crocante com salmão e cream cheese.",
    price: 29.90,
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252",
  },

  {
    id: 12,
    restaurantId: "sushi-house",
    name: "Sashimi Salmão",
    description: "Fatias de salmão fresco.",
    price: 34.90,
    image:
      "https://images.unsplash.com/photo-1583623025817-d180a2221d0a",
  },


  // 🍗 Chicken Point

  {
    id: 13,
    restaurantId: "chicken-point",
    name: "Frango Crocante",
    description: "Frango empanado crocante e temperado.",
    price: 27.90,
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
  },

  {
    id: 14,
    restaurantId: "chicken-point",
    name: "Combo Chicken",
    description: "Frango crocante, batata e refrigerante.",
    price: 34.90,
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6",
  },

  {
    id: 15,
    restaurantId: "chicken-point",
    name: "Asinhas de Frango",
    description: "Asinhas de frango temperadas e crocantes.",
    price: 29.90,
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435",
  },

  {
    id: 16,
    restaurantId: "chicken-point",
    name: "Batata com Cheddar",
    description: "Batata frita com cheddar cremoso.",
    price: 18.9,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
  },


  // 🥗 Salada Fresh

  {
    id: 17,
    restaurantId: "salada-fresh",
    name: "Salada Caesar",
    description: "Alface, frango grelhado, parmesão e molho Caesar.",
    price: 25.90,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },

  {
    id: 18,
    restaurantId: "salada-fresh",
    name: "Salada Tropical",
    description: "Folhas verdes, frutas e molho especial.",
    price: 23.90,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999",
  },

  {
    id: 19,
    restaurantId: "salada-fresh",
    name: "Bowl Fit",
    description: "Frango, arroz integral, legumes e folhas.",
    price: 29.90,
    image:
      "https://images.unsplash.com/photo-1543362906-acfc16c67564",
  },

  {
    id: 20,
    restaurantId: "salada-fresh",
    name: "Bowl Vegetariano",
    description: "Legumes frescos, grãos e folhas verdes.",
    price: 27.90,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },


  // 🍰 Sweet Dessert

  {
    id: 21,
    restaurantId: "sweet-dessert",
    name: "Brownie",
    description: "Brownie de chocolate com calda especial.",
    price: 14.90,
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307",
  },

  {
    id: 22,
    restaurantId: "sweet-dessert",
    name: "Cheesecake",
    description: "Cheesecake cremoso com cobertura de frutas.",
    price: 16.90,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
  },

  {
    id: 23,
    restaurantId: "sweet-dessert",
    name: "Bolo de Chocolate",
    description: "Bolo de chocolate com cobertura cremosa.",
    price: 15.90,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },

  {
    id: 24,
    restaurantId: "sweet-dessert",
    name: "Brigadeiro",
    description: "Brigadeiro artesanal de chocolate.",
    price: 9.90,
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307",
  },

];
