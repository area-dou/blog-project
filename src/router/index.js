import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Categoryall from '../components/categoryAll/categoryall.vue'
import Categorywenan from '../components/categoryWenan/categorywenan.vue'
import Categorywenzi from '../components/categoryWenzi/categorywenzi.vue'
// 详情页面组件
import ArticleDetails from '../components/article-details/article-details.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home,
    redirect: "/category/all",
    children: [
      { path: '/category/all', component: Categoryall },
      { path: '/category/wenan', component: Categorywenan },
      { path: '/category/wenzi', component: Categorywenzi },
      { path: '/article/detail', component: ArticleDetails }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
