# Reglas y Convenciones (AGENTS.md)

Este archivo contiene las instrucciones para cualquier agente de IA o desarrollador que trabaje en esta base de código.

---

## Stack Tecnológico

| Herramienta | Versión | Rol |
|-------------|---------|-----|
| **React** | 19.x | Framework UI — hooks funcionales únicamente |
| **Vite** | 8.x (rolldown) | Bundler — `npm run dev` / `npm run build` |
| **Tailwind CSS** | 4.x via `@tailwindcss/vite` | Estilos — sin PostCSS separado |
| **React Router DOM** | 7.x | Navegación client-side SPA |
| **Lucide React** | 1.x | **NOTA:** No soporta íconos de marcas (Instagram, Twitter, etc.) — usar SVGs inline |

---

## Paleta de Colores — OBLIGATORIO usar estas clases

```css
/* Definidas en src/index.css bajo @theme */
coffee-50   → #fdfaf7  (fondo crema, formulario)
coffee-100  → #f5f0e8  (separadores suaves)
coffee-200  → #e6d5bc  (bordes input)
coffee-400  → #c08552  (café medio)
coffee-600  → #8d5d34  (texto secundario en claro)
coffee-800  → #4b382a  (café oscuro)
coffee-900  → #2c1e14  (fondo secciones oscuras — PRINCIPAL)
accent-gold → #d4a373  (dorado — CTA, botones, énfasis)
accent-green→ #606c38  (verde oliva — acento de la sección Catering)
```

**PROHIBIDO** usar colores hex literales `[#2c1e14]` cuando existe la clase semántica equivalente.

---

## Reglas de Diseño UI (Tailwind CSS)

1. **Todos los botones CTA** usan `bg-accent-gold text-coffee-900 hover:bg-white` con `rounded-full`.
2. **Fondo de secciones**: alternar `bg-coffee-900` y `bg-[#1f1209]` para el efecto oscuro diferenciado.
3. **Imágenes principales**: siempre con `border-4 md:border-8 border-white rounded-4xl shadow-2xl`.
4. **Hover en tarjetas**: `hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`.
5. **Glassmorphism**: `bg-white/10 backdrop-blur-sm border border-white/20` para overlays en secciones oscuras.
6. **Tipografía de títulos de sección**: `font-serif text-white` sobre fondos oscuros.
7. **Micro-animaciones**: siempre `transition-all duration-300 ease-in-out`. No usar transiciones brutas.
8. **Clases canónicas**: usar `top-full` en vez de `top-[100%]`, `-translate-y-0.5` en vez de `-translate-y-[2px]`.

---

## Estructura de Archivos

```
src/
├── components/          # Componentes reutilizables y secciones de página
│   ├── Header.jsx       # Navbar fija — menú responsive
│   ├── Footer.jsx       # Pie de página con redes sociales
│   ├── ModuleOne.jsx    # Página principal (ruta "/")
│   ├── ModuleTwo.jsx    # Catálogo (ruta "/catalogo")
│   ├── PrintMenu.jsx    # Vista PDF (ruta "/imprimir/:category")
│   ├── ContactForm.jsx  # Formulario comanda + columna imagen/redes
│   └── FloatingWhatsApp.jsx
├── data/                # JSON — ÚNICA fuente de verdad del catálogo
│   ├── cafes.json       # 9 ítems: {id, name, description, price, img}
│   ├── postres.json
│   └── tortas.json
├── hooks/
│   └── useSEO.js        # Hook que actualiza title + meta description por ruta
├── pages/
│   └── NotFound.jsx     # Página 404 con diseño de marca
├── App.jsx              # BrowserRouter + Routes + SEO por ruta + BaseLayout
├── main.jsx             # createRoot + StrictMode
├── index.css            # @theme tokens + @layer base
└── App.css              # (Legado, sin uso activo — no importado)
```

---

## Rutas del Proyecto

| Ruta | Componente | Indexada en SEO |
|------|-----------|----------------|
| `/` | `ModuleOne` | ✅ Sí |
| `/catalogo` | `ModuleTwo` | ✅ Sí |
| `/imprimir/cafes` | `PrintMenu` | ❌ No (Disallow en robots.txt) |
| `/imprimir/postres` | `PrintMenu` | ❌ No |
| `/imprimir/tortas` | `PrintMenu` | ❌ No |
| `/*` (catch-all) | `NotFound` | ❌ No |

---

## Datos del Catálogo — Estructura JSON

Cada ítem en los archivos `src/data/*.json` sigue esta estructura:
```json
{
  "id": 1,
  "name": "Nombre del producto",
  "description": "Descripción atractiva del producto.",
  "price": "$4.50",
  "img": "/assets/images/[categoria]/[archivo]"
}
```
Las rutas de imagen son absolutas desde `/public`. Carpetas disponibles: `cafes/`, `postres/`, `tortas/`, `general/`.

---

## Convenciones de Código

- **Componentes**: PascalCase (`ContactForm.jsx`)
- **Hooks**: camelCase con prefijo `use` (`useSEO.js`)
- **Sin clases duplicadas**: no repetir `transition-colors` y `transition-all` en el mismo elemento
- **Formularios**: siempre `e.preventDefault()` en el `onSubmit`. El estado `submitted` controla el feedback visual
- **Íconos de redes sociales**: NO importar de `lucide-react` (no los tiene). Usar SVG inline como en `ContactForm.jsx` y `Footer.jsx`
- **SEO por ruta**: invocar `useSEO(title, description)` dentro de cada componente de página

---

## Archivos de Infraestructura

| Archivo | Propósito |
|---------|----------|
| `public/robots.txt` | Permite indexación de `/` y `/catalogo`. Bloquea `/imprimir/` |
| `public/sitemap.xml` | Rutas públicas con prioridad y frecuencia de cambio |
| `public/_headers` | Cabeceras HTTP de seguridad para CDN/Netlify |
| `netlify.toml` | Redirect SPA + headers de seguridad para Netlify |
| `vite.config.js` | Code splitting: react-vendor / router / icons |

---

## Restricciones de Seguridad

El `index.html` incluye una `Content-Security-Policy` que:
- **Permite imágenes de**: `self`, `data:`, `images.unsplash.com`
- **Bloquea**: frames, objetos incrustados, bases URI externas
- Si se añaden fuentes externas nuevas, actualizar la CSP en `index.html`

---

## Flujo de Trabajo Git

```bash
git add .
git commit -m "tipo: descripción breve del cambio"
git push
```

Convención de commits (Conventional Commits):
- `feat:` — nueva feature
- `fix:` — corrección de bug
- `style:` — cambio de estilos sin lógica
- `refactor:` — mejora de código sin cambio funcional
- `docs:` — cambios en README/AGENTS

---

## Despliegue

**Netlify** (recomendado):
- Build command: `npm run build`
- Publish directory: `dist`
- El `netlify.toml` gestiona automáticamente redirects y headers
