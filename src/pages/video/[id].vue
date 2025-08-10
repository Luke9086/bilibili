<template>
 <defaultLayout>
    <div class="container">
        <div class="main">
            <div class="header">
                <div class="title">
                    <div class="title-text">
                        {{ '前端快速入门' }}
                    </div>
                </div>
            </div>
            <div class="player-container">
                <div ref="playerRef" class="player"></div>
            </div>
            <div class="comments-section">
                <div class="comments-header">
                    <h3 class="comments-title">💬 评论区</h3>
                    <div class="comments-count">{{ list.length }} 条评论</div>
                </div>
                <DynamicScroller
                :items="list"
                :min-item-size="80"
                class="scroller"
                  >
                    <template v-slot="{ item, index, active }">
                    <DynamicScrollerItem
                        :item="item"
                        :active="active"
                        :data-index="index"
                        class="comment-item-wrapper"
                    >
                    <div class="comment-item">
                        <div class="comment-avatar">
                            <div class="avatar-circle">{{ item.name.charAt(0).toUpperCase() }}</div>
                        </div>
                        <div class="comment-content">
                            <div class="comment-header">
                                <div class="comment-name">{{ item.name }}</div>
                                <div class="comment-time">{{ getRandomTime() }}</div>
                            </div>
                            <div class="comment-text">{{ item.text }}</div>
                            <div class="comment-actions">
                                <button class="action-btn like-btn">
                                    <span class="icon">👍</span>
                                    <span class="count">{{ getRandomLikes() }}</span>
                                </button>
                                <button class="action-btn reply-btn">回复</button>
                            </div>
                        </div>
                    </div>
                    </DynamicScrollerItem>
                    </template>
                </DynamicScroller>
            </div>
        </div>
        <div class="aside">
            <sider />
        </div>
    </div>
 </defaultLayout>
</template>
<script setup lang="ts">
import defaultLayout  from '@/layouts/default.vue';
import sider from '@/components/sider/Sider.vue';
import { useRoute } from 'vue-router';
import { faker } from '@faker-js/faker';
import {v4 as uuidv4} from 'uuid';
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import {ref,onMounted} from 'vue';
const route = useRoute();
const {id} = route.params as {id:string};
console.log(id);
const playerRef = ref<HTMLElement>();
onMounted(()=>{
    new Player({
        el:playerRef.value,
        // id: 'player',
        url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4',
        height: '100%',
        width: '100%',
        autoplay: true,
        lang: 'zh-CN',
        playsinline: true,
    });
});
const list = Array.from({length:100},()=>({
    id:uuidv4(),
    text:faker.lorem.paragraph(3),
    name:faker.person.fullName(),
}))

// Helper functions for random data
const getRandomTime = () => {
    const times = ['刚刚', '1分钟前', '5分钟前', '10分钟前', '半小时前', '1小时前', '2小时前', '1天前'];
    return times[Math.floor(Math.random() * times.length)];
}

const getRandomLikes = () => {
    return Math.floor(Math.random() * 999) + 1;
}

</script>
<style lang="scss" scoped>
.container{
    display: flex;
    height: 100%;
    gap: 20px;
    padding: 10px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    
    .main{
        flex: 3;
        display: flex;
        flex-direction: column;
        background: white;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        .header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: linear-gradient(135deg, rgb(0, 21, 41) 0%, #301e43 100%);
            color: white;
            
            .title{
                font-size: 24px;
                font-weight: 700;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
        }
        .player-container{
            flex: 1;
            min-height: 720px; /* Ensure minimum height for video player */
            display: flex;
            flex-direction: column;
            
            .player {
                flex: 1;
                border-radius: 0 0 16px 16px;
                overflow: hidden;
            }
        }
        
    }
    
    .aside{
        flex: 1;
        max-width: 350px;
        min-width: 280px;
        background: white;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
}

// Comments Section Styling
.comments-section {
    padding: 20px;
    background: #fafbfc;
    border-top: 1px solid #e1e8ed;
    max-height:600px;
    .comments-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 2px solid #e1e8ed;
        
        .comments-title {
            margin: 0;
            font-size: 20px;
            font-weight: 700;
            color: #1a1a1a;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .comments-count {
            color: #657786;
            font-size: 14px;
            background: #e1e8ed;
            padding: 4px 12px;
            border-radius: 20px;
            font-weight: 500;
        }
    }
}

.scroller{
    height: 500px;
    width: 100%;
    border-radius: 12px;
    background: white;
    border: 1px solid #e1e8ed;
    overflow: hidden;
}

// Individual Comment Item Styling
.comment-item-wrapper {
    border-bottom: 1px solid #f0f3f4;
    
    &:last-child {
        border-bottom: none;
    }
}

.comment-item {
    display: flex;
    padding: 16px 20px;
    gap: 12px;
    transition: all 0.2s ease;
    
    &:hover {
        background: #f8f9fa;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }
    
    .comment-avatar {
        flex-shrink: 0;
        
        .avatar-circle {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 18px;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
            border: 3px solid white;
        }
    }
    
    .comment-content {
        flex: 1;
        min-width: 0; // Prevent text overflow
        
        .comment-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
            
            .comment-name {
                font-weight: 600;
                color: #1a1a1a;
                font-size: 15px;
            }
            
            .comment-time {
                color: #657786;
                font-size: 13px;
                font-weight: 400;
            }
        }
        
        .comment-text {
            color: #333;
            line-height: 1.6;
            font-size: 14px;
            margin-bottom: 12px;
            word-wrap: break-word;
        }
        
        .comment-actions {
            display: flex;
            gap: 16px;
            
            .action-btn {
                display: flex;
                align-items: center;
                gap: 6px;
                background: none;
                border: none;
                color: #657786;
                font-size: 13px;
                cursor: pointer;
                padding: 6px 12px;
                border-radius: 20px;
                transition: all 0.2s ease;
                font-weight: 500;
                
                &:hover {
                    background: #e1e8ed;
                    color: #1a1a1a;
                    transform: translateY(-1px);
                }
                
                .icon {
                    font-size: 14px;
                }
                
                .count {
                    font-size: 12px;
                }
            }
            
            .like-btn {
                &:hover {
                    background: #ffe1e8;
                    color: #e91e63;
                    
                    .icon {
                        transform: scale(1.2);
                    }
                }
            }
            
            .reply-btn {
                &:hover {
                    background: #e3f2fd;
                    color: #1976d2;
                }
            }
        }
    }
}

// Responsive design
@media (max-width: 1200px) {
    .container {
        flex-direction: column;
        
        .aside {
            flex: none;
            height: 300px;
        }
    }
    
    .scroller {
        width: 100%;
        height: 400px;
    }
}

// Scrollbar styling
.scroller {
    &::-webkit-scrollbar {
        width: 8px;
    }
    
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 4px;
        
        &:hover {
            background: #a8a8a8;
        }
    }
}

// Loading state animation
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.comment-item {
    animation: fadeInUp 0.3s ease-out;
}
</style>