# Vue问题
### 子组件为何不可以修改父组件传递的prop，如果修改了，Vue是如何监控到属性的修改并给出警告的？
### 触发事件-this.$emit的返回值是什么？如果在上层组件return了一个值，this.$emit能否接收到？
this.$emit的返回值是this,如果需要返回值可以使用回调参数,this.$emit('change',参数1,val=>{}),第三个参数为回调，子组件需要父组件传的值
### 相同名称的插槽是合并还是替换？
### 虚拟dom及key属性的作用
### 为什么不能用index作为key？
会引入状态bug
### 数组有哪些支持响应式更新，如不支持，底层原理如何实现的？
支持的：push,pop,shift,unshift,splice,sort,reverse
不支持：filter,concat,slice
原理：使用Object.defineProperty对数组方法进行改写
### 生命周期
课后作业：秒杀倒计时的组件

### Vuex是通过什么方式提供响应式数据的？
### $store是如何挂载到实例this上的？