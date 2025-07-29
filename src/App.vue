<template>
    <div>
        <h1>header</h1>
        <a-button type="primary">Primary Button</a-button>
        <a-alert message="Success Text" type="success" />
    <a-alert message="Info Text" type="info" />
    <a-alert message="Warning Text" type="warning" />
    <a-alert message="Error Text" type="error" />
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/video/123">Video</router-link>
        <router-link to="/video/124">Video2</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
</script>