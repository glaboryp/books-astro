---
name: Libros de programación
description: Recomendaciones personales de libros de programación, curadas por Gloria
colors:
  primary: '#1d4ed8'
  primary-hover: '#1e40af'
  primary-muted-bg: '#60a5fa'
  primary-muted-text: '#172554'
  secondary-bg: '#4ade80'
  secondary-text: '#14532d'
  tertiary: '#0ea5e9'
  tertiary-deep: '#0369a1'
  tertiary-fill: '#e0f2fe'
  neutral-bg: '#ffffff'
  neutral-bg-dark: '#262626'
  neutral-text-dark-mode: '#f3f4f6'
  neutral-text-muted: '#1f2937'
  neutral-text-muted-dark: '#d1d5db'
  neutral-icon-dark: '#9ca3af'
typography:
  display:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    fontSize: 'clamp(2.25rem, 8vw, 6rem)'
    fontWeight: 900
    lineHeight: 1
    letterSpacing: 'normal'
  headline:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    fontSize: '2.25rem'
    fontWeight: 900
    lineHeight: 1.15
  display-sub:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    fontSize: 'clamp(2.25rem, 6vw, 3.625rem)'
    fontWeight: 900
    lineHeight: 1
  body:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 500
rounded:
  sm: '4px'
  md: '6px'
  lg: '8px'
  full: '9999px'
spacing:
  sm: '8px'
  md: '16px'
  lg: '32px'
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.neutral-bg}'
    rounded: '{rounded.lg}'
    padding: '10px 20px'
  button-primary-hover:
    backgroundColor: '{colors.primary-hover}'
  badge-free:
    backgroundColor: '{colors.secondary-bg}'
    textColor: '{colors.secondary-text}'
    rounded: '{rounded.sm}'
    padding: '2px 10px'
  badge-paid:
    backgroundColor: '{colors.primary-muted-bg}'
    textColor: '{colors.primary-muted-text}'
    rounded: '{rounded.sm}'
    padding: '2px 10px'
---

# Design System: Libros de programación

## Overview

**Creative North Star: "The Reading Nook"**

Este no es un catálogo ni una tienda: es la estantería personal de Gloria, abierta a quien esté empezando (o no) en programación. Cada libro está ahí porque alguien lo leyó de verdad, y el diseño debe sentirse como que alguien real te está recomendando algo, no como un listado generado. La densidad es alta (una parrilla de portadas, como libros apretados en un estante) pero la interacción es cálida: las portadas reaccionan al tacto (`hover:scale-105`, `hover:contrast-125`, `hover:shadow-2xl`) en vez de quedarse rígidas.

Rechazo confirmado: nada de estética de e-commerce (carritos, precios destacados, sensación de venta). La distinción "Gratuito" / "De pago" es información honesta sobre acceso, no un precio a la venta.

**Key Characteristics:**

- Portada de libro como protagonista visual; el texto es soporte.
- Un único acento de acción (azul) para toda decisión que el visitante puede tomar.
- Superficie plana en reposo; la sombra aparece solo como respuesta al hover.
- Título del sitio como pieza tipográfica propia (mayúsculas, peso máximo), no un logo.

## Colors

La paleta es la de Tailwind por defecto, sin tokens propios, y usa el azul como único acento de acción real del sitio.

### Primary

- **Azul confiable** (`#1d4ed8` / hover `#1e40af`): único color de acción — botones "Leer ahora" / "Comprar ahora" en la ficha de libro, y el botón de volver en el header. Si algo es azul, es pulsable.
- **Azul apagado** (`#60a5fa` fondo / `#172554` texto): variante de baja intensidad del mismo azul, usada solo en la etiqueta "De pago" — es información, no una llamada a la acción, por eso baja de intensidad en vez de cambiar de familia de color. Texto oscurecido a `blue-950` para superar 4.5:1 de contraste AA (antes fallaba en 3.9:1 con `blue-900`).

### Secondary

- **Verde recomendación** (`#4ade80` fondo / `#14532d` texto): usado exclusivamente en la etiqueta "Gratuito". Es el único lugar del sitio donde el verde aparece.

### Tertiary

- **Sky enlace** (`#0ea5e9`, modo oscuro; `#0369a1`, modo claro): color de los enlaces de texto (crédito del footer) y del icono de cambio de tema. Nunca se usa en superficies ni botones, solo en elementos de navegación secundaria.

### Neutral

- **Blanco / Neutral 800** (`#ffffff` claro, `#262626` oscuro): fondo de página.
- **Gris 800 / Gris 300** (`#1f2937` claro, `#d1d5db` oscuro): texto secundario (nombre de autor).
- **Gris 400** (`#9ca3af`): trazo del icono de tema en modo oscuro.

### Named Rules

**The One Accent Rule.** El azul es el único color que implica "puedes pulsar esto". El verde y el sky no se usan nunca para llamadas a la acción, solo para estado (gratis) y navegación de texto (enlaces).

## Typography

**Display / Body Font:** `ui-sans-serif, system-ui, sans-serif` (pila del sistema; no hay webfont cargada).

**Character:** Sin tipografía custom, el peso hace todo el trabajo — el contraste entre `font-black` (900) para títulos y peso normal para cuerpo de texto es la única jerarquía tipográfica del sitio.

### Hierarchy

- **Display** (900, `clamp(2.25rem, 8vw, 6rem)`, line-height 1, mayúsculas): la primera línea del lockup del título del sitio ("Libros de") en home.
- **Display Sub** (900, `clamp(2.25rem, 6vw, 3.625rem)`, line-height 1, mayúsculas): la segunda línea del lockup ("programación"), deliberadamente más pequeña que Display — mismo peso, escalón propio del mismo lockup, no un descuido.
- **Headline** (900, 2.25rem/`text-4xl`, line-height 1.15): título del libro en su ficha individual.
- **Body** (400, 1.125rem/`text-lg`): descripción del libro en su ficha.
- **Label** (500, 0.875rem/`text-sm`): texto de botones ("Leer ahora", "Comprar ahora") y badges gratis/de pago (`text-xs font-semibold`).

### Named Rules

**The One Weight Jump Rule.** La jerarquía se construye saltando directamente de peso normal a `font-black` (900); no hay pesos intermedios (500, 600, 700) en el sistema actual.

## Layout

Contenedor único centrado (`max-w-4xl`, `m-auto`) en todas las páginas — no hay ancho completo en ningún punto. La portada usa una rejilla de libros (`grid-cols-2` móvil → `grid-cols-3` desde `md`, `gap-3`/`gap-y-5`, `px-4`): densa, tipo estantería. La ficha de libro pasa a una rejilla de dos columnas desde `sm` (`grid-cols-[300px_1fr] grid-rows-[auto_auto]`, `gap-x-12`): portada arriba a la izquierda, CTA debajo en la misma columna, contenido (badge/título/descripción/autor) a la derecha ocupando ambas filas.

**En móvil (una sola columna)**, portada, contenido y CTA son tres elementos independientes ordenados explícitamente (`order-1`/`order-2`/`order-3`, no orden del DOM) para que título y descripción precedan siempre al botón de acción — el visitante nunca ve el CTA antes de la razón para confiar en él.

## Elevation & Depth

El sistema es plano en reposo. La sombra existe únicamente como respuesta a la interacción, nunca como estado por defecto: la portada de un libro gana `shadow-2xl` solo al hover, y el botón de tema tiene un `shadow-sm` sutil constante como única excepción (es un botón flotante fijo sobre el contenido, necesita separarse del fondo).

### Named Rules

**The Hover-Reveals-Depth Rule.** Ningún elemento tiene sombra en reposo salvo el botón de tema flotante. La sombra es feedback de interactividad, no decoración de superficie.

## Shapes

Esquinas suavemente redondeadas en casi todo (`rounded`/`rounded-lg`, 4–8px): portadas de libro, botones, badges. El botón de volver en la ficha de libro es la única forma completamente circular (`rounded-full`) del sitio, reservada a un botón de icono puro. Sin bordes visibles en ningún componente — la separación se hace por espacio y color, nunca por línea.

### Favicon / Brand Mark

`public/favicon.svg` — tres barras horizontales redondeadas apiladas (una mini estantería de libros vista de canto), en los tres pasos ya documentados de la rampa Primary (`#1d4ed8`, `#3b82f6`, `#60a5fa`), sin fondo. Reutiliza tokens existentes en vez de introducir un color nuevo.

## Components

### Buttons

- **Shape:** `rounded-lg` (8px) para botones con texto; `rounded-full` para el botón de icono (volver).
- **Primary:** fondo azul (`#1d4ed8`), texto blanco, `text-sm font-medium`, padding `10px 20px` (`px-5 py-2.5`), icono inline a la izquierda del texto.
- **Hover:** oscurece a `#1e40af` (`hover:bg-blue-800`), sin transformación de escala.
- **Icon-only (volver):** mismo azul, `rounded-full`, sin texto, solo la flecha SVG.

### Badges (Gratis / De pago)

- **Style:** `text-xs font-semibold`, padding `2px 10px` (`px-2.5 py-0.5`), `rounded` (4px), sin borde.
- **Gratis:** fondo verde `#4ade80`, texto `#14532d`.
- **De pago:** fondo azul apagado `#60a5fa`, texto `#172554`.

### Book Card (BookItem)

- **Corner Style:** `rounded` en la imagen de portada (4px).
- **Aspect ratio:** `128/165` en la rejilla, `389/500` en la ficha individual — mismo objeto visual, dos tamaños.
- **Hover:** `scale-105` + `contrast-125` + `shadow-2xl`, con `transition-all` — la portada reacciona como un objeto físico al pasar el cursor.
- **Badge:** la etiqueta gratis/de pago flota sobre la esquina superior de la portada en la rejilla.

### Theme Toggle

- **Style:** botón circular-suave (`rounded-md`), fijo en `top-5 right-5`, `shadow-sm` constante, fondo blanco/`neutral-700` en oscuro.
- **Icon:** sol/luna SVG que cambia de trazo (`stroke-sky-500` claro, `stroke-gray-400` oscuro) y hace crossfade de opacidad entre los dos estados.

### Header / Title Lockup

- **Style:** título centrado, dos líneas apiladas ("Libros de" + "programación" más pequeño), `font-black uppercase`.
- **Home (`<h1>`):** `text-6xl md:text-8xl`, el elemento tipográfico más grande del sitio.
- **Rutas de detalle (`<p>`, no `<h1>`):** se convierte en un wordmark pequeño y persistente (`text-sm md:text-base`, segunda línea `text-xs md:text-sm`) — deliberadamente más pequeño que el `<h1>` real de la página (el título del libro), y aparece junto al botón circular de volver, fijo arriba a la izquierda. Solo hay un `<h1>` por página.

## Do's and Don'ts

### Do:

- **Do** usar el azul (`#1d4ed8`/`#1e40af`) como único color de acción/CTA del sitio.
- **Do** dejar los componentes planos en reposo y usar sombra solo como respuesta al hover (The Hover-Reveals-Depth Rule).
- **Do** tratar la portada del libro como el elemento con más peso visual de cualquier composición.
- **Do** usar un anillo de foco azul en todo elemento interactivo (`#1d4ed8` en claro, `#60a5fa` en oscuro — cada uno ≥3:1 contra su fondo) en vez del outline por defecto del navegador.
- **Do** mantener la voz de Gloria visible en el propio HTML (subtítulo del header en home, crédito en el footer), no solo en el README.

### Don't:

- **Don't** introducir un segundo color de acento para acciones — el verde y el sky están reservados a estado (gratis) y navegación de texto (enlaces), no a botones.
- **Don't** introducir amarillo u otro color fuera de la paleta documentada en ningún CTA — incluida la 404, que ya usa el azul del resto del sitio.
- **Don't** añadir bordes visibles a tarjetas, botones o badges; la separación se resuelve con espacio y color, no con líneas.
