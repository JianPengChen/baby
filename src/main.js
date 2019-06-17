// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'animate.css'
import axios from 'axios'
import qs from 'qs'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$qs = qs
Vue.prototype.$http = axios.create({
  baseURL: '/api'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
