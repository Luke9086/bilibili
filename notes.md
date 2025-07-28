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