import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BarChartIcon, ShieldIcon, MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Dashboard',
    href: '/',
    icon: HomeIcon
  }, {
    name: 'Prediction System',
    href: '/prediction',
    icon: BarChartIcon
  }, {
    name: 'Prevention System',
    href: '/prevention',
    icon: ShieldIcon
  }];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 invert" />
           <div>
              <h1 className="text-xl font-bold leading-tight">
                Santa Clara County
              </h1>
              <p className="text-xs sm:text-sm text-blue-200">
                Homeless Prediction & Prevention System
              </p>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map(item => {
            const Icon = item.icon;
            return <Link key={item.name} to={item.href} className={`flex items-center space-x-1 py-2 px-1 border-b-2 ${location.pathname === item.href ? 'border-white text-white' : 'border-transparent text-blue-200 hover:text-white hover:border-blue-300'}`}>
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>;
          })}
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-200 hover:text-white focus:outline-none">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-2">
            {navigation.map(item => {
          const Icon = item.icon;
          return <Link key={item.name} to={item.href} className={`flex items-center space-x-2 py-3 px-3 rounded ${location.pathname === item.href ? 'bg-blue-700 text-white' : 'text-blue-200 hover:bg-blue-700 hover:text-white'}`} onClick={() => setIsMenuOpen(false)}>
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>;
        })}
          </nav>}
      </div>
    </header>;
};
export default Header;