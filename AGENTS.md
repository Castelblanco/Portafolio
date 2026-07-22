# Portafolio v3 — Agent Guide

## Commands

- `bun dev` — dev server (localhost:5173)
- `bun run type-check` — vue-tsc type check only
- `bun run build` — type-check + vite build (run this before any commit)
- `bun run lint` — biome check (lint + format)

## Project structure

- SPA (no vue-router, single page scroll). Sections: hero → skills → experience → contact.
- Fixed overlay: ThreeScene (3D canvas with bloom) spans full viewport behind sections.
- Navbar (right side) is position fixed.

## Key architecture

- `src/components/systems/` — 6 Three.js scene objects: Starfield, CentralStar, OrbitalRings, Constellation, NebulaContact, BloomEffect.
- `src/components/CameraManager.vue` — interpolates camera through 5 keyframes by scroll progress + mouse parallax.
- `src/components/ThreeScene.vue` — wraps `<TresCanvas>` + all systems + CameraManager + BloomEffect.
- `src/composables/` — `useScrollManager` (Lenis smooth scroll + IntersectionObserver for active section), `useMouseParallax` (normalized mouse coords).
- `src/data/` — skills (4 categories), projects (context/action/result format), socials.
- `src/components/sections/` — 2D overlay sections with Tailwind.

## Data conventions

- Project type has `context | action | result | highlights` (no `description` or `period`).
- Skill icons use `devicon` CSS classes (e.g. `devicon-react-original`). Dark icons (nextjs, socketio, flask, express, prisma) need `filter: brightness(0) invert(1)` via style.css to be visible on dark bg.

## Style & tooling

- Biome: 4-space indent, single quotes, trailing commas, LF endings.
- TS: `noUncheckedIndexedAccess` enabled → array lookups need `!` assertion.
- Tailwind v4 via `@import 'tailwindcss'` + `@theme` custom colors (space-*, star-*).
- No test framework configured.

## 3D gotchas

- BloomEffect overrides `renderer.instance.render` — must save original ref to avoid infinite recursion.
- All `<script setup>` Vue SFCs must have `<template></template>` even if empty.
- All `onBeforeRender` callbacks need `{ delta }` destructure.
