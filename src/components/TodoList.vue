<template>
    <h1>{{ title }}</h1>
    <div @click="increment">{{ message }}</div>
    <div>{{ count }}</div>
    <input type="text" v-model="newToDo" @keypress.enter="addTodo"/>
    <button @click="addTodo">Add</button>
    <button @click="clear" v-if="completedCount > 0">Clear</button>
    <ul>
      <li v-for="item in toDoList" :key="item.title">
        {{ item.title }}
        <input type="checkbox" v-model="item.completed" />
      </li>
    </ul>
    <div>
      <div>
        <input type="checkbox" v-model="allCompleted"/>
        Select All
      </div>
      {{ completedCount }} / {{ toDoList.length }}
    </div>
  </template>
  <script lang="ts">
  import {defineComponent} from 'vue'
  export default defineComponent({
    props: {
      title: {
        type: String,
        required: true
      },
      itemKey: {
        type: String,
        required: true,
        default: 'todos',
      }
    },
    data(){
      return {
        message: 'Hello Vue',
        count: 0,
        toDoList: localStorage.getItem(this.itemKey) ? JSON.parse(localStorage.getItem(this.itemKey)) : [
          {title: "Learn Vue", completed: false},
          {title: "Learn React", completed: false},
          {title: "Learn Angular", completed: false}
        ],
        newToDo: ''
      }
    },
    methods: {
      increment(){
        this.count++
      },
      addTodo(){
        this.toDoList.push({title: this.newToDo, completed: false})
        this.newToDo = ''
      },
      clear(){
        this.toDoList = this.toDoList.filter(item => !item.completed)
      }
    },
    watch: {
      toDoList: {
        handler(newVal){
          localStorage.setItem(this.itemKey, JSON.stringify(newVal))
        },
        deep: true,
        immediate: true
      }
    },
    computed: {
      completedCount(){
        return this.toDoList.filter(item => item.completed).length
      },
      allCompleted: {
        get(){
          return this.toDoList.every(item => item.completed);
        },
        set(value){
          this.toDoList.forEach(item => item.completed = value);
        }
      }
    }
  })
  </script>