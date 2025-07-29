<template>
    <div>
        <h1>Home</h1>
        <router-view></router-view>
        <footer>123</footer>
    </div>
</template>
<script setup lang="ts">
import { getUser } from '@/api/user';
getUser().then(res => {
    console.log(res);
});
</script>
<style scoped>

</style>