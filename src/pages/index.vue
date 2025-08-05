<template>
  <DefaultLayout>
    <a-row :gutter="16" style="margin-top: 16px;">
      <a-col :span="12">
        <a-carousel autoplay>
          <div v-for="item in 5" :key="item">
            <img :src="`/0${item}.png`" alt="" class="carousel-img">
          </div>
        </a-carousel>
      </a-col>
      <a-col :span="12">
        <BiliSlider ></BiliSlider>
      </a-col>
    </a-row>
    <a-row :gutter="16" style="margin-top: 16px;">
      <a-col :span="6" v-for="item in videoList" :key="item.key">
        <a-card hoverable>
          <template #actions>
            <PlayCircleOutlined @click="watchLater"/>
          </template>
          <template #cover>
            <img :src="item.image" alt="" class="video-img">
          </template>
          <a-card-meta :title="item.name" :description="item.text">  
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <div class="animate-ball">
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ball" v-show="animation.show"></div>
      </transition>

    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue';
import BiliSlider from '@/components/slider/Slider.vue'
import {getVideoList} from '@/api/mock';
import type {Video} from '@/api/mock';
import {ref,onMounted,onUnmounted} from 'vue';
import { PlayCircleOutlined } from '@ant-design/icons-vue';
defineOptions({
  name: 'BiliIndex',
});
const videoList = ref<Video[]>([]);
let current = 0;
const scroll = async ()=>{

const scrollHeight = document.documentElement.scrollHeight
const scrollTop = document.documentElement.scrollTop
const clientHeight = document.documentElement.clientHeight
if(clientHeight +scrollTop >= scrollHeight){
  current++
  // 设置loading
  const newVideos = await getVideoList(current)
  // 关闭loading
  videoList.value = [...videoList.value,...newVideos]
}

}
onMounted(async()=>{
  const data = await getVideoList(current,20);
  videoList.value = data;
})
onMounted(()=>{
  window.addEventListener('scroll', scroll) // 优化，防抖节流
})
onUnmounted(()=>{
  window.removeEventListener('scroll',scroll)
})

function watchLater(e:Event){
  animation.value.el = e.target as HTMLElement;
  animation.value.show = true;
  e.preventDefault();
}
const animation = ref({
  show:false,
  el:null as HTMLElement | null,
})
function beforeEnter(el:Element){
  const clickedElement = animation.value.el!;
  const rect = clickedElement.getBoundingClientRect();
  const startX = rect.left + rect.width/2;
  const startY = rect.top + rect.height/2;
  // const endX = window.innerWidth - 190; // Target position (right: 180px + half width)
  // const endY = 25; // Target position (top: 15px + half height)
  
  // Set initial position
  (el as HTMLElement).style.left = startX + 'px';
  (el as HTMLElement).style.top = startY + 'px';
  (el as HTMLElement).style.transform = 'translate(-50%, -50%)';
}

function enter(el:Element,done:()=>void){
  const clickedElement = animation.value.el!;
  const rect = clickedElement.getBoundingClientRect();
  const startX = rect.left + rect.width/2;
  const startY = rect.top + rect.height/2;
  const endX = window.innerWidth - 190;
  const endY = 25;
  
  animateParabola(el as HTMLElement, startX, startY, endX, endY, 1000, ()=> {
    done();
  });
}

function afterEnter(){
  animation.value.show = false;
}

// Parabolic animation function
function animateParabola(element: HTMLElement, startX: number, startY: number, endX: number, endY: number, duration: number, callback: () => void) {
  const startTime = performance.now();
  
  // Calculate parabola parameters
  const deltaX = endX - startX;
  const deltaY = endY - startY;
  
  // Height of the parabola (adjust this value to control the arc)
  const arcHeight = Math.abs(deltaX) * 0.5; // Higher value = more dramatic arc
  
  function animate(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out)
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    
    // Calculate current position
    const currentX = startX + deltaX * easedProgress;
    
    // Parabolic Y calculation for rise-then-drop motion
    // Creates an upward arc that peaks at progress = 0.5
    const parabolicOffset = -4 * arcHeight * easedProgress * (1 - easedProgress);
    const currentY = startY + deltaY * easedProgress + parabolicOffset;
    
    // Apply position
    element.style.left = currentX + 'px';
    element.style.top = currentY + 'px';
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      callback();
    }
  }
  
  requestAnimationFrame(animate);
}
</script>
<style lang="scss" scoped>
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.slick-slide h3) {
  color: #fff;
}
:deep(.ant-card-meta-description){
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.animate-ball .ball{
  position: fixed;
  z-index:100;
  width:20px;
  height:20px;
  border-radius: 50%;
  background-color: #fb7299;
  /* Remove transition as we're using JavaScript animation */
}
</style>
