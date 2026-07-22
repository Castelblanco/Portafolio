<script setup lang="ts">
import { ref } from 'vue';
import { projects } from '@/data/projects';
import type { Project } from '@/types';
import ProjectModal from '@/components/ProjectModal.vue';

const selectedProject = ref<Project | null>(null);

const scrollToProject = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
    <section
        id="experience"
        class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-24"
    >
        <div class="max-w-4xl w-full">
            <div class="text-center mb-16">
                <p
                    class="text-amber-400/80 text-xs uppercase tracking-[0.3em] mb-3 font-light"
                >
                    Trayectoria
                </p>
                <h2 class="text-3xl md:text-5xl font-bold text-white">Experience</h2>
                <p class="text-slate-300 mt-3 text-sm">
                    Tres Pi Medios — Oct 2022 — May 2026
                </p>
            </div>

            <div class="relative">
                <div
                    class="absolute left-4.75 top-0 bottom-0 w-px bg-linear-to-b from-cyan-500/40 via-amber-500/20 to-purple-500/40"
                />

                <div class="space-y-8">
                    <div
                        v-for="(project, i) of projects"
                        :key="project.title"
                        class="relative pl-12 group cursor-pointer"
                        @click="selectedProject = project"
                    >
                        <div
                            class="absolute left-3 top-2 w-3 h-3 rounded-full border-2
                                   transition-all duration-300 group-hover:scale-150"
                            :class="
                                i % 2 === 0
                                    ? 'border-cyan-400 bg-space-900 group-hover:bg-cyan-400'
                                    : 'border-amber-400 bg-space-900 group-hover:bg-amber-400'
                            "
                        />

                        <div
                            class="p-5 rounded-xl bg-space-800/40 backdrop-blur-sm border border-slate-800/50
                                   hover:border-slate-700/50 transition-all duration-300"
                        >
                            <h3
                                class="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2"
                            >
                                {{ project.title }}
                            </h3>

                            <p
                                class="text-sm text-slate-300 leading-relaxed line-clamp-3"
                            >
                                {{ project.context }}
                            </p>

                            <div class="flex flex-wrap gap-2 mt-3">
                                <span
                                    v-for="h of project.highlights"
                                    :key="h"
                                    class="text-[10px] px-2 py-0.5 rounded-full"
                                    :class="
                                        i % 2 === 0
                                            ? 'bg-cyan-950/50 text-cyan-300 border border-cyan-800/50'
                                            : 'bg-amber-950/50 text-amber-300 border border-amber-800/50'
                                    "
                                >
                                    {{ h }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-8">
                <p class="text-xs text-slate-400">
                    Click en cualquier proyecto para ver detalles
                </p>
            </div>
        </div>

        <ProjectModal :project="selectedProject" @close="selectedProject = null" />
    </section>
</template>
