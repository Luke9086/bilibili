<template>
<div class="slide-banner">
  <div class="banner-wrapper">
    <div class="slide-banner-wrapper" ref="slide">
      <div class="slide-banner-content">
        <div v-for="item in 5" class="slide-page" :key="item">
          <img class="car-imgs" :src="`/0${item}.png`" alt="">
        </div>
      </div>
    </div>
    <div class="dots-wrapper">
      <span class="dot"
        v-for='item in 5'
        :class="{active: currentPageIndex===(item-1)}"
        :key="item"
      >
        
      </span>
    </div>
    <!-- <button @click="prevPage">prev</button>
    <button @click="nextPage">next</button> -->
  </div>
</div>
</template>
<script setup lang="ts">
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onMounted,ref } from 'vue';
defineOptions({
    name: 'BiliSlider',
});
BScroll.use(Slide)

// 设计一个轮播图组件需要考虑什么
// 1. 键盘交互 鼠标拖拽的交互
// 2. 组件的设计

// let nums = ref(4)
const currentPageIndex = ref<number>(0)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const slider:any = ref()
const slide = ref<HTMLElement>()

onMounted(()=>{
  slider.value = new BScroll(slide.value as HTMLElement, {
    scrollX:true,
    scrollY:false,
    slide:true,
    momentum:false,
    bounce:false
  })
	// 1. wbetter-scrol源码或者文档里找到，page是个啥类型
	// @todo type about page
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  slider.value.on('slideWillChange',(page:unknown)=>{
    currentPageIndex.value = (page as any).pageX
  })
})
// function prevPage(){
//   slider.prev()
// }
// function nextPage(){
//   slider.next()

// }
</script>

<style lang="scss">
.slide-banner {
	.banner-wrapper {
		position: relative;
	}
	.slide-banner-wrapper {
		min-height: 1px;
		overflow: hidden;
	}
	.slide-banner-content {
		height: 100%;
		white-space: nowrap;
		font-size: 0;
		.slide-page {
			display: inline-block;
			height: 100%;
			width: 100%;
			line-height: 200px;
			text-align: center;
			font-size: 26px;
			.car-imgs{
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
	.dots-wrapper {
		position: absolute;
		bottom: 4px;
		left: 50%;
		transform: translateX(-50%);
		.dot {
			display: inline-block;
			margin: 0 4px;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background: #eee;
			&.active {
				width: 20px;
				border-radius: 5px;
			}
		}
	}
}
</style>