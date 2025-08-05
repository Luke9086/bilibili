<template>
    <div>
        <h1>Home</h1>
        <div>
            <a-button @click="counterStore.increment">{{ counterStore.count }}*2={{ counterStore.doubleCount }}</a-button>
        </div>
        <router-view></router-view>
        <footer>123</footer>
    </div>
</template>
<script setup lang="ts">
import { getUser } from '@/api/user';
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore();
getUser().then(res => {
    console.log(res);
});
</script>
<style scoped>

</style>