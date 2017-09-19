// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import store from './store'

import Global from './plugin/global'
import './config/rem'
import './assets/style/mixin.scss'
import './assets/style/init.scss'

Vue.config.productionTip = false
// 数据api 绑定全局属性
Vue.use(Global)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
