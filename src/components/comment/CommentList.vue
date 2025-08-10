<template>
    <div ref="container" class="container">
        <div class="placeholder" :style="{height:placeholderHeight+'px'}"></div>
        <div class="list" ref="listRef" :style="{transform:viewTransform}">
            <div v-for="item in visibleData" :key="item.key" class="item">
                <span>{{ item.name }}</span>
                <span>{{ item.text }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted,onUnmounted, ref } from 'vue';
interface CommentProps {
    list: {
        key:string,
        text:string,
        name:string,
    }[]
}
const props = defineProps<CommentProps>()
const height = 60;
const container = ref<HTMLDivElement>()
const listRef = ref<HTMLDivElement>()
const start = ref(0)
const viewTransform = ref('translate3d(0,0,0)')
const visibleData = ref<CommentProps['list']>([])
const placeholderHeight = props.list.length * height
const positions = ref<{height:number,top:number}[]>([])
onMounted(()=>{
    const containerDom = container.value!;
    const viewHeight = containerDom.clientHeight||800;
    const visibleCount = Math.ceil(viewHeight / height);
    const end = start.value + visibleCount;
    visibleData.value = props.list.slice(start.value,end);
    positions.value = props.list.map((item,index)=>({
        height:height,
        top:index * height
    }))
    containerDom.addEventListener('scroll',handleScroll);
})
function handleScroll(e:Event){
    const scrollTop = (e.target as HTMLDivElement).scrollTop;
    const containerDom = container.value!;
    const viewHeight = (containerDom as HTMLDivElement).clientHeight;
    const startIndex = positions.value.findIndex(item=>item.top+item.height>=scrollTop) || 0;
    const visibleCount = Math.ceil(viewHeight / height);
    const end = startIndex + visibleCount;
    // end.value = endIndex;
    visibleData.value = props.list.slice(start.value,end);
    start.value = startIndex;
    const transformOffset = startIndex>0?  positions.value[startIndex-1].top+positions.value[startIndex-1].height:0
    viewTransform.value = `translate3d(0,${transformOffset}px,0)`;
    // list.value!.style.transform = transform;
}
onUnmounted(()=>{
    container.value!.removeEventListener('scroll',handleScroll);
})
</script>
<style lang="scss" scoped>
.container{
    height:800px;
    overflow:auto;
    position:relative;
    .placeholder{
        position:absolute;
        top:0;
        left:0;
        right:0;
        z-index:-1;
        width:100%;
    }
    .list{
        position:absolute;
        top:0;
        left:0;
        right:0;
        z-index:1;
    }
    .item {
        height:60px;
        line-height:60px;
    }
    .comment-title {

    }
}
</style>