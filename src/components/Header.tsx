
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-light tracking-widest">
            MAISON
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm tracking-wider hover:text-gray-600 transition-colors">
              ГЛАВНАЯ
            </Link>
            <Link to="/shop" className="text-sm tracking-wider hover:text-gray-600 transition-colors">
              КАТАЛОГ
            </Link>
            <Link to="/new" className="text-sm tracking-wider hover:text-gray-600 transition-colors">
              НОВИНКИ
            </Link>
            <Link to="/about" className="text-sm tracking-wider hover:text-gray-600 transition-colors">
              О НАС
            </Link>
            <Link to="/contact" className="text-sm tracking-wider hover:text-gray-600 transition-colors">
              КОНТАКТЫ
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Icon name="Search" size={20} />
            </Button>
            
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingBag" size={20} />
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Icon name="User" size={20} />
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 mt-10">
                  <Link to="/" className="text-lg tracking-wider">ГЛАВНАЯ</Link>
                  <Link to="/shop" className="text-lg tracking-wider">КАТАЛОГ</Link>
                  <Link to="/new" className="text-lg tracking-wider">НОВИНКИ</Link>
                  <Link to="/about" className="text-lg tracking-wider">О НАС</Link>
                  <Link to="/contact" className="text-lg tracking-wider">КОНТАКТЫ</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
