import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Playground from '@/components/Playground'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/playground',
      name: 'Playground',
      component: Playground
    }
  ]
})
