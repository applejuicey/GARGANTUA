import { createRouter, createWebHistory } from 'vue-router'
import authRouter from './auth'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const homeRouter = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/Home.vue'),
    meta: {
      requireAuth: true,
      layout: DefaultLayout
    }
  }
]

const routes = [
  ...homeRouter,
  ...authRouter,
]

const router = createRouter({
  history: createWebHistory('/gargantua/'),
  routes: routes,
})

export { router }