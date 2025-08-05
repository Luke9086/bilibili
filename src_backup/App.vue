<template>
    <div>
        <h1>header</h1>
        <a-button type="primary">Primary Button</a-button>
        <a-alert message="Success Text" type="success" />
    <a-alert message="Info Text" type="info" />
    <a-alert message="Warning Text" type="warning" />
    <a-alert message="Error Text" type="error" />
        <router-link to="/homepage">Home</router-link>
        <router-link to="/loginpage">Login</router-link>
        <router-link to="/aboutpage">About</router-link>
        <router-link to="/videopage/123">Video</router-link>
        <router-link to="/videopage/124">Video2</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
</script>