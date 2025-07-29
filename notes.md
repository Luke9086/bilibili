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