<template>
    <header class="ant-layout-header" :style="{ height }">
        <slot />
    </header>
</template>
<script setup lang="ts">
import { withDefaults } from 'vue';
interface Props {
    height?: string;
}
withDefaults(defineProps<Props>(), {
    height: '64px',
});
defineOptions({
    name: 'BiliHeader',
});
</script>