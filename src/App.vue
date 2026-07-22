<script setup lang="ts">
import { useScrollManager } from '@/composables/useScrollManager';
import { useMouseParallax } from '@/composables/useMouseParallax';
import ThreeScene from '@/components/ThreeScene.vue';
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';

const { progress, currentSection, sections, scrollTo } = useScrollManager();
const { target } = useMouseParallax();
</script>

<template>
    <ThreeScene :progress="progress" :mouse-x="target.x" :mouse-y="target.y" />

    <Navbar
        :sections="sections"
        :current-section="currentSection"
        @scroll-to="scrollTo"
    />

    <main class="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
    </main>
</template>
