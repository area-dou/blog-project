import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入element Ui中的部分样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入 element-ui伸缩样式表
import 'element-ui/lib/theme-chalk/display.css'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/font/iconfont.css'
// 导入axios
import axios from 'axios'
// 配置根路径
axios.defaults.baseUrl = 'http://localhost:8080/test'
// 将axios挂载到vue的全局对象上
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
