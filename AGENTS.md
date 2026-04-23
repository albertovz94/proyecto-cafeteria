# Reglas y Convenciones (AGENTS.md)

Este archivo contiene las instrucciones para cualquier agente de IA o desarrollador que trabaje en esta base de código:

## Stack Tecnológico
* Vite + React
* Tailwind CSS
* Diseño centrado en UI Premium

## Reglas de Diseño UI (Tailwind CSS)
1. **Colores de Dominio:** Usar estrictamente la paleta `coffee` y `accent` configurada en `tailwind.config.js`.
2. **Impacto Visual:**
   * Utilizar gradientes sutiles y modo oscuro o tonos café oscuros (`#2c1e14`, `#4b382a`) como fondos principales si es requerido por el contraste, o fondos limpios (`#fdfaf7`, `#f5f0e8`) para un aspecto natural y artesanal.
   * Evitar estilos genéricos y botones planos. Implementar bordes sutiles, efectos "glassmorphism", y sombras profundas pero suaves.
   * La tipografía debe ser moderna (ej: 'Inter' o fuentes elegantes como 'Playfair Display' si se configura).
3. **Animaciones:** Todas las interacciones, como "hover" en botones y tarjetas de productos, deben tener transiciones suaves (`duration-300`, `ease-in-out`, escalar elementos sutilmente). No deben existir transiciones bruscas.

## Estructura de Componentes
* `src/components/`: Para botones, tarjetas reutilizables (CardProducto), o iconos.
* `src/sections/`: Para las divisiones grandes (Módulo 1 de historia y Módulo 2 de productos/eventos).
* Separar la lógica o la data ("mocks" de 5 cafés, 5 tortas, etc.) en un archivo como `src/data/mockData.js`.
