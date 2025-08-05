<template>
    <div>
        <h1>About</h1>
        <a-button @click="counterStore.increment">{{ counterStore.count }}*2={{ counterStore.doubleCount }}</a-button>
    </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore();
</script>
<style scoped>

</style>