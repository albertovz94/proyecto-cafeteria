import React, { useState } from 'react';
import { Calendar, Mail } from 'lucide-react';

const InstagramIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>);
const FacebookIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
const TwitterIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);
const YoutubeIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.5 7.1A3 3 0 0 1 5.3 4.5C7.9 4.2 12 4.2 12 4.2s4.1 0 6.7.3a3 3 0 0 1 2.8 2.6c.3 2 .3 4.9.3 4.9s0 2.9-.3 4.9a3 3 0 0 1-2.8 2.6c-2.6.3-6.7.3-6.7.3s-4.1 0-6.7-.3a3 3 0 0 1-2.8-2.6C2 14.9 2 12 2 12s0-2.9.5-4.9z"/><polygon points="10 15 15 12 10 9 10 15"/></svg>);

const ContactForm = () => {
  const [selectedService, setSelectedService] = useState('Solo saludar');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const services = [
    { id: 'torta', label: 'Torta', emoji: '🍰' },
    { id: 'reserva', label: 'Espacio', emoji: '🎉' },
    { id: 'curso', label: 'Curso', emoji: '✨' },
    { id: 'cafe', label: 'Café', emoji: '☕' },
    { id: 'saludar', label: 'Saludar', emoji: '💬' }
  ];

  const inputClass = "w-full bg-transparent border-b border-[#e8d8c8] py-2 text-[#b08c6c] font-serif text-base focus:outline-none focus:border-[#2c1e14] transition-colors placeholder-[#b08c6c]/70";
  const labelClass = "text-[9px] font-black tracking-widest text-[#a89078] uppercase mb-0 block";
  const stepClass = "flex items-center gap-2 text-[10px] font-black tracking-widest text-[#a89078] uppercase mb-4";
  const stepNumber = "w-5 h-5 rounded-full bg-coffee-900 text-white flex items-center justify-center font-sans font-bold text-[9px]";

  return (
    <div id="footer-contacto" className="w-full bg-[#1f1209] py-16 relative">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="bg-[#Fdfaf7] rounded-4xl relative overflow-hidden shadow-2xl border border-[#3a2818]/20">
          
          <div className="grid md:grid-cols-12 min-h-[600px] items-stretch">
            
            {/* Columna Izquierda: El Formulario original */}
            <div className="md:col-span-7 p-6 md:p-10 relative flex flex-col justify-center">
              
              {/* Sticker superior derecho mas pequeño (Ajustado pos.) */}
              <div className="absolute top-0 right-0 bg-[#c49a6c] w-24 h-24 rounded-full flex items-center justify-center shadow-md transform translate-x-1/4 -translate-y-1/4 z-20">
                <div className="text-center transform -rotate-12 -translate-x-2 translate-y-2">
                  <p className="font-serif italic text-[#3a2818] text-sm font-bold leading-none">respuesta</p>
                  <p className="font-sans font-black text-[#3a2818] text-[7px] tracking-[0.2em] uppercase mt-1">EN 24H</p>
                </div>
              </div>

              {/* Encabezado */}
              <div className="mb-8 relative z-10 w-[85%]">
                <p className="font-sans text-[9px] tracking-[0.2em] text-[#a89078] uppercase font-black mb-2">Comanda - N.º 0427</p>
                <h2 className="text-4xl md:text-5xl font-serif text-[#3a2818] mb-2 tracking-tight">Tu pedido.</h2>
                <p className="text-[#8b6f56] text-sm md:text-base font-medium">Cuéntanos qué necesitas y armamos la mejor experiencia ☕</p>
              </div>

              <form className="space-y-8 md:space-y-10 relative z-10" onSubmit={handleSubmit} noValidate>
                
                {/* Sección 1: Servicios */}
                <div>
                  <div className={stepClass}><span className={stepNumber}>1</span> ¿En qué te ayudamos?</div>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.label)}
                        className={`px-4 py-2 rounded-full border text-xs transition-all duration-300 font-bold flex items-center gap-2
                          ${selectedService === service.label 
                            ? 'bg-coffee-900 border-coffee-900 text-coffee-50 shadow-lg transform -translate-y-0.5' 
                            : 'bg-transparent border-[#e8d8c8] text-[#5e4b3c] hover:border-[#a89078] hover:bg-white'}
                        `}
                      >
                        <span>{service.emoji}</span>
                        {service.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sección 2: Datos */}
                <div>
                  <div className={stepClass}><span className={stepNumber}>2</span> Tus datos</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div><label className={labelClass}>Nombre</label><input type="text" placeholder="Camila Rojas" className={inputClass} /></div>
                    <div><label className={labelClass}>Email</label><input type="email" placeholder="hola@correo.cl" className={inputClass} /></div>
                    <div><label className={labelClass}>Teléfono</label><input type="tel" placeholder="+56 9 ..." className={inputClass} /></div>
                    <div className="relative">
                      <label className={labelClass}>Fecha tentativa</label>
                      <input type="date" className={`${inputClass} cursor-pointer w-full`} onClick={(e) => {try { e.target.showPicker(); } catch(err) {}}} />
                    </div>
                  </div>
                </div>

                {/* Sección 3: Detalles */}
                <div>
                  <div className={stepClass}><span className={stepNumber}>3</span> Cuéntanos los detalles</div>
                  <div className="relative">
                    <textarea 
                      placeholder="Sabores, alergias, presupuesto aproximado..."
                      className="w-full bg-[#f8efe6] border border-[#e8d8c8] rounded-xl p-4 text-[#b08c6c] font-serif text-sm resize-none h-24 focus:outline-none focus:border-[#a89078] transition-colors placeholder-[#b08c6c]/70"
                    ></textarea>
                    <span className="absolute -bottom-5 right-2 text-[9px] font-sans font-black text-[#a89078] tracking-widest">0/600</span>
                  </div>
                </div>

                <hr className="border-dashed border-[#e8d8c8] my-4" />

                {/* Footer de formulario */}
                <div className="flex flex-col xl:flex-row justify-between items-center gap-6 pt-2">
                   <div className="text-[10px] font-mono text-[#8b6f56] space-y-1 w-full text-center xl:text-left">
                      <p className="flex items-center justify-center xl:justify-start gap-1 font-bold"><span className="text-[#c49a6c]">✦</span> Sin spam, palabra de barista.</p>
                      <p>Aceptamos pedidos con 72h de anticipación.</p>
                   </div>
                   {submitted ? (
                     <div className="w-full xl:w-auto bg-accent-gold text-coffee-900 px-8 py-3 rounded-full text-sm font-bold shadow-xl flex items-center justify-center gap-2 shrink-0">
                       ✓ ¡Comanda enviada!
                     </div>
                   ) : (
                     <button type="submit" className="w-full xl:w-auto bg-coffee-900 text-coffee-50 px-8 py-3 rounded-full text-sm font-bold shadow-xl hover:bg-black transition-colors flex items-center justify-center gap-2 group shrink-0">
                       Enviar comanda
                       <span className="group-hover:translate-x-1 transition-transform">→</span>
                     </button>
                   )}
                </div>
              </form>
            </div>
            
            {/* Columna Derecha: Imagen Inmersiva y Redes (Solo Desktop) */}
            <div className="md:col-span-5 relative hidden md:block border-l border-[#e8d8c8]">
              <img 
                 src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=700&q=80" 
                 alt="Taza de café artístico" 
                 className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85] contrast-125"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1f1209] via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-10 left-8 right-8 flex flex-col justify-end z-10">
                 <h4 className="text-white font-serif text-3xl mb-1 drop-shadow-md">Síguenos</h4>
                 <p className="text-coffee-200 text-sm mb-6 drop-shadow-sm font-light">Forma parte de la comunidad cafetera.</p>
                 
                 <div className="flex flex-wrap gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent-gold hover:border-accent-gold transition-all duration-300 transform hover:-translate-y-1 group">
                       <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent-gold hover:border-accent-gold transition-all duration-300 transform hover:-translate-y-1 group">
                       <FacebookIcon className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent-gold hover:border-accent-gold transition-all duration-300 transform hover:-translate-y-1 group">
                       <TwitterIcon className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent-gold hover:border-accent-gold transition-all duration-300 transform hover:-translate-y-1 group">
                       <YoutubeIcon className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-accent-gold shadow-lg flex items-center justify-center text-white hover:bg-white hover:text-accent-gold transition-all duration-300 transform hover:-translate-y-1 group border border-transparent hover:border-accent-gold ml-2 relative">
                       <Mail className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                       <span className="absolute -top-1 -right-1 flex h-3 w-3">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                       </span>
                    </a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
