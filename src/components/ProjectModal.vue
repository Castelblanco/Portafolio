<script setup lang="ts">
import type { Project } from '@/types';

const props = defineProps<{
    project: Project | null;
}>();

const emit = defineEmits<{
    close: [];
}>();
</script>

<template>
    <teleport to="body">
        <div
            v-if="project"
            class="fixed inset-0 z-[100] flex items-center justify-center p-4"
            @click.self="emit('close')"
        >
            <div
                class="absolute inset-0 bg-space-950/70 backdrop-blur-md"
                @click="emit('close')"
            />

            <div
                class="relative max-w-2xl w-full bg-space-900/90 border border-slate-700/50 rounded-2xl p-8 shadow-2xl"
            >
                <button
                    class="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl leading-none cursor-pointer"
                    @click="emit('close')"
                >
                    &times;
                </button>

                <h3 class="text-2xl font-bold text-amber-400 mb-6">
                    {{ project.title }}
                </h3>

                <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
                    <div>
                        <h4
                            class="text-cyan-400 font-semibold mb-1 text-xs uppercase tracking-wider"
                        >
                            Contexto
                        </h4>
                        <p>{{ project.context }}</p>
                    </div>

                    <div>
                        <h4
                            class="text-cyan-400 font-semibold mb-1 text-xs uppercase tracking-wider"
                        >
                            Acción
                        </h4>
                        <p>{{ project.action }}</p>
                    </div>

                    <div>
                        <h4
                            class="text-cyan-400 font-semibold mb-1 text-xs uppercase tracking-wider"
                        >
                            Resultado
                        </h4>
                        <p class="text-amber-300/90">{{ project.result }}</p>
                    </div>
                </div>

                <div class="mt-6 flex flex-wrap gap-2">
                    <span
                        v-for="h of project.highlights"
                        :key="h"
                        class="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                    >
                        {{ h }}
                    </span>
                </div>
            </div>
        </div>
    </teleport>
</template>
