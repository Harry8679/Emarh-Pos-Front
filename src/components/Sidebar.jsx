import { Home, FileText, Package, Users, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`bg-[#001F3F] text-white w-64 min-h-screen p-4 fixed top-0 left-0 z-30 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <h1 className="text-2xl font-bold mb-10 text-center">Emarh POS</h1>
      <nav className="flex flex-col space-y-6">
        <SidebarItem icon={<Home size={20} />} label="Home" path="/" />
        <SidebarItem icon={<FileText size={20} />} label="Bills" path="/bills" />
        <SidebarItem icon={<Package size={20} />} label="Items" path="/items" />
        <SidebarItem icon={<Users size={20} />} label="Customers" path="/customers" />
        <SidebarItem icon={<LogOut size={20} />} label="Logout" path="/logout" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label, path }) => (
  <Link to={path}>
    <div className="flex items-center space-x-3 cursor-pointer hover:bg-white hover:text-[#001F3F] px-3 py-2 rounded-lg transition">
      {icon}
      <span>{label}</span>
    </div>
  </Link>
);

export default Sidebar;