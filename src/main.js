import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式
import 'assets/css/global.css'
// 导入字体图标icon
import 'assets/fonts/iconfont.css'
//导入axios
import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
Vue.prototype.$http = axios


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')