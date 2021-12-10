import Layout1 from '../layouts/Layout1.vue'

const authRouter = [
  {
    path: '/login',
    name: 'login',
    component: import('../views/auth/Login.vue'),
    meta: {
      requireAuth: false,
      layout: Layout1
    }
  }
]

export default authRouter