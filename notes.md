node node_modules yarn npm pnpm
文件结构
package.json
husky eslint commitlint
vue声明式
1.组件内部渲染的逻辑
2.组件的输入
3.组建的输出
4.组件的扩展<slot/>,$emit

setup 推荐使用
option易于理解，缺点：反复横跳位置开发体验比较差，ts系统类型支持很差，类型推导比较差
composition，相关的逻辑可以放在一起，ts支持好，可以独立抽出hook，方便复用
vue2 Object.defineProperty length [3]=ddd 无法响应式
vue3 Proxy
响应式独立系统
可以自定义渲染器
pnpm run preview给build的代码启动服务器
readonly
变量类型 interface
vue组件是啥
浏览器的元素是啥类型？
options mixins时容易命名冲突了不可预期，所有内容都会打包进代码里
composition 显示展示具体的变量
antd按需引入，unplugin-vue-components
src下的文件夹
pages
components
routes
hooks
utils
api
layout
types
store
网页布局
分割线
header
最低宽度
个人中心
组件的分类
色彩
边距
设计的基本原理
亲密，对齐，对比，重复，简化交互和过渡
例如确定和取消的按钮颜色
《写给大家看的设计书》

前端开发模式的演变
Vue React前后端分离
工程化工具
webpack必须全部打包
vite使用浏览器native ESM根据route动态加载
CSR SSR
CSR首屏加载速度慢，SEO比较差
SSR next nuxt
SSR服务器负载太累
hydrating
island architecture（标记静态资源，只交互）
SSG最快的
ISR RSC
Vue3知识体系
工程化，性能优化
实战招式，内功心法
复杂场景，高效研发
数据量贼大，组件贼多，网速不稳定，交互体验
最佳实践：分治
研发效率：vite，规范约定，dry
原理源码
早期release mini
学习CS基础
compiler编译原理
位运算，LRU，最长递增子序列
reactivity
vitest

TDD 测试驱动开发


clientHeight + scrollTop >= scrollHeight 说明滚动到底了

如何判断性能呢？
第一帧何时渲染了？
资源优化？图片格式选择和压缩(jpeg,png,webp)生成缩略图
懒加载，预加载
网络优化
dom优化
代码优化
组件化开发，拆分成组件，避免臃肿
组件需要内容，样式，交互数据
props传递数据，emit传递数据，插槽扩展组件
defineProps defineEmits slot
Provide inject

组件化的好处
1. 复用和组织代码
2. 可维护性，易于测试
3. 组件库，研发资产
例如，如何设计一个轮播图？

前端开发的规范
开发规范
工作规范
团队规范
## 开发
1. 代码命名camel
2. eslint
3. git commit 规范

## 工作规范
1. 流程规范
2. 接口规范
3. 发布规范
4. 汇报规范
5. OKR
1.团队规范
2.会议规范
3.项目管理规范
4. OKR
拆解问题
周报的格式，需要多少？
