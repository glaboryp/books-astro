# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Personas aprendiendo a programar (principiantes o no) que buscan qué libro de programación leer a continuación. Visita puntual, orientada a decisión de lectura, sin cuenta ni seguimiento de progreso.

## Product Purpose

Reunir en un solo lugar los libros de programación que Gloria (la creadora) ha leído o le han recomendado, para que otras personas empezando (o no) en programación tengan una fuente de recomendaciones útil a la hora de elegir su próxima lectura.

## Positioning

Curación personal y de confianza: cada libro está ahí porque alguien (Gloria o quien contribuye vía PR) lo leyó de verdad o se lo recomendaron, no una lista generada algorítmicamente ni un agregador. Esto es lo que el diseño debe transmitir y reforzar, no diluir en una estética de catálogo genérico.

## Operating Context

Sitio estático (Astro) sin backend ni autenticación. Los datos de libros viven en `src/data/books.js` y las portadas en `public/img/{id}.webp`. El proyecto es open source en GitHub y crece por contribuciones externas vía pull request (ver README).

## Capabilities and Constraints

- Cada libro tiene: `id`, `title`, `description`, `author`, `link`, `gratis` (booleano gratis/de pago).
- La estructura de `books.js` (esos seis campos) y la convención de portadas en `/img/{id}.webp` son un contrato con quien contribuye vía PR y no deben romperse en el rediseño.
- El flujo de contribución debe seguir siendo simple: añadir un libro implica solo editar `books.js` + subir una imagen, sin herramientas de build ni CMS adicionales.
- Distinción visual clara entre "Gratuito" y "De pago" (ya existente como badge) es un dato funcional a preservar, no solo decorativo.
- Soporte de modo claro/oscuro ya implementado (`ThemeIcon`).
- Idioma del sitio: español. No se ha confirmado plan de internacionalización; se trata como no decidido.

## Evidence on Hand

- 10 libros reales en `books.js`, cada uno con descripción, autor y enlace real (algunos gratuitos, algunos de pago, algunos con traducción al español).
- README con la voz original de Gloria explicando el propósito del proyecto.
- Crédito explícito en el footer: el proyecto está "basado en el trabajo de Addy Osmani".

## Product Principles

1. La curación personal es el producto: el diseño debe hacer sentir que hay una persona real detrás de cada recomendación, no un catálogo anónimo.
2. No añadir fricción a la contribución: cualquier cambio visual debe seguir siendo compatible con "edita `books.js` + sube una imagen".
3. La decisión del visitante (gratis vs. de pago, qué libro leer) debe ser rápida de tomar; prioriza escaneabilidad sobre ornamentación.
4. Preservar los datos reales existentes (títulos, autores, enlaces, badges) como verdad de producto; el rediseño no debe inventar ni alterar contenido.

## Accessibility & Inclusion

No se ha establecido un requisito de accesibilidad específico más allá de las prácticas estándar (contraste, alt text ya presente en portadas).
