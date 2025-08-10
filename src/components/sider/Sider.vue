<template>
  <div class="sider-container">
    <div class="sider-title">推荐视频</div>
    <div class="video-list">
      <a-card
        v-for="item in videoList"
        :key="item.id"
        hoverable
        class="video-card"
        :bodyStyle="{ padding: '12px' }"
      >
        <div class="card-content">
          <div class="video-cover-container">
            <img
              :alt="item.title"
              :src="item.cover"
              class="video-cover"
            />
          </div>
          <div class="video-content">
            <div class="video-title" :title="item.title">
              {{ item.title }}
            </div>
            <div class="video-info">
              <div class="author">{{ item.author }}</div>
              <div class="watch-count">{{ formatWatchCount(item.watchCount) }}次观看</div>
            </div>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
    name: 'BiliSider',
}
)
interface VideoItem {
  id: number
  title: string
  author: string
  watchCount: number
  cover: string
}

const videoList = ref<VideoItem[]>([
  {
    id: 1,
    title: 'Vue 3 Composition API 详细教程',
    author: '前端小陈',
    watchCount: 128500,
    cover: '/01.webp'
  },
  {
    id: 2,
    title: 'TypeScript 从入门到精通',
    author: '代码艺术家',
    watchCount: 96700,
    cover: '/02.webp'
  },
  {
    id: 3,
    title: 'Ant Design Vue 组件库使用指南',
    author: 'UI设计师',
    watchCount: 75300,
    cover: '/03.webp'
  },
  {
    id: 4,
    title: 'Vite 构建工具深度解析',
    author: '工程化专家',
    watchCount: 54200,
    cover: '/04.webp'
  },
  {
    id: 5,
    title: 'Pinia 状态管理最佳实践',
    author: '状态管理大师',
    watchCount: 42800,
    cover: '/05.webp'
  }
])

const formatWatchCount = (count: number): string => {
  if (count >= 10000) {
    return (count / 10000).toFixed(1) + '万'
  }
  return count.toString()
}
</script>

<style scoped lang="scss">
.sider-container {
  width: 100%;
  padding: 16px;
  background: #fafafa;
  border-radius: 8px;
}

.sider-title {
  font-size: 18px;
  font-weight: bold;
  color: #262626;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #1890ff;
}

.video-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.video-card {
  width: 100%;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}

.card-content {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.video-cover-container {
  flex-shrink: 0;
}

.video-cover {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
}

.video-content {
  flex: 1;
  min-width: 0; // 确保文本截断正常工作
}

.video-title {
  font-size: 14px;
  font-weight: 500;
  color: #262626;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
}

.video-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.author {
  font-size: 12px;
  color: #8c8c8c;
  font-weight: 400;
}

.watch-count {
  font-size: 12px;
  color: #8c8c8c;
  font-weight: 400;
}

// 响应式设计
@media (max-width: 768px) {
  .sider-container {
    padding: 12px;
  }
  
  .card-content {
    gap: 8px;
  }
  
  .video-cover {
    width: 70px;
    height: 52px;
  }
  
  .video-title {
    font-size: 13px;
  }
}
</style>