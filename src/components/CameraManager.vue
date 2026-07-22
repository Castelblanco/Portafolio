<script setup lang="ts">
import { useTresContext, useLoop } from '@tresjs/core';
import * as THREE from 'three';

const props = defineProps<{ progress: number; mouseX: number; mouseY: number }>();

const { camera } = useTresContext();
const { onBeforeRender } = useLoop();

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
}

function smoothstep(t: number) {
    return t * t * (3 - 2 * t);
}

type Keyframe = { t: number; pos: THREE.Vector3 };

const keyframes: Keyframe[] = [
    { t: 0, pos: new THREE.Vector3(0, 0, 5) },
    { t: 0.3, pos: new THREE.Vector3(0, 0, 15) },
    { t: 0.55, pos: new THREE.Vector3(5, 0, 12) },
    { t: 0.8, pos: new THREE.Vector3(0, 0, 10) },
    { t: 1, pos: new THREE.Vector3(0, 0, 4) },
];

function getTargetPosition(progress: number): THREE.Vector3 {
    if (progress <= keyframes[0]!.t) return keyframes[0]!.pos.clone();
    if (progress >= keyframes[keyframes.length - 1]!.t) {
        return keyframes[keyframes.length - 1]!.pos.clone();
    }

    for (let i = 0; i < keyframes.length - 1; i++) {
        const kf = keyframes[i];
        const next = keyframes[i + 1];
        if (kf && next && progress >= kf.t && progress <= next.t) {
            const local = (progress - kf.t) / (next.t - kf.t);
            const eased = smoothstep(local);
            return new THREE.Vector3(
                lerp(kf.pos.x, next.pos.x, eased),
                lerp(kf.pos.y, next.pos.y, eased),
                lerp(kf.pos.z, next.pos.z, eased),
            );
        }
    }

    return keyframes[0]!.pos.clone();
}

onBeforeRender(() => {
    const cam = camera.activeCamera.value;
    if (!cam) return;

    const target = getTargetPosition(props.progress);
    const parallaxOffset = 0.3;

    target.x += props.mouseX * parallaxOffset;
    target.y += props.mouseY * parallaxOffset * 0.5;

    cam.position.x += (target.x - cam.position.x) * 0.04;
    cam.position.y += (target.y - cam.position.y) * 0.04;
    cam.position.z += (target.z - cam.position.z) * 0.04;
    cam.lookAt(0, 0, 0);
});
</script>

<template></template>
