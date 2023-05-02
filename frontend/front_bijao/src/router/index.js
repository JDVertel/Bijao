import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/Login.vue'
import dashboard from '../views/Dashboard.vue'
import about from '../views/About.vue'
import ordenes from '../views/Ordenes.vue'

import g_ordenes from '../views/G_ordenes.vue'
import g_pedidos from '../views/G_pedidos.vue'
import g_envios from '../views/G_envios.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
/*     {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }, */
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/ordenes',
      name: 'ordenes',
      component: ordenes
    },
    {
      path: '/g_ordenes',
      name: 'g_ordenes',
      component: g_ordenes
    },
    {
      path: '/g_pedidos',
      name: 'g_pedidos',
      component: g_pedidos
    },
    {
      path: '/g_envios',
      name: 'g_envios',
      component: g_envios
    }


  ]
})

export default router
