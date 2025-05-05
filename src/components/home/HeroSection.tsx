
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wider">MAISON</h1>
        <p className="text-lg md:text-xl mb-8 max-w-md text-center font-light tracking-wide">
          Изысканные сумки для истинных ценителей стиля и качества
        </p>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-none">
          КОЛЛЕКЦИЯ
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
