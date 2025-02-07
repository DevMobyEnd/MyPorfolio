import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="max-w-xl mx-auto my-4"> {/* Ajustado a max-w-xl */}
        <div
          className={`rounded-full px-12 py-2 flex items-center justify-between shadow-lg mx-4 transition-all duration-300 ${
            hasScrolled 
              ? 'bg-white/30 backdrop-blur-md'  // Al hacer scroll: efecto de vidrio esmerilado
              : 'bg-transparent shadow-none'    // Al inicio: sin fondo ni sombra
          }`}
        >
          <ul className="flex items-center space-x-4"> {/* Ajustado a space-x-4 */}
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