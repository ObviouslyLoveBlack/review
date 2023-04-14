import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home/index.vue'
import Layout from '@/layout/index.vue'
createRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
  return originalPush.call(this, location).catch((err) => err)
}
// Vue.use(Router)
export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home/zeroBundle',
    hiden: true,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/home/zeroBundle',
        name: 'home',
        component: home,
        meta: {
          title: '首页'
        },
      },
      {
        path: '/about/zeroBundle',
        name: 'zeroBundle',
        component: () => import('@/views/zeroBundle/index.vue'),
        meta: {
          title: '关于零束'
        }
      },
      {
        path: '/contact/us',
        name: 'contact',
        component: () => import('@/views/contactUs/index.vue'),
        meta: {
          title: '加入我们'
        }
      },
      {
        path: '/product/resolve',
        name: 'product',
        component: () => import('@/views/product/index.vue'),
        meta: {
          title: '产品与解决方案'
        }
      },
      {
        path: '/developer/center',
        name: 'center',
        component: () => import('@/views/developerCenter/index.vue'),
        meta: {
          title: '开发者中心'
        }
      },
      {
        path: '/developer/congress',
        name: 'congress',
        component: () => import('@/views/developerCongress/index.vue'),
        meta: {
          title: '开发者大会'
        }
      },
    ]
  },
  {
    // path: '*', vue2写法
    path: '/:catchAll(.*)',
    redirect: '/404',
    hiden: true,
  },
  {
    path: '/404',
    hiden: true,
    component: () => import('@/views/404.vue'),
  },
]
// const originalPush = createRouter.prototype.push
// createRouter.prototype.push = function push (location, onResolve, onReject) {
//   if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
//   return originalPush.call(this, location).catch((err) => err)
// }

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
