<template>
    <div>
        <h1>Video</h1>
        <p>{{ id }}</p>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const id = (route.params as { id?: string }).id;
</script>
<style scoped>

</style>