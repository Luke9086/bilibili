<template>
    <aside class="ant-layout-footer" :style="{ width }">
        <slot />
    </aside>
</template>
<script setup lang="ts">
import { withDefaults } from 'vue';
interface Props {
    width?: string;
}
withDefaults(defineProps<Props>(), {
    width: '64px',
});
defineOptions({
    name: 'BiliSider',
});
</script>