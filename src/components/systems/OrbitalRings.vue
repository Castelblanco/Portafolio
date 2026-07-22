<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useTresContext, useLoop } from '@tresjs/core';
import * as THREE from 'three';

const props = defineProps<{ progress: number }>();

const { scene } = useTresContext();
const { onBeforeRender } = useLoop();

let group: THREE.Group;
let ring1: THREE.LineLoop;
let ring2: THREE.LineLoop;
let spheres1: THREE.Group;
let spheres2: THREE.Group;

const SKILL_COUNT = 12;

function createRing(
    radiusX: number,
    radiusZ: number,
    yOffset: number,
    color: number,
    opacity: number,
): THREE.LineLoop {
    const pts: THREE.Vector3[] = [];
    const segments = 64;
    for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        pts.push(
            new THREE.Vector3(
                Math.cos(theta) * radiusX,
                yOffset,
                Math.sin(theta) * radiusZ,
            ),
        );
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
    });
    return new THREE.LineLoop(geo, mat);
}

function createSpheresOnRing(
    count: number,
    radiusX: number,
    radiusZ: number,
    yOffset: number,
    color: number,
): THREE.Group {
    const grp = new THREE.Group();
    const sphereGeo = new THREE.SphereGeometry(0.15, 8, 8);

    for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 2 + Math.random() * 0.1;
        const mat = new THREE.MeshStandardMaterial({
            color,
            emissive: color,
            emissiveIntensity: 0.3,
        });
        const mesh = new THREE.Mesh(sphereGeo, mat);
        mesh.position.set(Math.cos(theta) * radiusX, yOffset, Math.sin(theta) * radiusZ);
        grp.add(mesh);
    }

    return grp;
}

onMounted(() => {
    group = new THREE.Group();

    const colorFront = 0x06b6d4;
    const colorBack = 0x10b981;

    ring1 = createRing(6, 4.5, 0, colorFront, 0.25);
    group.add(ring1);

    ring2 = createRing(8, 6, 0, colorBack, 0.2);
    group.add(ring2);

    spheres1 = createSpheresOnRing(SKILL_COUNT, 6, 4.5, 0, colorFront);
    group.add(spheres1);

    spheres2 = createSpheresOnRing(SKILL_COUNT + 4, 8, 6, 0, colorBack);
    group.add(spheres2);

    group.rotation.x = 0.15;
    scene.value.add(group);
});

onBeforeRender(({ delta }) => {
    if (!group) return;

    const opacity = Math.max(0, Math.min(1, ((props.progress - 0.15) / 0.15) * 2));
    group.visible = opacity > 0.01;

    if (!group.visible) return;

    group.rotation.y += delta * 0.15;

    group.children.forEach((child) => {
        if (child instanceof THREE.LineLoop) {
            (child.material as THREE.LineBasicMaterial).opacity = 0.25 * opacity;
        }
    });
});

onUnmounted(() => {
    scene.value.remove(group);
});
</script>

<template></template>
