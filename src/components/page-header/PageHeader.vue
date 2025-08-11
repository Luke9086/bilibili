<template>
 <div class="bili__page-header">
    <div class="bili__page-header__bar" ref="bar">
        <ul class="left_entry">
            <li v-for="link in links" :key="link.path">
                <a :href="link.path">{{ link.name }}</a>
            </li>
        </ul>
        <ul class="right_entry">
            <li v-if="!token" class="right_entry_item">
                <router-link to="/login">
                    登录
                </router-link> 
            </li>
            <li v-if="!token" class="right_entry_item">
                <router-link to="/register">
                    注册
                </router-link> 
            </li>
            <li v-else class="right_entry_item" @click="logout">
                    <a href="javascript:void(0)">
                        {{ username }}
                        <LogoutOutlined />
                    </a>
            </li>
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
    <div class="bili__page-header__banner" ref="banner">
        <img class="banner" src="/header-back.png" alt="" fetchpriority="high">
    </div>
    <div class="bili__page-header__logo" ref="logo">
        <a href="https://www.bilibili.com">
            <img src="/logo.png" alt="" width="160" height="70">
        </a>
    </div>
 </div>
</template>
<script setup lang="ts">
import { UploadOutlined, LogoutOutlined } from '@ant-design/icons-vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { Modal,message } from 'ant-design-vue';
import {debounce} from 'lodash';
const {token, username,setToken,setUser} = useUserStore();
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
function logout() {
    Modal.confirm({
        title: '提示',
        content: '确定要退出登录吗？',
        onOk: () => {
            setToken('');
            setUser({});
            message.success('退出登录成功');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    });
}
const banner = ref<HTMLDivElement>();
const bar = ref<HTMLDivElement>();
const logo = ref<HTMLDivElement>();
const showHeader = ref(true);

const handleScroll = debounce(() => {
    // Use window.scrollY as the primary scroll detection method
    const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    
    const shouldShowHeader = scrollTop <= 100;
    
    // Only update if the state actually changes to prevent unnecessary flickering
    if (showHeader.value !== shouldShowHeader) {
        showHeader.value = shouldShowHeader;
        
        // Use smooth transitions with height collapse
        if (banner.value) {
            banner.value.style.opacity = showHeader.value ? '1' : '0';
            banner.value.style.transform = showHeader.value ? 'scaleY(1)' : 'scaleY(0)';
            banner.value.style.transformOrigin = 'top';
            banner.value!.style.position = showHeader.value ? 'relative': 'absolute';
        }
        if (logo.value) {
            logo.value.style.opacity = showHeader.value ? '1' : '0';
            logo.value.style.transform = showHeader.value ? 'translateY(0)' : 'translateY(-100%)';
            logo.value.style.display = showHeader.value ? 'block' : 'none';
        }
        if (bar.value) {
            bar.value.style.backgroundColor = !showHeader.value ? '#001529' : 'transparent';
        }
    }
}, 150); // Slightly increased debounce for smoother behavior

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>
<style lang="scss" scoped>
@use '@/styles/mixin';
@include mixin.b(page-header) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
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
        height: auto;
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
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.3s ease, transform 0.3s ease;
        transform-origin: top;
        overflow: hidden;
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
        transition: opacity 0.3s ease, transform 0.3s ease;
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