import MyPopover from '@/components/my-popover.vue'

export default {
  install (Vue) {
    // Vue 是 import Vue from 'vue' 对象
    // 是个插件 怎么使用插件  main.js 使用 Vue.use(插件) 调用install函数传入 Vue 对象
    // 把 components 下的组件  注册成全局组件
    // Vue.component('组件名称', '组件配置对象')
    Vue.component(MyPopover.name, MyPopover)
  }
}
