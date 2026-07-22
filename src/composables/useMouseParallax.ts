import { reactive, onMounted, onUnmounted } from 'vue';

export function useMouseParallax() {
    const mouse = reactive({ x: 0, y: 0 });
    const target = reactive({ x: 0, y: 0 });

    function handleMouseMove(e: MouseEvent) {
        target.x = (e.clientX / window.innerWidth) * 2 - 1;
        target.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }

    onMounted(() => {
        window.addEventListener('mousemove', handleMouseMove);
    });

    onUnmounted(() => {
        window.removeEventListener('mousemove', handleMouseMove);
    });

    return { mouse, target };
}
