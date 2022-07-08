import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/navmenu',
        component: () => import('../components/navmenu.vue')
      },
      {
        path: '/tabs',
        component: () => import('../components/tabs.vue')
      },
      {
        path: '/breadcrumb',
        component: () => import('../components/breadcrumb.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
