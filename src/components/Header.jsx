import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        <Link to="/" className="text-2xl font-black text-coffee-900 tracking-tighter cursor-pointer z-50 hover:scale-105 transition-transform flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Coffee className="w-8 h-8 text-coffee-900" />
          <span>OASIS<span className="text-accent-gold">CAFÉ</span></span>
        </Link>
        
        {/* Navegación para Computadoras */}
        <div className="hidden md:flex gap-8 items-center font-medium text-coffee-800">
          <Link to="/" className={`transition-colors ${location.pathname === '/' ? 'text-accent-gold' : 'hover:text-accent-gold'}`}>
            Nuestra Esencia
          </Link>
          <Link to="/catalogo" className={`transition-colors ${location.pathname === '/catalogo' ? 'text-accent-gold' : 'hover:text-accent-gold'}`}>
            Catálogo y Menú
          </Link>
          <a href="#footer-contacto" className="bg-coffee-800 hover:bg-coffee-900 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
            Contáctanos
          </a>
        </div>

        {/* Botón Hamburguesa para Móviles */}
        <button className="md:hidden text-coffee-900 focus:outline-none z-50 transition-transform hover:scale-110" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Menú Móvil Desplegable */}
        {isOpen && (
           <div className="absolute top-full left-0 w-full bg-white shadow-2xl flex flex-col md:hidden py-8 px-6 gap-6 font-bold text-coffee-900 border-t border-coffee-100 z-40 animate-in slide-in-from-top-2 duration-300">
               <Link to="/" onClick={() => setIsOpen(false)} className={`transition-colors text-xl text-center py-2 border-b border-coffee-50 ${location.pathname === '/' ? 'text-accent-gold' : ''}`}>
                 Nuestra Esencia
               </Link>
               <Link to="/catalogo" onClick={() => setIsOpen(false)} className={`transition-colors text-xl text-center py-2 border-b border-coffee-50 ${location.pathname === '/catalogo' ? 'text-accent-gold' : ''}`}>
                 Catálogo y Menú
               </Link>
               <a href="#footer-contacto" onClick={() => setIsOpen(false)} className="bg-coffee-900 text-white px-8 py-4 mt-2 rounded-full text-center shadow-lg hover:bg-coffee-800 text-lg">
                 Contáctanos
               </a>
           </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
