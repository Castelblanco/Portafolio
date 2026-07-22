<script setup lang="ts">
import { socials } from '@/data/social';
</script>

<template>
    <section
        id="contact"
        class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-24"
    >
        <div class="text-center max-w-xl">
            <p
                class="text-purple-400/80 text-xs uppercase tracking-[0.3em] mb-3 font-light"
            >
                Conexión
            </p>
            <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">Contact</h2>
            <div class="flex flex-wrap justify-center gap-6">
                <a
                    v-for="s of socials"
                    :key="s.name"
                    :href="s.url"
                    target="_blank"
                    rel="noopener"
                    class="flex flex-col items-center gap-3 p-6 rounded-2xl
                           bg-space-800/30 backdrop-blur-sm border border-slate-800/50
                           hover:border-purple-500/30 hover:bg-space-800/50
                           transition-all duration-300 group w-36"
                >
                    <i
                        :class="[s.icon, 'colored', 'text-4xl']"
                        class="transition-transform duration-300 group-hover:scale-110"
                    />
                    <span
                        class="text-sm text-slate-300 group-hover:text-purple-300 transition-colors"
                    >
                        {{ s.name }}
                    </span>
                </a>
            </div>
        </div>

        <footer class="absolute bottom-6 text-xs text-slate-700">
            &copy; {{ new Date().getFullYear() }} Castelblanco
        </footer>
    </section>
</template>
