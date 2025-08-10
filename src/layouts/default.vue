<template>
    <a-layout>
      <a-layout-header :style="{height:'auto',color:'#fff',position:'sticky',top:0,zIndex:99}">
        <PageHeader />
      </a-layout-header>
      <a-layout-content >
        <slot></slot>
      </a-layout-content>
      <a-layout-footer ></a-layout-footer>
    </a-layout>
</template>
<script setup lang="ts">
import PageHeader from '@/components/page-header/PageHeader.vue';
defineOptions({
  name: 'BiliDefaultLayout',
});
</script>

<style scoped>
:deep(.ant-layout) {
  min-height: 100vh;
}

:deep(.ant-layout-content) {
  min-height: calc(100vh - 64px - 70px); /* Use min-height instead of height */
  /* Remove overflow-y to allow natural document scrolling */
}
</style>