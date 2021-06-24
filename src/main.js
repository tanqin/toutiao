import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式
import './style/index.less'

Vue.config.productionTip = false

// 创建 Vue 根实例，将 router 、store 配置到 Vue 实例
// 把 App 根组件渲染到 #app 节点
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
