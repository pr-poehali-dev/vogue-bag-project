
import { Separator } from "@/components/ui/separator";

export interface Category {
  id: number;
  name: string;
  image: string;
}

interface CategoriesSectionProps {
  categories: Category[];
}

const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  return (
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
  );
};

export default CategoriesSection;
