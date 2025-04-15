import { Home, FileText, Package, Users, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  return (
    <div className={`bg-[#001F3F] text-white w-64 min-h-screen p-4 fixed top-0 left-0 z-30 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <h1 className="text-2xl font-bold mb-10 text-center">Emarh POS</h1>
      <nav className="flex flex-col space-y-6">
        <SidebarItem icon={<Home size={20} />} label="Home" path="/" currentPath={location.pathname} />
        <SidebarItem icon={<FileText size={20} />} label="Bills" path="/bills" currentPath={location.pathname} />
        <SidebarItem icon={<Package size={20} />} label="Items" path="/items" currentPath={location.pathname} />
        <SidebarItem icon={<Users size={20} />} label="Customers" path="/customers" currentPath={location.pathname} />
        <SidebarItem icon={<LogOut size={20} />} label="Logout" path="/logout" currentPath={location.pathname} />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label, path, currentPath }) => {
  const isActive = currentPath === path;

  return (
    <Link to={path}>
      <div className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition cursor-pointer
        ${isActive ? 'bg-white text-[#001F3F]' : 'hover:bg-white hover:text-[#001F3F]'}`}>
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default Sidebar;