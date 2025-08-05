<template>
    <footer class="ant-layout-footer" :style="{ height }">
        <slot />
    </footer>
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
    name: 'BiliFooter',
});

</script>