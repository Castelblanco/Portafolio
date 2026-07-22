<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useTresContext, useLoop } from '@tresjs/core';
import * as THREE from 'three';

const props = defineProps<{ progress: number }>();

const { scene } = useTresContext();
const { onBeforeRender } = useLoop();

let points: THREE.Points;
let geometry: THREE.BufferGeometry;
let material: THREE.PointsMaterial;

const PARTICLE_COUNT = 600;

onMounted(() => {
    geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    const palette = [
        new THREE.Color(0xa855f7),
        new THREE.Color(0xec4899),
        new THREE.Color(0x06b6d4),
        new THREE.Color(0xf59e0b),
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = Math.random() ** 1.5 * 10;

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
        positions[i * 3 + 2] = r * Math.cos(phi);

        const c = palette[Math.floor(Math.random() * palette.length)];
        if (!c) continue;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;

        sizes[i] = 0.05 + Math.random() * 0.15;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    material = new THREE.PointsMaterial({
        size: 0.08,
        transparent: true,
        opacity: 0,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
    });

    points = new THREE.Points(geometry, material);
    scene.value.add(points);
});

onBeforeRender(({ delta }) => {
    if (!points) return;

    const raw = (props.progress - 0.48) / 0.25;
    const opacity = Math.max(0, Math.min(1, raw * 2));
    points.visible = opacity > 0.01;

    if (!points.visible) return;

    material.opacity = opacity * 0.7;
    points.rotation.y += delta * 0.05;
    points.rotation.x += delta * 0.01;

    const breathe = 1 + Math.sin(Date.now() * 0.001) * 0.05;
    points.scale.setScalar(breathe);
});

onUnmounted(() => {
    scene.value.remove(points);
    geometry.dispose();
    material.dispose();
});
</script>

<template></template>
