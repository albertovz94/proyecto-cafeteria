import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Coffee, Heart } from 'lucide-react';
import ContactForm from './ContactForm';

const ModuleOne = () => {
  return (
    <section className="w-full">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-coffee-900/90 to-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=80"
          alt="Granos de cafe arabica premium"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="z-20 text-center text-coffee-50 px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-xl">
            Tu dosis de arte y{' '}
            <span className="text-accent-gold block md:inline">Sabor Local</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto text-coffee-100">
            Descubre por que somos el rincon favorito de la ciudad.
          </p>
          <Link
            to="/catalogo"
            className="inline-block bg-accent-gold hover:bg-white transition-colors duration-300 text-coffee-900 font-bold px-10 py-5 rounded-full text-lg shadow-2xl hover:-translate-y-1 transform"
          >
            Ver Catalogo Completo
          </Link>
        </div>
      </div>

      {/* ── Quienes Somos ─────────────────────────────────────── */}
      <div className="bg-coffee-900 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-accent-green font-bold mb-2 flex items-center gap-2">
                <span className="w-8 h-px bg-accent-green inline-block"></span> Quienes Somos
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Honramos la <span className="text-accent-gold">Identidad del Grano.</span>
              </h3>
              <p className="text-coffee-200 text-lg mb-8 leading-relaxed font-light">
                Iniciamos nuestra historia en 2012. El cafe no es una simple bebida, es el
                acompanante de tus ideas. Adquirimos microlotes directamente a productores y
                tostamos los granos en casa, garantizando perfiles de sabor que no encontraras
                en ningun otro lado.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="flex flex-col gap-3">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-accent-gold">
                    <Coffee className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Cafe Especial</h4>
                  <p className="text-coffee-300 text-sm">
                    Nuestro tueste enfatiza el caracter dulce del grano, evitando el amargor.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-accent-gold">
                    <Heart className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Amor al Proceso</h4>
                  <p className="text-coffee-300 text-sm">
                    Calibramos el agua y las maquinas cada dia para lograr la taza perfecta.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[350px] md:h-[550px] w-full mt-8 md:mt-0">
              <img
                src="assets/images/general/taza2.jpg"
                alt="Taza de cafe especial"
                className="absolute bottom-0 right-0 w-[55%] h-[65%] object-cover rounded-4xl shadow-2xl border-4 md:border-8 border-white z-0 transform hover:scale-105 transition-transform duration-500"
              />
              <img
                src="assets/images/general/taza1.png"
                alt="Latte art en taza"
                className="absolute top-0 left-0 w-[55%] h-[65%] object-cover rounded-4xl shadow-2xl border-4 md:border-8 border-white z-10 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Tortas Personalizadas ─────────────────────────────── */}
      <div className="bg-[#1f1209] text-coffee-100 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8 mb-16 items-start">
            <div className="md:col-span-3 flex items-center gap-4 text-accent-gold text-sm font-medium tracking-widest uppercase">
              <span>03</span>
              <span className="w-12 h-px bg-accent-gold"></span>
              <span>Tortas personalizadas</span>
            </div>
            <div className="md:col-span-9 lg:col-span-8">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                Una torta es un{' '}
                <span className="text-accent-gold italic font-light">retrato comestible.</span>
              </h2>
              <p className="text-coffee-300 text-xl font-light max-w-2xl">
                Disenamos tortas a medida para bodas, cumpleanos, bautizos y celebraciones
                corporativas. Cada pieza es unica.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=800&q=80"
                alt="Decoracion de torta a mano"
                className="w-full h-[450px] md:h-[700px] object-cover rounded-4xl border-4 md:border-8 border-white shadow-2xl brightness-90 relative z-10"
              />
              <div className="absolute -bottom-6 left-4 md:-bottom-12 md:-left-8 bg-white text-coffee-900 p-6 md:p-8 shadow-2xl min-w-[200px] md:min-w-[250px] z-20 transform hover:-translate-y-2 transition-transform duration-300">
                <p className="text-[10px] tracking-widest uppercase text-accent-gold font-black mb-2">Tiempo de encargo</p>
                <p className="text-xl md:text-2xl font-serif font-bold leading-tight">Min. 7 dias de<br />antelacion</p>
              </div>
            </div>

            <div className="flex flex-col mt-8 md:mt-0">
              {[
                { n: '01', t: 'Conversamos', d: 'Cuentanos la ocasion, sabores favoritos, numero de personas y referencias esteticas.' },
                { n: '02', t: 'Disenamos', d: 'Te enviamos una propuesta con bocetos, paleta y combinaciones de sabor.' },
                { n: '03', t: 'Horneamos', d: 'Producimos tu torta con ingredientes frescos. Decoracion a mano, una pieza unica.' },
                { n: '04', t: 'Entregamos', d: 'Retira en el local o coordinamos despacho refrigerado el dia del evento.' },
              ].map((s) => (
                <div key={s.n} className="py-6 md:py-8 border-b border-coffee-800/50 flex gap-6 md:gap-8 group hover:bg-white/5 transition-colors -mx-4 px-4 rounded-xl">
                  <span className="text-accent-gold text-sm font-bold pt-1">{s.n}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 md:mb-3 group-hover:text-accent-gold transition-colors">{s.t}</h3>
                    <p className="text-coffee-300 font-light text-sm md:text-base leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <a href="#footer-contacto" className="bg-accent-gold text-coffee-900 px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center">
                  Encargar una torta <span>&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Catering de Eventos ───────────────────────────────── */}
      <div className="bg-coffee-900 text-coffee-100 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8 mb-16 items-start">
            <div className="md:col-span-3 flex items-center gap-4 text-accent-green text-sm font-medium tracking-widest uppercase">
              <span>04</span>
              <span className="w-12 h-px bg-accent-green"></span>
              <span>Catering de Eventos</span>
            </div>
            <div className="md:col-span-9 lg:col-span-8">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                La cafeteria donde tu la{' '}
                <span className="text-accent-green italic font-light">necesitas.</span>
              </h2>
              <p className="text-coffee-200 text-xl font-light max-w-2xl">
                Montamos barras de cafe especial con baristas en vivo para eventos corporativos,
                bodas y exposiciones.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-1 md:order-2">
              <img
                src="assets/images/general/stan.jpg"
                alt="Barra de catering de cafe en evento"
                className="w-full h-[450px] md:h-[700px] object-cover rounded-4xl border-4 md:border-8 border-white shadow-2xl brightness-90 relative z-10"
              />
              <div className="absolute -bottom-6 right-4 md:-bottom-12 md:-right-8 bg-white text-coffee-900 p-6 md:p-8 shadow-2xl min-w-[200px] md:min-w-[250px] z-20 transform hover:-translate-y-2 transition-transform duration-300">
                <p className="text-[10px] tracking-widest uppercase text-accent-green font-black mb-2">Reserva previa</p>
                <p className="text-xl md:text-2xl font-serif font-bold leading-tight">Min. 15 dias de<br />antelacion</p>
              </div>
            </div>

            <div className="flex flex-col mt-8 md:mt-0 order-2 md:order-1">
              {[
                { n: '01', t: 'Cotizamos', d: 'Detallanos la cantidad de invitados, horas de servicio y locacion del evento.' },
                { n: '02', t: 'Planificamos', d: 'Armamos el menu de bebidas y pasteleria en porciones de tamano bocado ideal.' },
                { n: '03', t: 'Montamos', d: 'Instalamos nuestra barra movil con maquinas espresso profesionales e insumos.' },
                { n: '04', t: 'Servimos', d: 'Nuestros baristas expertos extraen, texturizan y sirven cada bebida con perfeccion.' },
              ].map((s) => (
                <div key={s.n} className="py-6 md:py-8 border-b border-white/10 flex gap-6 md:gap-8 group hover:bg-white/5 transition-colors -mx-4 px-4 rounded-xl">
                  <span className="text-accent-green text-sm font-bold pt-1">{s.n}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 md:mb-3 group-hover:text-accent-green transition-colors">{s.t}</h3>
                    <p className="text-coffee-200 font-light text-sm md:text-base leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <a href="#footer-contacto" className="bg-accent-gold text-coffee-900 px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center">
                  Consultar disponibilidad <span>&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cursos de Barismo ─────────────────────────────────── */}
      <div className="bg-[#1f1209] text-coffee-100 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8 mb-16 items-start">
            <div className="md:col-span-3 flex items-center gap-4 text-accent-gold text-sm font-medium tracking-widest uppercase">
              <span>05</span>
              <span className="w-12 h-px bg-accent-gold"></span>
              <span>Cursos de Barismo</span>
            </div>
            <div className="md:col-span-9 lg:col-span-8">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                Domina el arte de{' '}
                <span className="text-accent-gold italic font-light">la extraccion.</span>
              </h2>
              <p className="text-coffee-300 text-xl font-light max-w-2xl">
                Talleres intensivos creados para aficionados curiosos y profesionales que buscan
                perfeccionar su tecnica barista.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <img
                src="assets/images/general/curso.avif"
                alt="Curso de barismo y arte latte"
                className="w-full h-[450px] md:h-[700px] object-cover rounded-4xl border-4 md:border-8 border-white shadow-2xl brightness-90 relative z-10"
              />
              <div className="absolute -bottom-6 left-4 md:-bottom-12 md:-left-8 bg-white text-coffee-900 p-6 md:p-8 shadow-2xl min-w-[200px] md:min-w-[250px] z-20 transform hover:-translate-y-2 transition-transform duration-300">
                <p className="text-[10px] tracking-widest uppercase text-accent-gold font-black mb-2">Duracion Total</p>
                <p className="text-xl md:text-2xl font-serif font-bold leading-tight">3 niveles<br />intensivos</p>
              </div>
            </div>

            <div className="flex flex-col mt-8 md:mt-0">
              {[
                { n: '01', t: 'Inmersion', d: 'Conocimiento sobre especies de granos, terroir y quimica de la extraccion.' },
                { n: '02', t: 'Practica', d: 'Calibracion del molino, ratios, tiempos de infusion y analisis sensorial.' },
                { n: '03', t: 'Arte Latte', d: 'Aprende a calentar, texturizar y verter la leche creando corazones y tulipanes.' },
                { n: '04', t: 'Certificacion', d: 'Examen practico evaluado. Otorga diploma de nivel I con validez profesional.' },
              ].map((s) => (
                <div key={s.n} className="py-6 md:py-8 border-b border-coffee-800/50 flex gap-6 md:gap-8 group hover:bg-white/5 transition-colors -mx-4 px-4 rounded-xl">
                  <span className="text-accent-gold text-sm font-bold pt-1">{s.n}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 md:mb-3 group-hover:text-accent-gold transition-colors">{s.t}</h3>
                    <p className="text-coffee-300 font-light text-sm md:text-base leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <a href="#footer-contacto" className="bg-accent-gold text-coffee-900 px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center">
                  Inscribirse ahora <span>&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Nuestro Espacio ───────────────────────────────────── */}
      <div className="py-24 relative overflow-hidden bg-coffee-900 text-coffee-100">
        <div className="absolute inset-0 bg-[#1f1209] skew-y-3 transform origin-bottom-right"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-6">Ven a nuestro espacio</h2>
              <p className="text-coffee-300 mb-8 text-lg font-light">
                Nuestro salon cuenta con areas dedicadas para el trabajo enfocado con Wi-Fi de alta
                velocidad y rincones calidos para compartir o reuniones privadas.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent-gold"><MapPin /></div>
                  <div>
                    <p className="font-bold text-white">Ubicacion</p>
                    <p className="text-coffee-300">Av. de los Cafetales 1234, Barrio Central</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent-gold"><Clock /></div>
                  <div>
                    <p className="font-bold text-white">Horarios</p>
                    <p className="text-coffee-300">Lunes a Domingos, 7:00 AM - 9:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent-green"><Phone /></div>
                  <div>
                    <p className="font-bold text-white">Telf / Pedidos Web</p>
                    <p className="text-coffee-300">+54 11 1234-5678</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                alt="Interior acogedor de Oasis Cafe"
                className="rounded-[3rem] shadow-2xl border-4 md:border-8 border-coffee-800/50 object-cover h-[300px] md:h-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Formulario de Contacto ────────────────────────────── */}
      <ContactForm />

    </section>
  );
};

export default ModuleOne;
