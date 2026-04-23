import React from 'react';
import cafes from '../data/cafes.json';
import postres from '../data/postres.json';
import tortas from '../data/tortas.json';
import { Link } from 'react-router-dom';
import { Sparkles, Coffee as CafeIcon, Cookie } from 'lucide-react';

const CardProducto = ({ item }) => (
  <div className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-coffee-100 flex flex-col h-full">
    <div className="h-56 overflow-hidden relative">
      <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-8 flex flex-col grow">
      <div className="flex justify-between items-start mb-4 gap-4">
        <h3 className="text-xl font-bold text-coffee-900 leading-tight">{item.name}</h3>
        {item.price && (
          <span className="font-bold text-coffee-900 bg-accent-gold/20 shrink-0 px-3 py-1 rounded-full text-sm">
            {item.price}
          </span>
        )}
      </div>
      <p className="text-coffee-600 text-sm leading-relaxed mb-6 grow">{item.description}</p>
      <button className="w-full py-3 rounded-xl bg-accent-gold text-coffee-900 font-bold hover:bg-white hover:border-2 hover:border-accent-gold transition-all duration-300 flex items-center justify-center gap-2">
        ¡Pídelo ahora!
      </button>
    </div>
  </div>
);

const SectionProducts = ({ title, description, items, icon: Icon }) => (
  <div className="mb-24">
    <div className="text-center mb-16 flex flex-col items-center">
      {Icon && <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center text-accent-gold mb-6"><Icon className="w-8 h-8" /></div>}
      <h2 className="text-4xl md:text-5xl font-black text-coffee-800 mb-4">{title}</h2>
      <p className="text-coffee-600 max-w-2xl mx-auto text-lg">{description}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {items.map(item => (
        <CardProducto key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const ModuleTwo = () => {
  return (
    <section className="w-full bg-coffee-50 pb-20 overflow-hidden relative">
      {/* Intro al catálogo */}
      <div className="bg-coffee-900 text-white flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pb-20 mb-20 rounded-b-[4rem] text-center shadow-xl relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 px-4">
           <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Menú de <span className="text-accent-gold">Especialidad</span></h1>
           <p className="text-coffee-200 text-xl max-w-2xl mx-auto font-light mb-12">Explora las obras maestras creadas por nuestros baristas y pasteleros. 27 variantes de puro sabor artesanal.</p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 flex-wrap">
              <Link to="/imprimir/cafes" target="_blank" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-xl flex items-center gap-3 transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                 <CafeIcon className="w-6 h-6 text-accent-gold" />
                 <span className="font-bold text-sm tracking-wide">Ver Menú en PDF (Cafés)</span>
              </Link>
              <Link to="/imprimir/postres" target="_blank" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-xl flex items-center gap-3 transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                 <Cookie className="w-6 h-6 text-accent-gold" />
                 <span className="font-bold text-sm tracking-wide">Ver Menú en PDF (Postres)</span>
              </Link>
              <Link to="/imprimir/tortas" target="_blank" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-xl flex items-center gap-3 transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                 <Sparkles className="w-6 h-6 text-accent-gold" />
                 <span className="font-bold text-sm tracking-wide">Ver Menú en PDF (Tortas)</span>
              </Link>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <SectionProducts 
          icon={CafeIcon}
          title="Nuestros Cafés de Autor" 
          description="Una selección vibrante de 9 granos tostados con dedicación absoluta."
          items={cafes} 
        />
        
        <SectionProducts 
          icon={Cookie}
          title="Dulces y Postres" 
          description="9 tentaciones crujientes e inolvidables."
          items={postres} 
        />

        <SectionProducts 
          icon={Sparkles}
          title="Nuestras Tortas Clásicas" 
          description="9 creaciones atemporales elaboradas de manera 100% casera."
          items={tortas} 
        />
      </div>
    </section>
  );
};

export default ModuleTwo;
