<script setup lang="ts">
import {
    skillsFrontend,
    skillsBackend,
    skillsDatabase,
    skillsDevops,
} from '@/data/skills';

const categories = [
    { label: 'Frontend', skills: skillsFrontend, color: 'text-cyan-400' },
    { label: 'Backend', skills: skillsBackend, color: 'text-emerald-400' },
    { label: 'Database', skills: skillsDatabase, color: 'text-purple-400' },
    { label: 'DevOps', skills: skillsDevops, color: 'text-amber-400' },
];
</script>

<template>
    <section
        id="skills"
        class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-24"
    >
        <div class="max-w-5xl w-full">
            <div class="text-center mb-16">
                <p
                    class="text-cyan-400/80 text-xs uppercase tracking-[0.3em] mb-3 font-light"
                >
                    Tecnologías
                </p>
                <h2 class="text-3xl md:text-5xl font-bold text-white">Skills</h2>
            </div>

            <div class="space-y-14">
                <div v-for="cat of categories" :key="cat.label">
                    <h3 class="text-lg font-semibold mb-5" :class="cat.color">
                        {{ cat.label }}
                    </h3>

                    <div
                        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
                    >
                        <div
                            v-for="skill of cat.skills"
                            :key="skill.name"
                            class="flex flex-col items-center gap-2 p-4 rounded-xl
                                   bg-space-800/30 backdrop-blur-sm border border-slate-800/50
                                   hover:border-slate-700/50 transition-all duration-300
                                   group cursor-default"
                        >
                            <i
                                :class="[skill.icon, 'colored', 'text-3xl']"
                                class="transition-transform duration-300 group-hover:scale-110"
                            />
                            <span
                                class="text-xs text-slate-400 group-hover:text-slate-300 transition-colors"
                            >
                                {{ skill.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
