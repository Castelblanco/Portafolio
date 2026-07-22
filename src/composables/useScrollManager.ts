import { ref, onMounted, onUnmounted } from 'vue';
import Lenis from 'lenis';

export function useScrollManager() {
    const progress = ref(0);
    const currentSection = ref('hero');

    const sections = ['hero', 'skills', 'experience', 'contact'];

    let lenis: Lenis | null = null;
    let rafId: number | null = null;
    let observer: IntersectionObserver | null = null;

    function raf(time: number) {
        if (lenis) lenis.raf(time);
        rafId = requestAnimationFrame(raf);
    }

    onMounted(() => {
        lenis = new Lenis({
            duration: 1.1,
            easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
            smoothWheel: true,
        });

        lenis.on('scroll', (e: { progress: number }) => {
            progress.value = e.progress;
        });

        rafId = requestAnimationFrame(raf);

        observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        currentSection.value = entry.target.id;
                    }
                }
            },
            { threshold: 0.4 },
        );

        for (const id of sections) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }
    });

    onUnmounted(() => {
        if (observer) observer.disconnect();
        if (rafId) cancelAnimationFrame(rafId);
        if (lenis) lenis.destroy();
    });

    function scrollTo(id: string) {
        const el = document.getElementById(id);
        if (el && lenis) {
            lenis.scrollTo(el);
        }
    }

    return { progress, currentSection, sections, scrollTo };
}
