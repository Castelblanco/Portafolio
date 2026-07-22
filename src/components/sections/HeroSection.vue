<script setup lang="ts">
const socials = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/esteban-castelblanco' },
    { name: 'GitHub', url: 'https://github.com/Castelblanco' },
];

function scrollToSkills() {
    const el = document.getElementById('skills');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <section
        id="hero"
        class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div class="text-center max-w-3xl">
            <p class="text-slate-300 text-sm uppercase tracking-[0.3em] mb-4 font-light">
                Full Stack Developer
            </p>

            <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Esteban
                <span
                    class="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500"
                >
                    Castelblanco
                </span>
            </h1>

            <p class="text-lg md:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed">
                4 años transformando sistemas legacy en arquitecturas escalables.
                Especialista en
                <span class="text-cyan-300">rendimiento</span>,
                <span class="text-amber-300">nube</span>
                y
                <span class="text-emerald-300">microservicios</span>.
            </p>

            <div class="mt-10 flex flex-wrap justify-center gap-4">
                <a
                    v-for="s of socials"
                    :key="s.name"
                    :href="s.url"
                    target="_blank"
                    rel="noopener"
                    class="px-6 py-3 rounded-xl border border-slate-700/50 text-sm text-slate-300
                           hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300
                           bg-space-800/40 backdrop-blur-sm"
                >
                    {{ s.name }}
                </a>

                <button
                    class="px-6 py-3 rounded-xl bg-linear-to-r from-amber-500 to-orange-600
                           text-white text-sm font-semibold
                           hover:from-amber-400 hover:to-orange-500 transition-all duration-300
                           shadow-lg shadow-amber-500/20 cursor-pointer"
                    @click="scrollToSkills()"
                >
                    Explorar
                </button>
            </div>
        </div>

        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
                class="w-6 h-6 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
            </svg>
        </div>
    </section>
</template>
