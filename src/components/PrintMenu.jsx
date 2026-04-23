import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cafes from '../data/cafes.json';
import postres from '../data/postres.json';
import tortas from '../data/tortas.json';

const PrintMenu = () => {
  const { category } = useParams();
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');

  // Sincronizar datos dependiendo del botón presionado
  useEffect(() => {
    switch(category) {
      case 'cafes':
        setData(cafes);
        setTitle('Menú de Cafés de Autor');
        break;
      case 'postres':
        setData(postres);
        setTitle('Menú de Dulces y Postres');
        break;
      case 'tortas':
        setData(tortas);
        setTitle('Relicario de Tortas Clásicas');
        break;
      default:
        setData([]);
    }
  }, [category]);

  // El usuario interactuará manualmente utilizando el botón flotante si desea exportarlo.

  if (!data) return <div className="p-8 text-center">Generando PDF...</div>;

  return (
    <div className="bg-white min-h-screen text-black print:text-black font-serif px-8 py-12 md:px-16 md:py-16 pb-24 max-w-5xl mx-auto">
      
      {/* Cabecera Corporativa y Datos de la Empresa */}
      <div className="border-b-4 border-black pb-8 mb-12 flex flex-col md:flex-row justify-between md:items-end gap-6">
         <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-2">OASIS<span className="font-light">CAFÉ</span></h1>
            <p className="font-sans text-xs md:text-sm tracking-widest uppercase font-bold text-gray-800">
               Av. de los Cafetales 1234, Barrio Central
            </p>
         </div>
         <div className="md:text-right font-sans text-xs text-gray-800 space-y-1">
            <p className="font-bold">Información de Contacto</p>
            <p>Telf: +54 11 1234-5678</p>
            <p>Instagram: @OasisCafe.Ok</p>
            <p>www.oasiscafe.com</p>
         </div>
      </div>

      {/* Titular del Documento y Mensaje Exclusivo */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-widest border-b border-black inline-block pb-2">
            {title}
        </h2>
        <p className="italic text-lg md:text-xl mx-auto max-w-2xl text-gray-700 mt-4 leading-relaxed">
           "Cada grano de café, cada gramo de harina y cada minuto de horneado en este lugar tiene una firma de identidad y un pedazo de nuestra alma plasmado en él."
        </p>
      </div>

      {/* Lista del Menú en 2 Columnas para A4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {data.map(item => (
          <div key={item.id} className="border-b border-gray-300 border-dotted pb-6 flex flex-col justify-start">
            <div className="flex justify-between items-baseline mb-3 gap-4">
                 <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">{item.name}</h3>
                 <span className="text-lg md:text-xl font-bold whitespace-nowrap">{item.price}</span>
            </div>
            <p className="text-gray-600 italic text-sm md:text-base leading-relaxed">
                {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Pie de Hoja de la Empresa */}
      <div className="mt-24 text-center font-sans text-[10px] md:text-xs text-gray-500 uppercase tracking-widest border-t border-gray-200 pt-8 space-y-2">
        <p>Los precios pueden estar sujetos a modificaciones sin previo aviso.</p>
        <p>Consulta a nuestros baristas por opciones sin T.A.C.C. y leches vegetales exclusivas.</p>
        <p className="mt-4 font-bold text-gray-400">Documento de Validez Oficial - Oasis Café</p>
      </div>

      {/* Estilos estrictos para CSS Media Print (Optimizar PDF) */}
      <style>
         {`
           @media print {
             .no-print { display: none !important; }
             body { background: white !important; }
             @page { margin: 1.5cm; }
           }
         `}
      </style>
      
      {/* Botón Flotante interactivo (No visible en el PDF) */}
      <button 
        className="fixed bottom-8 right-8 no-print bg-black text-white px-8 py-4 rounded-full font-sans font-bold shadow-2xl cursor-pointer hover:bg-gray-800 transition-transform transform hover:-translate-y-2 flex gap-3 items-center" 
        onClick={() => window.print()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Descargar Menú PDF
      </button>
    </div>
  );
};

export default PrintMenu;
