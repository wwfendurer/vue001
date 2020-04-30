import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// 导入配置element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.prototype.$message = ElementUI.Message
Vue.prototype.$confirm = ElementUI.MessageBox.confirm

// 导入配置axios
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 请求拦截器，每次请求前，会做这一步处理
axios.interceptors.request.use((config) => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
Vue.prototype.$http = axios

import TreeTable from 'vue-table-with-tree-grid'
Vue.component('tree-table', TreeTable)

Vue.config.productionTip = false

// Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。
// 自定义一个时间过滤器
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
