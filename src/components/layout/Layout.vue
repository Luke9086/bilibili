<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { useSlots } from 'vue';
import type {Component, VNode} from 'vue';
defineOptions({
    name: 'BiliLayout',
});

defineProps<{
    hasSider?: boolean;
}>();


function useClasses(){
    const slots = useSlots();
    let hasSider = false;
    if (slots && slots.default) {
        const vNodes = slots.default();
        hasSider = vNodes.some((vnode: VNode) => {
            const component = vnode.type as Component;
            console.log(component.name);
            return component.name === 'Sider';
        });
    }
    return {
        hasSider,
    }
}
const classes = useClasses();
</script>