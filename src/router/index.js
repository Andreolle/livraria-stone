import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/main/Container'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container
    }
  ]
})