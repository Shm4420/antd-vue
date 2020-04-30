import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Demo11 = () => import('../views/demo/11watch.vue')
const Demo14 = () => import('../views/demo/14provide.vue')
const Demo16 = () => import('../views/demo/16templte.vue')
const Demo18 = () => import('../views/demo/18proxy.vue')
const Demo19 = () => import('../views/vuexdemo/19state')
const Cart = () => import('../views/cart/index')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo11',
    name: 'demo11',
    component: Demo11
  },
  {
    path: '/demo14',
    name: 'demo14',
    component: Demo14
  },
  {
    path: '/demo16',
    name: 'demo16',
    component: Demo16
  },
  {
    path: '/demo18',
    name: 'demo18',
    component: Demo18
  },
  {
    path: '/demo19',
    name: 'demo19',
    component: Demo19
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
