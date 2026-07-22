<script setup lang="ts">
defineProps<{
    sections: string[];
    currentSection: string;
}>();

const emit = defineEmits<{
    scrollTo: [id: string];
}>();
</script>

<template>
    <nav class="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <button
            v-for="section of sections"
            :key="section"
            class="group flex items-center gap-3 cursor-pointer"
            @click="emit('scrollTo', section)"
        >
            <span
                class="text-xs uppercase tracking-widest transition-all duration-300 pointer-events-none select-none"
                :class="
                    currentSection === section
                        ? 'text-amber-400 opacity-100'
                        : 'text-slate-400 opacity-0 group-hover:opacity-60'
                "
            >
                {{ section }}
            </span>
            <span
                class="block rounded-full transition-all duration-300"
                :class="
                    currentSection === section
                        ? 'w-3 h-3 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]'
                        : 'w-2 h-2 bg-slate-600 group-hover:bg-slate-400'
                "
            />
        </button>
    </nav>
</template>
