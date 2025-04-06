import { Menu, ShoppingCart } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-6 sticky top-0 z-20">
      <button onClick={toggleSidebar} className="md:hidden">
        <Menu size={24} />
      </button>
      <div className="flex items-center space-x-2">
        <ShoppingCart size={24} />
        <span>0</span>
      </div>
    </header>
  );
};

export default Header;