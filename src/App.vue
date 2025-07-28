<template>
  <div>
    <h1 @click="count++">Hello World {{ count }}</h1>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>