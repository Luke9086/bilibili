<template>
    <div>
        <h1>Learn Ts</h1>
        <div>{{ count }} {{ double }}</div>
        <button @click="count++">add</button>
        <button @click="add">add</button>
        <input type="text" ref="input">
        <ul>
            <li v-for="course in courses" :key="course.name">{{ course.name }} - {{ course.price }}</li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

const count = ref(1);
const double = computed<number>(()=>{
    return count.value * 2;
})
interface Course {
    name:string;
    price:number;
}
const course:Course = {
    name:'Vue',
    price:100
}
const courses = ref<Course[]>([]);
const add = (event:MouseEvent)=>{
    console.log(event);
    courses.value.push(course);
}
const input = ref<HTMLInputElement>();
onMounted(()=>{
    input.value?.focus();
})
</script>
<style scoped>

</style>