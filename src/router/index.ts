import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/#about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/techstack',
      name: 'techstack',
      component: () => import('../views/TechstackView.vue')
    },
    {
      path: '/platforms',
      name: 'platforms',
      component: () => import('../views/PlatformsView.vue')
    },
  ]
})

export default router
