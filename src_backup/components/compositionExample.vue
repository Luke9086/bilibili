<template>
    <div>
        <h1>Composition</h1>
        <p>x:{{ x }}</p>
        <p>y:{{ y }}</p>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useMouse } from './mouse';
export default defineComponent({
    setup(){
        const count = ref(0);
        function add(){
            count.value++;
        }
        const { x, y } = useMouse();
        return {
            count,
            add,
            x,
            y
        };
    }
})
</script>
<style scoped>

</style>