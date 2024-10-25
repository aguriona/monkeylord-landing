'use client';

import { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Logo from '../assets/monkeylord-logo.jpeg';

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo}alt="Monkeylord Logo" width={50} height={50} className="rounded-full" />
            <span className="ml-3 text-xl font-bold">Monkeylord</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
            {/* Other links */}
          </div>
          <div className="flex items-center">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={toggleMenu} className="ml-4 md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {/* Dropdown menu logic */}
      </nav>
    </header>
  );
}
