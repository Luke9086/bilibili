<template>
    <button :class="buttonClass" :type="nativeType">
        <LoadingOutlined />
        <span>
            <slot></slot>
        </span>
    </button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { LoadingOutlined } from '@ant-design/icons-vue';
import 'ant-design-vue/es/button/style/index.js';
type ButtonType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
type ButtonNativeType = 'button' | 'submit' | 'reset';
type ButtonSize = 'small' | 'medium' | 'large';
interface ButtonProps {
    type?: ButtonType;
    nativeType?: ButtonNativeType;
    size?: ButtonSize;
}
const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'primary',
    nativeType: 'button',
    size: 'medium',
});
const buttonClass = computed(() => {
    return [
        'ant-btn',
        `ant-btn-${props.type}`,
        `ant-btn-${props.size}`,
    ];
});
</script>
<style scoped>

</style>