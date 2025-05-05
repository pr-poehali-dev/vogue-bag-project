
import { Product } from "@/components/home/FeaturedProducts";
import { Category } from "@/components/home/CategoriesSection";

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Классическая сумка Elegance",
    price: "75 000 ₽",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Мини-сумка Milano",
    price: "62 500 ₽",
    image: "https://images.unsplash.com/photo-1606522754091-a3fe8f387b05?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Клатч Paris Night",
    price: "53 900 ₽",
    image: "https://images.unsplash.com/photo-1611010344444-5f9e4d86a6e1?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    name: "Сумка-тоут Monaco",
    price: "88 700 ₽",
    image: "https://images.unsplash.com/photo-1591561954555-607968c989ab?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

export const categories: Category[] = [
  { 
    id: 1, 
    name: "КЛАССИКА", 
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3" 
  },
  { 
    id: 2, 
    name: "ТРЕНД", 
    image: "https://images.unsplash.com/photo-1585488763177-bde7d15fd3cf?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.0.3" 
  },
  { 
    id: 3, 
    name: "ВЕЧЕРНИЕ", 
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3" 
  }
];
