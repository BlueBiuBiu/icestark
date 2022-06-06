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
    component: () => import('@/components/Vue'),
  },
  {
    path: '/react',
    name: 'react',
    component: () => import('@/components/React'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


router.beforeEach((to,from) => {
  console.log('from',to);
  if (to.fullPath === from.fullPath) {
    return false
  }
})

export default router
