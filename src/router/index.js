import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  component: () => import('components/Login.vue')
}, {
  path: '/home',
  component: () => import('components/Home.vue'),
  redirect: '/welcome',
  children: [{
    path: '/welcome',
    component: () => import('components/Welcome.vue'),
  }, {
    path: '/users',
    component: () => import('components/Users.vue')
  }],
}]

const router = new VueRouter({
  routes
})

//挂在路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('./login')
  next()
})

export default router