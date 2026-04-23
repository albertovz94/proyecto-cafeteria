import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ModuleOne from './components/ModuleOne';
import ModuleTwo from './components/ModuleTwo';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PrintMenu from './components/PrintMenu';
import NotFound from './pages/NotFound';
import useSEO from './hooks/useSEO';

// Componente interno: gestiona SEO por ruta y auto-scroll al cambiar de vista
function RouteManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// SEO por página — wrapper para cada ruta
const PageHome = () => {
  useSEO(
    'Oasis Café — Café de Especialidad, Tortas y Cursos de Barismo',
    'Oasis Café: tu refugio de café de especialidad tostado en casa, tortas personalizadas para eventos, catering y cursos de barismo certificados.'
  );
  return <ModuleOne />;
};

const PageCatalogo = () => {
  useSEO(
    'Catálogo y Menú — Oasis Café',
    'Explora nuestro menú completo: 9 cafés de autor, 9 dulces artesanales y 9 tortas personalizadas. Descarga el menú en PDF.'
  );
  return <ModuleTwo />;
};

// Layout base con Header, Footer y WhatsApp flotante
const BaseLayout = ({ children }) => (
  <div className="bg-coffee-50 min-h-screen font-sans selection:bg-accent-gold selection:text-white flex flex-col">
    <Header />
    <main className="grow pt-16">
      {children}
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <RouteManager />
      <Routes>
        <Route path="/" element={<BaseLayout><PageHome /></BaseLayout>} />
        <Route path="/catalogo" element={<BaseLayout><PageCatalogo /></BaseLayout>} />
        <Route path="/imprimir/:category" element={<PrintMenu />} />
        <Route path="*" element={<BaseLayout><NotFound /></BaseLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
