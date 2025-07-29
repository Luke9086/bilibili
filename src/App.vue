<template>
  <div>
    <h1 @click="count++">Hello World {{ count }}</h1>
    <img :src="logo" alt="logo">
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import logo from './assets/logo.svg';
const count = ref(0)
</script>
<style lang="scss">
$primary-color: blue;
h1 {
  color: $primary-color;
}
</style>