import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home/Home.vue'
import Login from '@/page/Login/Login.vue'
import Details from '@/page/Details/Details.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
