
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
