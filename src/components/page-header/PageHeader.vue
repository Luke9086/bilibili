<template>
 <div class="bili__page-header">
    <div class="bili__page-header__bar">
        <ul class="left_entry">
            <li v-for="link in links" :key="link.path">
                <a :href="link.path">{{ link.name }}</a>
            </li>
        </ul>
        <ul class="right_entry">
            <li v-for="entry in rightEntry" :key="entry.path" class="right_entry_item">
                <a :href="entry.path">{{ entry.name }}</a>
            </li>
            <li class="right_entry_item">
                <div class="upload-btn">
                    <UploadOutlined />
                    <span>投稿</span>
                </div>
            </li>
        </ul>
    </div>
    <div class="bili__page-header__banner">
        <img class="banner" src="/header-back.png" alt="">
    </div>
    <div class="bili__page-header__logo">
        <a href="https://www.bilibili.com">
            <img src="/logo.png" alt="" width="160" height="70">
        </a>
    </div>
 </div>
</template>
<script setup lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
const links = ref([
    {
        name: '首页',
        path: '/',
    },
    {
        name: '番剧',
        path: '/course',
    },
    {
        name: '直播',
        path: '/about',
    },
])
const rightEntry = ref([
    {
        name: '创作中心',
        path: '/login',
    },
    {
        name: '大会员',
        path: '/login',
    },
    {
        name: '稍后再看',
        path: '/login',
    }
])
</script>
<style lang="scss" scoped>
@use '@/styles/mixin';
@include mixin.b(page-header) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // position: sticky;
    // top: 10px;
    // z-index: 99;
    @include mixin.sub(bar) {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        width: 100%;
        & .left_entry {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-shrink: 0;
            height: 100%;
            li {
                margin-right: 16px;
            }
        }
        & .right_entry {
            display: flex;
            align-items: center;
            & .right_entry_item {
                margin-right: 16px;
            }
        }
        & .upload-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 16px;
            width: 90px;
            height: 34px;
            border-radius: 8px;
            background: #fb7299;
            color: #fff;
            text-align: center;
            font-size: 14px;
            line-height: 20px;
            cursor: pointer;
            transition: background-color .3s;
        }
    }
    @include mixin.sub(banner) {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 100%;
            height: 100%;
        }
    }
    @include mixin.sub(logo) {
        position: absolute;
        top: 40px;
        left: 60px;
        z-index: 99;
    }
    a {
        color: #ffffff;
        &:hover {
            color: #757051;
        }
    }
    ul {
        list-style: none;
    }
}
</style>