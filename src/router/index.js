import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import BlogPage from '../pages/blog/BlogPage.vue'
import BlogPost from '../pages/blog/BlogPost.vue'
import StorePage from '../pages/store/StorePage.vue'
import ContactPage from '../pages/ContactPage.vue'
import NotFoundPage from "../pages/NotFoundPage.vue"
import AffiliatePage from '../pages/affiliateStore/AffiliatePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPage
  }, {
    path: '/blog/:id',
    name: 'blogPost',
    component: BlogPost
  },
  {
    path: '/store',
    name: 'store',
    component: StorePage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  }, {
    path: '/affiliate-store',
    name: 'affiliateStore',
    component: AffiliatePage
  }, {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFoundPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
