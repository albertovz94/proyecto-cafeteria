import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const NotFound = () => {
  useSEO(
    'Página no encontrada — Oasis Café',
    'Lo sentimos, la página que buscas no existe. Vuelve al inicio y descubre nuestro menú de cafés de especialidad y tortas artesanales.'
  );

  return (
    <div className="min-h-screen bg-coffee-900 flex items-center justify-center px-4 text-center">
      <div className="max-w-lg">
        {/* Número de error estilizado */}
        <p className="text-[120px] md:text-[180px] font-black text-white/5 leading-none select-none">
          404
        </p>
        <div className="-mt-8 md:-mt-16">
          <span className="text-accent-gold text-xs font-black tracking-[0.3em] uppercase">
            Página no encontrada
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-white mt-4 mb-4">
            Este rincón del café<br />
            <span className="text-accent-gold italic font-light">no existe todavía.</span>
          </h1>
          <p className="text-coffee-300 text-base font-light mb-10 leading-relaxed">
            Parece que te perdiste en nuestra carta. No hay nada aquí, pero hay
            mucho esperándote en el menú principal. ☕
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-accent-gold text-coffee-900 px-8 py-4 rounded-full font-bold text-base shadow-2xl hover:-translate-y-1 transition-transform duration-300"
          >
            <span>←</span>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
