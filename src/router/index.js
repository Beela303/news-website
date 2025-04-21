import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PostView from '@/views/PostView.vue'
import EditView from '@/views/EditView.vue'
import EditNewsView from '@/views/EditNewsView.vue'
import DashboardView from '@/views/DashboardView.vue'
import DetailedNewsView from '@/views/DetailedNewsView.vue'
import DeleteView from '@/views/DeleteView.vue'
import SignupView from '@/views/SignupView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView,
    },
    {
      path: '/news/post',
      name: 'PostView',
      component: PostView,
    },
    {
      path: '/news/edit',
      name: 'editView',
      component: EditView,
    },
    {
      path: '/news/edit/:id',
      name: 'editNewsView',
      component: EditNewsView,
    },
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: DashboardView,
    },
    {
      path: '/news/details/:id',
      name: 'DetailedNewsView',
      component: DetailedNewsView,
    },
    {
      path: '/news/delete',
      name: 'DeleteView',
      component: DeleteView,
    },
    {
      path: '/signup',
      name: 'SignupView',
      component: SignupView,
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFoundView',
      component: NotFoundView,
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },*/
  ],
})

export default router
