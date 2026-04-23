import { useEffect } from 'react';

/**
 * Hook para SEO dinámico por ruta.
 * Actualiza <title> y <meta name="description"> sin dependencias externas.
 * @param {string} title - Título de la página
 * @param {string} description - Descripción para SEO
 */
const useSEO = (title, description) => {
  useEffect(() => {
    // Actualizar título
    const prevTitle = document.title;
    document.title = title;

    // Actualizar meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Actualizar og:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    // Actualizar og:description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Actualizar twitter:title
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);

    // Restaurar al desmontar
    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, [title, description]);
};

export default useSEO;
