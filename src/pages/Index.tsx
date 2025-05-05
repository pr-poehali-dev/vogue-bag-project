
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredBags = [
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

  const categories = [
    { id: 1, name: "КЛАССИКА", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { id: 2, name: "ТРЕНД", image: "https://images.unsplash.com/photo-1585488763177-bde7d15fd3cf?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { id: 3, name: "ВЕЧЕРНИЕ", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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

      {/* Featured Products */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-wider">ИЗБРАННОЕ</h2>
          <Separator className="w-20 h-0.5 bg-black mx-auto mt-4" />
        </header>

        <Carousel className="w-full">
          <CarouselContent>
            {featuredBags.map((bag) => (
              <CarouselItem key={bag.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="border-none">
                  <CardContent className="p-0">
                    <div className="relative group overflow-hidden">
                      <img 
                        src={bag.image} 
                        alt={bag.name} 
                        className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="outline" className="w-full border-black rounded-none">
                          В КОРЗИНУ
                        </Button>
                      </div>
                    </div>
                    <div className="pt-4 text-center">
                      <h3 className="font-light text-lg">{bag.name}</h3>
                      <p className="text-gray-800 mt-1">{bag.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 border-black text-black" />
            <CarouselNext className="right-0 border-black text-black" />
          </div>
        </Carousel>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-wider">КАТЕГОРИИ</h2>
            <Separator className="w-20 h-0.5 bg-black mx-auto mt-4" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="relative group overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-light tracking-widest">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 md:px-8 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-light tracking-wider mb-6">ПОДПИСАТЬСЯ</h2>
        <p className="text-gray-600 mb-8">
          Получайте эксклюзивные предложения и будьте в курсе последних трендов
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Ваш email" 
            className="flex-1 border-b border-black bg-transparent px-4 py-2 focus:outline-none"
          />
          <Button className="rounded-none bg-black text-white hover:bg-gray-800">
            ПОДПИСАТЬСЯ
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-light tracking-wider mb-6">MAISON</h3>
            <p className="text-gray-400 text-sm">
              Изысканные сумки для истинных ценителей стиля и качества с 2007 года
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-4">КОЛЛЕКЦИИ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Новинки</li>
              <li>Классика</li>
              <li>Лимитированные серии</li>
              <li>Распродажа</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-4">КЛИЕНТАМ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Доставка и оплата</li>
              <li>Возврат</li>
              <li>FAQ</li>
              <li>Контакты</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-4">СВЯЗАТЬСЯ</h4>
            <div className="flex space-x-4 mb-4">
              <Icon name="Instagram" size={20} />
              <Icon name="Facebook" size={20} />
              <Icon name="Twitter" size={20} />
            </div>
            <p className="text-gray-400 text-sm">
              Тел: +7 (495) 123-45-67<br />
              Email: info@maison.ru
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-gray-500 text-sm text-center">
          © 2025 MAISON. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;
