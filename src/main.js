import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式
import 'assets/css/global.css'
// 导入字体图标icon
import 'assets/fonts/iconfont.css'
//导入axios
import aixos from 'axios'
import Axios from 'axios'
Vue.config.productionTip = false
Axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

Vue.prototype.$http = aixos


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')