import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: () => import('@/components/layouts/BaseLayout.vue'),
  },
  {
    path: '/vue',
    name: 'vue',
    component: () => import('@/components/Vue/index.vue'), // 在vite中导入.vue文件时后缀不能省略
  },
  {
    path: '/react',
    name: 'react',
    component: () => import('@/components/React/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


// router.beforeEach((to,from) => {
  
// })

export default router
