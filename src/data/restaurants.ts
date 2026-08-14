export interface Restaurant {
  name: string;
  category: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
}

export const restaurants: Restaurant[] = [
  // 🍔 Hambúrguer
  {
    name: "Burger House",
    category: "Hambúrguer",
    rating: 4.8,
    deliveryTime: "30-40 min",
    deliveryFee: 5,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    name: "Mega Burger",
    category: "Hambúrguer",
    rating: 4.7,
    deliveryTime: "25-35 min",
    deliveryFee: 4,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    name: "Burger do Zé",
    category: "Hambúrguer",
    rating: 4.6,
    deliveryTime: "30-40 min",
    deliveryFee: 5,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },

  {
    name: "Big Burger",
    category: "Hambúrguer",
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFee: 3,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
  },

  // 🍕 Pizza
  {
    name: "Pizza Prime",
    category: "Pizza",
    rating: 4.7,
    deliveryTime: "25-35 min",
    deliveryFee: 4,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
  },
  {
    name: "Pizza House",
    category: "Pizza",
    rating: 4.8,
    deliveryTime: "30-40 min",
    deliveryFee: 5,
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498",
  },
  {
    name: "Pizzaria Itália",
    category: "Pizza",
    rating: 4.9,
    deliveryTime: "25-35 min",
    deliveryFee: 4,
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498",
  },
  {
    name: "Pizza Express",
    category: "Pizza",
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: 3,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },

  // 🍣 Japonês
  {
    name: "Sushi House",
    category: "Japonês",
    rating: 4.9,
    deliveryTime: "35-45 min",
    deliveryFee: 6,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
  },
  {
    name: "Sushi Nipo",
    category: "Japonês",
    rating: 4.8,
    deliveryTime: "30-40 min",
    deliveryFee: 5,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
  {
    name: "Tokyo Sushi",
    category: "Japonês",
    rating: 4.7,
    deliveryTime: "35-45 min",
    deliveryFee: 6,
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252",
  },
  {
    name: "Nori Sushi",
    category: "Japonês",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: 5,
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a",
  },

  // 🍗 Frango
  {
    name: "Chicken Point",
    category: "Frango",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: 4,
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
  },
  {
    name: "Frango na Brasa",
    category: "Frango",
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: 5,
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6",
  },
  {
    name: "Chicken Grill",
    category: "Frango",
    rating: 4.9,
    deliveryTime: "25-35 min",
    deliveryFee: 4,
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435",
  },
  {
    name: "Frango & Cia",
    category: "Frango",
    rating: 4.6,
    deliveryTime: "30-40 min",
    deliveryFee: 5,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
  },

  // 🥗 Salada
  {
    name: "Salada Fresh",
    category: "Salada",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: 4,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
  {
    name: "Green Food",
    category: "Salada",
    rating: 4.8,
    deliveryTime: "20-30 min",
    deliveryFee: 3,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
  },
  {
    name: "Healthy Kitchen",
    category: "Salada",
    rating: 4.9,
    deliveryTime: "25-35 min",
    deliveryFee: 4,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
  {
    name: "Natural Fit",
    category: "Salada",
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: 3,
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564",
  },

  // 🍰 Sobremesas
  {
    name: "Sweet Dessert",
    category: "Sobremesas",
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFee: 3,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
  },
  {
    name: "Doce Mania",
    category: "Sobremesas",
    rating: 4.8,
    deliveryTime: "15-25 min",
    deliveryFee: 3,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
  },
  {
    name: "Confeitaria Bella",
    category: "Sobremesas",
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFee: 4,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    name: "Choco House",
    category: "Sobremesas",
    rating: 4.7,
    deliveryTime: "15-25 min",
    deliveryFee: 3,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
  },
];
