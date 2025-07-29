<template>
    <div>
        <h1>Video</h1>
        <p>{{ id }}</p>
    </div>
</template>
<script setup lang="ts">
import { useRoute,useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const id = route.params.id;
console.log(router);
console.log(id);
</script>
<style scoped>

</style>