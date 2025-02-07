import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="max-w-3xl mx-auto my-4">
        <div className="backdrop-blur-md bg-white/30 rounded-full px-26 py-2 flex items-center justify-between shadow-lg mx-4">
          <ul className="flex items-center space-x-6">
            <li>
              <a 
                href="#proyectos" 
                className="text-fuchsia-500 hover:text-fuchsia-600 transition-colors font-medium text-sm"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a 
                href="#habilidades" 
                className="text-gray-800 hover:text-gray-600 transition-colors font-medium text-sm"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a 
                href="#redes" 
                className="text-gray-800 hover:text-gray-600 transition-colors font-medium text-sm"
              >
                Redes
              </a>
            </li>
            <li>
              <a 
                href="#sobre-mi" 
                className="text-gray-800 hover:text-gray-600 transition-colors font-medium text-sm"
              >
                Sobre mí
              </a>
            </li>
          </ul>
          
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1.5 rounded-full hover:bg-white/50 transition-colors"
            aria-label="Cambiar tema"
          >
            {isDarkMode ? (
              <Sun size={18} className="text-gray-800" />
            ) : (
              <Moon size={18} className="text-gray-800" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
