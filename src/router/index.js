import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/billboard',
    name: 'billboard',
    component: ()=>import('@/views/billboard/index.vue'),
  },
  {
    path: '/my',
    name: 'my',
    component: ()=>import('@/views/my/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
