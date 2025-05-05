
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
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
  );
};

export default NewsletterSection;
