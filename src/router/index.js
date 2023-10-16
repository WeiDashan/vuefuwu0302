import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from "../views/Classify";
import Test from "../views/test"

Vue.use(VueRouter)

const routes = [
  {
    path: "/classify",
    name: "分类",
    component: Classify,
    show: false
  },
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/test',
    name: '测试',
    component: Test
  },
  {
    path: '/about',
    name: '视频播放',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
