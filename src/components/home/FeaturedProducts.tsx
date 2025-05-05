
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/home/ProductCard";

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <header className="text-center mb-16">
        <h2 className="text-3xl font-light tracking-wider">ИЗБРАННОЕ</h2>
        <Separator className="w-20 h-0.5 bg-black mx-auto mt-4" />
      </header>

      <Carousel className="w-full">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-0 border-black text-black" />
          <CarouselNext className="right-0 border-black text-black" />
        </div>
      </Carousel>
    </section>
  );
};

export default FeaturedProducts;
