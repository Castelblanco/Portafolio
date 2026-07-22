<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useTresContext } from '@tresjs/core';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import * as THREE from 'three';

const { renderer: rendererManager, scene, camera } = useTresContext();

let composer: EffectComposer | null = null;
let bloomPass: UnrealBloomPass | null = null;
let origRender: ((scene: THREE.Object3D, camera: THREE.Camera) => void) | null = null;

function onResize() {
    if (!composer || !bloomPass) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    composer.setSize(w, h);
    bloomPass.resolution.set(w, h);
}

onMounted(() => {
    const r = rendererManager.instance as THREE.WebGLRenderer | null;
    if (!r) return;

    composer = new EffectComposer(r);
    composer.addPass(new RenderPass(scene.value, camera.activeCamera.value));

    bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.3,
        0.5,
        0.1,
    );
    composer.addPass(bloomPass);

    origRender = r.render.bind(r);

    const orig = origRender!;

    const overrideRender = (scene: THREE.Object3D, camera: THREE.Camera) => {
        r.render = orig;
        if (composer) {
            composer.render();
        } else {
            orig(scene, camera);
        }
        r.render = overrideRender as typeof r.render;
    };

    r.render = overrideRender as typeof r.render;

    window.addEventListener('resize', onResize);
});

onUnmounted(() => {
    if (origRender && rendererManager.instance) {
        rendererManager.instance.render = origRender;
    }
    window.removeEventListener('resize', onResize);
    composer?.dispose();
});
</script>

<template></template>
