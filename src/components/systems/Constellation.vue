<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useTresContext, useLoop } from '@tresjs/core';
import * as THREE from 'three';

const props = defineProps<{ progress: number }>();

const { scene } = useTresContext();
const { onBeforeRender } = useLoop();

let group: THREE.Group;
let nodes: THREE.Mesh[] = [];
let lines: THREE.LineSegments;
let glowSprites: THREE.Sprite[] = [];
let flowDots: THREE.Mesh[] = [];
let flowProgress: number[] = [];

const nodePositions = [
    new THREE.Vector3(-5, 1.5, 0),
    new THREE.Vector3(-2, -1, 0.5),
    new THREE.Vector3(0, 2, -0.5),
    new THREE.Vector3(2, -1, 0.5),
    new THREE.Vector3(5, 1.5, 0),
];

function createGlowTexture(): THREE.CanvasTexture | null {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(200, 230, 255, 0.6)');
    gradient.addColorStop(0.6, 'rgba(100, 180, 255, 0.1)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(canvas);
}

onMounted(() => {
    group = new THREE.Group();
    const glowTex = createGlowTexture();

    const sphereGeo = new THREE.SphereGeometry(0.25, 12, 12);

    for (const pos of nodePositions) {
        const mat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            emissive: 0x60a5fa,
            emissiveIntensity: 0.15,
        });
        const mesh = new THREE.Mesh(sphereGeo, mat);
        mesh.position.copy(pos);
        group.add(mesh);
        nodes.push(mesh);

        const spriteMat = new THREE.SpriteMaterial({
            map: glowTex,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            opacity: 0.3,
        });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.position.copy(pos);
        sprite.scale.set(4, 4, 1);
        group.add(sprite);
        glowSprites.push(sprite);
    }

    const positions: number[] = [];
    for (let i = 0; i < nodePositions.length - 1; i++) {
        const a = nodePositions[i];
        const b = nodePositions[i + 1];
        if (!a || !b) continue;
        positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const lineMat = new THREE.LineBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.2,
    });
    lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    const dotGeo = new THREE.SphereGeometry(0.08, 6, 6);
    for (let i = 0; i < nodePositions.length - 1; i++) {
        const dotMat = new THREE.MeshBasicMaterial({ color: 0x7dd3fc });
        const dot = new THREE.Mesh(dotGeo, dotMat);
        const a = nodePositions[i];
        const b = nodePositions[i + 1];
        if (!a || !b) continue;
        dot.position.copy(a);
        group.add(dot);
        flowDots.push(dot);
        flowProgress.push(i / (nodePositions.length - 1));

        const dotGlowMat = new THREE.SpriteMaterial({
            map: glowTex,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            opacity: 0.35,
        });
        const dotGlow = new THREE.Sprite(dotGlowMat);
        dotGlow.scale.set(1.2, 1.2, 1);
        dot.add(dotGlow);
    }

    scene.value.add(group);
});

onBeforeRender(({ delta }) => {
    if (!group || !nodes.length) return;

    const raw = (props.progress - 0.4) / 0.4;
    const opacity = Math.max(0, Math.min(1, raw * 2.5));
    group.visible = opacity > 0.01;

    if (!group.visible) return;

    const pulse = 1 + Math.sin(Date.now() * 0.002) * 0.15;

    for (let i = 0; i < nodes.length; i++) {
        const nodeOpacity = Math.max(0, Math.min(1, (opacity - i * 0.1) * 2));
        const node = nodes[i];
        const sprite = glowSprites[i];
        if (!node || !sprite) continue;

        node.visible = nodeOpacity > 0.01;
        sprite.visible = nodeOpacity > 0.01;

        if (!node.visible) continue;

        node.scale.setScalar(nodeOpacity * pulse);
        sprite.material.opacity = 0.3 * nodeOpacity;
        sprite.scale.setScalar(4 * nodeOpacity);
    }

    const mat = lines.material as THREE.LineBasicMaterial;
    mat.opacity = 0.2 * opacity;

    for (let i = 0; i < flowDots.length; i++) {
        const fp = flowProgress[i]!;
        flowProgress[i] = (fp + delta * 0.3) % 1;
        const a = nodePositions[i];
        const b = nodePositions[i + 1];
        if (!a || !b) continue;
        flowDots[i]!.position.lerpVectors(a, b, flowProgress[i]!);
        const glow = flowDots[i]!.children[0] as THREE.Sprite | undefined;
        if (glow) {
            const brightness =
                opacity * (0.3 + 0.7 * Math.sin(flowProgress[i]! * Math.PI));
            glow.material.opacity = brightness * 0.4;
            const s = 0.8 + 0.8 * Math.sin(flowProgress[i]! * Math.PI);
            glow.scale.setScalar(s);
        }
    }

    group.rotation.y += delta * 0.02;
});

onUnmounted(() => {
    scene.value.remove(group);
});
</script>

<template></template>
