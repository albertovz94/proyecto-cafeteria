# ☕ Oasis Café — Landing Page Profesional

> Sitio web de alta gama para comercio de café de especialidad, repostería artesanal y eventos. Construido con React + Vite + Tailwind CSS v4.

![Vista Previa](https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80)

---

## 🚀 Demo en Vivo

🔗 [proyecto-cafeteria.netlify.app](https://proyecto-cafeteria.netlify.app) *(despliega conectando este repo en Netlify)*

---

## 📋 Descripción

**Oasis Café** es una SPA (Single Page Application) de alta gama diseñada para representar un comercio real de café de especialidad. El proyecto incluye catálogo interactivo, generador de menús en PDF, formulario de contacto/pedidos con feedback visual, integración de WhatsApp flotante y SEO completo con datos estructurados JSON-LD.

---

## 🏗️ Arquitectura del Proyecto

```
empresa cafeteria/
│
├── public/                         # Archivos estáticos servidos directamente
│   ├── assets/
│   │   └── images/
│   │       ├── cafes/              # Imágenes del catálogo de cafés
│   │       ├── general/            # Imágenes de secciones (taza1, taza2, stan, curso)
│   │       ├── postres/            # Imágenes de postres
│   │       └── tortas/             # Imágenes de tortas
│   ├── favicon.svg                 # Ícono SVG vectorial del sitio
│   ├── icons.svg                   # Sprite de íconos SVG
│   ├── robots.txt                  # Instrucciones para crawlers
│   ├── sitemap.xml                 # Mapa del sitio para SEO
│   └── _headers                   # Cabeceras HTTP de seguridad (Netlify/CDN)
│
├── src/
│   ├── components/                 # Componentes de UI reutilizables
│   │   ├── Header.jsx              # Navegación fija con menú responsive (hamburguesa)
│   │   ├── Footer.jsx              # Pie de página con redes sociales y copyright
│   │   ├── ModuleOne.jsx           # Página principal (Hero → Contacto)
│   │   ├── ModuleTwo.jsx           # Catálogo completo + Cards de productos
│   │   ├── PrintMenu.jsx           # Vista de menú optimizada para PDF/impresión
│   │   ├── ContactForm.jsx         # Formulario de comanda VIP con imagen lateral
│   │   └── FloatingWhatsApp.jsx    # Botón flotante de WhatsApp con tooltip
│   │
│   ├── data/                       # Fuente única de verdad para el catálogo
│   │   ├── cafes.json              # 9 variedades de cafés de autor con precios
│   │   ├── postres.json            # 9 dulces y postres artesanales
│   │   └── tortas.json             # 9 tortas clásicas con precio por porción
│   │
│   ├── hooks/                      # Custom React Hooks
│   │   └── useSEO.js               # Actualiza title/meta description por ruta
│   │
│   ├── pages/                      # Vistas de error y estados especiales
│   │   └── NotFound.jsx            # Página 404 con diseño de branding
│   │
│   ├── App.jsx                     # Enrutador principal + SEO por ruta + layouts
│   ├── main.jsx                    # Punto de entrada React 19 + StrictMode
│   ├── index.css                   # Design tokens Tailwind v4 (@theme)
│   └── App.css                     # (Legado — sin uso activo)
│
├── index.html                      # HTML base con SEO completo (OG, JSON-LD, CSP)
├── vite.config.js                  # Build optimizado con code splitting manual
├── eslint.config.js                # ESLint flat config con plugins React
├── netlify.toml                    # Redirect SPA + headers de seguridad para Netlify
├── package.json                    # Dependencias y scripts del proyecto
├── .gitignore                      # node_modules, dist, .env excluidos
├── AGENTS.md                       # Convenciones para desarrolladores/IA
└── README.md                       # Este archivo
```

---

## 📄 Páginas y Rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `ModuleOne` | Hero, Historia, Tortas personalizadas, Catering, Cursos de barismo, Nuestro espacio, Contacto |
| `/catalogo` | `ModuleTwo` | Hero de catálogo + Cards de Cafés, Postres y Tortas con links a PDF |
| `/imprimir/cafes` | `PrintMenu` | Menú de cafés listo para imprimir/guardar como PDF |
| `/imprimir/postres` | `PrintMenu` | Menú de postres optimizado para impresión |
| `/imprimir/tortas` | `PrintMenu` | Menú de tortas optimizado para impresión |
| `/*` | `NotFound` | Página 404 con diseño de marca |

---

## 🎨 Diseño y Sistema Visual

### Paleta de Colores
```css
--color-coffee-50:   #fdfaf7   /* Fondo crema claro */
--color-coffee-100:  #f5f0e8   /* Fondo beige cálido */
--color-coffee-200:  #e6d5bc   /* Bordes suaves */
--color-coffee-400:  #c08552   /* Café medio */
--color-coffee-600:  #8d5d34   /* Texto secundario */
--color-coffee-800:  #4b382a   /* Café oscuro */
--color-coffee-900:  #2c1e14   /* Fondo secciones oscuras */
--color-accent-gold: #d4a373   /* Dorado — color primario de marca */
--color-accent-green:#606c38   /* Verde oliva — acento secundario */
```

### Tipografía
- **Sans-serif**: Sistema por defecto (Inter recomendado)
- **Serif**: `font-serif` — Para títulos de secciones premium  
- **Mono**: Para etiquetas y numeración de pasos

### Patrones de Diseño
- **Glassmorphism** — Botones de menú PDF en el Hero del catálogo
- **Modo oscuro alternado** — Secciones alternan entre `coffee-900` y `#1f1209`
- **Zigzag** — Imágenes izquierda/derecha alternadas por sección
- **Tarjetas con hover** — `hover:-translate-y-2 + hover:shadow-2xl` en productos
- **Micro-animaciones** — `transition-all duration-300 ease-in-out` global

---

## 🗺️ Flujo de Secciones (Módulo 1)

```
Hero (imagen de granos + CTA catálogo)
    ↓
Quiénes Somos (historia + imagen doble solapada)
    ↓
Tortas Personalizadas (proceso 4 pasos + imagen)
    ↓
Catering de Eventos (proceso 4 pasos + imagen invertida)
    ↓
Cursos de Barismo (proceso 4 pasos + imagen)
    ↓
Ven a Nuestro Espacio (datos + mapa/foto)
    ↓
Formulario de Comanda VIP (form + imagen + redes sociales)
```

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **React** | 19.x | Framework UI principal |
| **Vite** | 8.x | Bundler y servidor de desarrollo |
| **Tailwind CSS** | 4.x | Sistema de diseño (plugin @tailwindcss/vite) |
| **React Router DOM** | 7.x | Navegación SPA client-side |
| **Lucide React** | 1.x | Íconos SVG optimizados |

---

## ⚙️ Instalación y Desarrollo

```bash
# 1. Clonar el repositorio
git clone https://github.com/albertovz94/proyecto-cafeteria.git
cd proyecto-cafeteria

# 2. Instalar dependencias
npm install

# 3. Servidor de desarrollo
npm run dev     # http://localhost:5173

# 4. Build de producción
npm run build   # genera /dist

# 5. Preview del build
npm run preview
```

---

## 🔒 Seguridad Implementada

| Cabecera | Valor | Protección |
|---------|-------|-----------|
| `X-Frame-Options` | `SAMEORIGIN` | Anti-clickjacking |
| `X-Content-Type-Options` | `nosniff` | Anti-MIME sniffing |
| `Strict-Transport-Security` | `max-age=31536000` | Fuerza HTTPS |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Privacidad de referencia |
| `Permissions-Policy` | `geolocation=(), camera=()` | Bloquea APIs sensibles |
| `Content-Security-Policy` | configurado en `index.html` | Anti-XSS |

---

## 🔍 SEO

- ✅ `lang="es-419"` (español latinoamericano)
- ✅ Meta description, keywords, author
- ✅ Open Graph (Facebook, WhatsApp, LinkedIn)
- ✅ Twitter Card (summary_large_image)
- ✅ JSON-LD Schema `CafeOrCoffeeShop` (Google Business)
- ✅ `robots.txt` — Disallow en rutas de impresión
- ✅ `sitemap.xml` — Prioridades configuradas
- ✅ SEO dinámico por ruta via hook `useSEO.js`
- ✅ Alt text descriptivo en todas las imágenes
- ✅ Canonical URL configurada

---

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo con HMR
npm run build    # Compila para producción en /dist
npm run preview  # Sirve el build de producción localmente
npm run lint     # Ejecuta ESLint sobre todos los archivos JS/JSX
```

---

## 🚀 Despliegue en Netlify

1. Ve a [netlify.com](https://netlify.com) → **Add new site** → **Import from GitHub**
2. Selecciona el repositorio `proyecto-cafeteria`
3. Configura:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. El archivo `netlify.toml` ya configura automáticamente:
   - Redirect SPA (para que `/catalogo` no dé 404 al recargar)
   - Cabeceras de seguridad HTTP en producción

---

## 🔮 Mejoras Futuras Recomendadas

- [ ] **Backend real para el formulario** — Integrar Formspree, EmailJS o un endpoint propio
- [ ] **Imágenes únicas por producto** — Poblar los JSON con URLs individuales de cada ítem
- [ ] **Google Maps embed** — Añadir mapa interactivo en la sección "Nuestro Espacio"
- [ ] **Sistema de reservas en línea** — Calendar picker conectado a Google Calendar API
- [ ] **Multilenguaje (i18n)** — Soporte ES/EN con react-i18next
- [ ] **Modo oscuro/claro toggle** — Actualmente el diseño es fijo en modo oscuro premium
- [ ] **Lazy loading de secciones** — `React.lazy` + `Suspense` para mejorar LCP
- [ ] **PWA** — Service Worker para caché offline y experiencia app-like
- [ ] **Analytics** — Integrar Google Analytics 4 o Plausible (privacy-first)
- [ ] **Testimonios dinámicos** — Carrusel de reseñas de Google sincronizadas

---

## 👨‍💻 Autor

**Alberto** — [@albertovz94](https://github.com/albertovz94)

---

## 📄 Licencia

Este proyecto es de uso privado y comercial exclusivo del titular. Todos los derechos reservados © 2026 Oasis Café.
