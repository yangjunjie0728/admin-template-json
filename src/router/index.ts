import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import App from '../App.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      redirect: '/template',
      children: [
        {
          path: '/template',
          name: 'template',
          component: () => import('../views/template.vue')
        },
      ]
    }
  ]
})

export default router
