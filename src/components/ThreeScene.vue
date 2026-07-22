<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import * as THREE from 'three';
import CameraManager from './CameraManager.vue';
import BloomEffect from './systems/BloomEffect.vue';
import Starfield from './systems/Starfield.vue';
import CentralStar from './systems/CentralStar.vue';
import OrbitalRings from './systems/OrbitalRings.vue';
import Constellation from './systems/Constellation.vue';
import NebulaContact from './systems/NebulaContact.vue';

const props = defineProps<{
    progress: number;
    mouseX: number;
    mouseY: number;
}>();

const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
camera.position.set(0, 0, 5);

const dirLightPos = new THREE.Vector3(0, 5, 10);
</script>

<template>
    <div class="three-canvas">
        <TresCanvas
            :camera="camera"
            window-size
            alpha
            antialias
            power-preference="high-performance"
        >
            <TresAmbientLight :intensity="0.3" />
            <TresDirectionalLight :position="dirLightPos" :intensity="0.5" />

            <BloomEffect />
            <Starfield />
            <CentralStar :progress="progress" />
            <OrbitalRings :progress="progress" />
            <Constellation :progress="progress" />
            <NebulaContact :progress="progress" />

            <CameraManager :progress="progress" :mouse-x="mouseX" :mouse-y="mouseY" />
        </TresCanvas>
    </div>
</template>

<style scoped>
.three-canvas {
    position: fixed;
    inset: 0;
    z-index: 0;
}
</style>
