<template>
    <a-layout>
      <a-layout-header :style="{height:'150px',color:'#fff',position:'sticky',top:0,zIndex:99}">
        <PageHeader />
      </a-layout-header>
      <a-layout-content >
        <slot></slot>
      </a-layout-content>
      <a-layout-footer >Footer</a-layout-footer>
    </a-layout>
</template>
<script setup lang="ts">
import PageHeader from '@/components/page-header/PageHeader.vue';
defineOptions({
  name: 'BiliDefaultLayout',
});
</script>

<style scoped>

</style>