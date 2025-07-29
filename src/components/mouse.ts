import { ref, onMounted, onUnmounted } from 'vue';
export function useMouse(){
    const x = ref(0);
    const y = ref(0);
    onMounted(()=>{
    document.addEventListener('mousemove',(e)=>{
            x.value = e.clientX;
            y.value = e.clientY;
        })
    })
    onUnmounted(()=>{
        document.removeEventListener('mousemove',(e)=>{
            x.value = e.clientX;
            y.value = e.clientY;
        })
    })
    return { x, y };
}