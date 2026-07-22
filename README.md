# Portafolio — Castelblanco

Portfolio personal con temática de sistema solar, construido como SPA con Vue 3 + Three.js.

## Stack

- **Framework:** Vue 3.5 (Composition API + `<script setup>`)
- **3D:** Three.js + TresJS + Cientos
- **Build:** Vite 8 + TypeScript 6 + vue-tsc
- **Styling:** Tailwind CSS v4 + devicon icons
- **Animations:** GSAP + Lenis (smooth scroll)
- **Post-processing:** UnrealBloomPass

## Secciones

- **Hero** — nombre con gradiente, scroll bounce indicator
- **Skills** — 35 tecnologías en 4 categorías (Frontend, Backend, Database, DevOps)
- **Experience** — línea de tiempo con 4 proyectos formato CAR (Contexto/Acción/Resultado)
- **Contact** — enlaces a LinkedIn, GitHub, Email

## Escena 3D

6 sistemas que responden al scroll y mouse parallax:

| Sistema | Descripción |
|---------|-------------|
| Starfield | 3000 partículas de fondo |
| CentralStar | Sol con textura procedural fbm + wireframe + glow + partículas orbitales |
| OrbitalRings | 2 anillos concéntricos con esferas rotando |
| Constellation | 5 nodos conectados con puntos de flujo animados |
| NebulaContact | 600 partículas de colores en sección contacto |
| BloomEffect | Post-processing glow global |

## Desarrollo

```sh
bun i
bun --bun dev  # localhost:5173
bun run build  # type-check + build
```
