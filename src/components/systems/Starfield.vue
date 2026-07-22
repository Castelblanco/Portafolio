<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useTresContext, useLoop } from '@tresjs/core';
import * as THREE from 'three';

const { scene } = useTresContext();
const { onBeforeRender } = useLoop();

const STAR_COUNT = 3000;

let points: THREE.Points;
let geometry: THREE.BufferGeometry;
let material: THREE.PointsMaterial;

onMounted(() => {
    geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 400;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.3,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
    });

    points = new THREE.Points(geometry, material);
    scene.value.add(points);
});

let elapsed = 0;

onBeforeRender(({ delta }) => {
    if (!points) return;
    elapsed += delta;
    points.rotation.y = elapsed * 0.01;
});

onUnmounted(() => {
    scene.value.remove(points);
    geometry.dispose();
    material.dispose();
});
</script>

<template></template>
