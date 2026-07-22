<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useTresContext, useLoop } from '@tresjs/core';
import * as THREE from 'three';

const props = defineProps<{ progress: number }>();

const { scene } = useTresContext();
const { onBeforeRender } = useLoop();

let group: THREE.Group;
let sunMesh: THREE.Mesh;
let wireframe: THREE.LineSegments;
let glowSprite: THREE.Sprite;
let ringParticles: THREE.Points;

function fract(x: number): number {
    return x - Math.floor(x);
}

function hash21(ix: number, iy: number): number {
    return fract(Math.sin(ix * 12.9898 + iy * 78.233) * 43758.5453);
}

function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
}

function smoothstepEdge(t: number): number {
    return t * t * (3 - 2 * t);
}

function valueNoise2D(x: number, y: number): number {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    const fx = x - ix;
    const fy = y - iy;
    const sx = smoothstepEdge(fx);
    const sy = smoothstepEdge(fy);
    const a = hash21(ix, iy);
    const b = hash21(ix + 1, iy);
    const c = hash21(ix, iy + 1);
    const d = hash21(ix + 1, iy + 1);
    return lerp(lerp(a, b, sx), lerp(c, d, sx), sy);
}

function fbm(x: number, y: number): number {
    let value = 0;
    let amp = 0.5;
    let freq = 1;
    for (let i = 0; i < 4; i++) {
        value += valueNoise2D(x * freq, y * freq) * amp;
        amp *= 0.5;
        freq *= 2;
    }
    return value;
}

function createSunNoiseTexture(): THREE.CanvasTexture | null {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            const i = (y * canvas.width + x) * 4;
            const n = fbm(x / 80, y / 60);
            const r = 140 + n * 115;
            const g = 30 + n * 130;
            const b = 5 + n * 45;
            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
            data[i + 3] = 255;
        }
    }

    ctx.putImageData(imageData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.needsUpdate = true;
    return texture;
}

function createGlowTexture(): THREE.CanvasTexture | null {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, 'rgba(255, 180, 50, 1)');
    gradient.addColorStop(0.15, 'rgba(255, 150, 20, 0.8)');
    gradient.addColorStop(0.4, 'rgba(255, 100, 0, 0.3)');
    gradient.addColorStop(0.7, 'rgba(200, 50, 0, 0.1)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);

    return new THREE.CanvasTexture(canvas);
}

onMounted(() => {
    group = new THREE.Group();

    const noiseTex = createSunNoiseTexture();

    const geo = new THREE.IcosahedronGeometry(1.2, 1);
    const mat = new THREE.MeshStandardMaterial({
        map: noiseTex,
        color: 0xf59e0b,
        emissive: 0xf97316,
        emissiveMap: noiseTex,
        emissiveIntensity: 0.45,
        metalness: 0.1,
        roughness: 0.7,
    });
    sunMesh = new THREE.Mesh(geo, mat);
    group.add(sunMesh);

    const edges = new THREE.EdgesGeometry(geo);
    const wireMat = new THREE.LineBasicMaterial({
        color: 0xff8800,
        transparent: true,
        opacity: 0.3,
    });
    wireframe = new THREE.LineSegments(edges, wireMat);
    group.add(wireframe);

    const spriteMat = new THREE.SpriteMaterial({
        map: createGlowTexture(),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: 0.65,
    });
    glowSprite = new THREE.Sprite(spriteMat);
    glowSprite.scale.set(10, 10, 1);
    group.add(glowSprite);

    const ringCount = 200;
    const ringPos = new Float32Array(ringCount * 3);
    for (let i = 0; i < ringCount; i++) {
        const angle = (i / ringCount) * Math.PI * 2;
        const radius = 2 + Math.random() * 0.5;
        ringPos[i * 3] = Math.cos(angle) * radius;
        ringPos[i * 3 + 1] = (Math.random() - 0.5) * 0.3;
        ringPos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    const ringGeo = new THREE.BufferGeometry();
    ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPos, 3));
    const ringMat = new THREE.PointsMaterial({
        color: 0xffaa44,
        size: 0.04,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
    });
    ringParticles = new THREE.Points(ringGeo, ringMat);
    group.add(ringParticles);

    scene.value.add(group);
});

onBeforeRender(({ delta }) => {
    if (!sunMesh) return;

    const opacity = 0.12 + smoothstep(1 - props.progress * 1.2) * 0.88;
    group.visible = opacity > 0.01;

    if (!group.visible) return;

    sunMesh.rotation.x += delta * 0.3;
    sunMesh.rotation.y += delta * 0.5;
    wireframe.rotation.copy(sunMesh.rotation);
    ringParticles.rotation.y += delta * 0.6;
    glowSprite.material.opacity = 0.65 * opacity;

    const scale = 1 + Math.sin(Date.now() * 0.001) * 0.05;
    sunMesh.scale.set(scale, scale, scale);

    const tex = (sunMesh.material as THREE.MeshStandardMaterial).map;
    if (tex) {
        tex.offset.x += delta * 0.025;
        tex.offset.y += delta * 0.012;
    }
});

function smoothstep(t: number) {
    return Math.max(0, Math.min(1, t * t * (3 - 2 * t)));
}

onUnmounted(() => {
    scene.value.remove(group);
});
</script>

<template></template>
