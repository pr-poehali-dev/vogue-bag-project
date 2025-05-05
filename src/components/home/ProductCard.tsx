
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/components/home/FeaturedProducts";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="border-none">
      <CardContent className="p-0">
        <div className="relative group overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="outline" className="w-full border-black rounded-none">
              В КОРЗИНУ
            </Button>
          </div>
        </div>
        <div className="pt-4 text-center">
          <h3 className="font-light text-lg">{product.name}</h3>
          <p className="text-gray-800 mt-1">{product.price}</p>
        </div>
      </CardContent>
    </Card>
  );
};
