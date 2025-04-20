import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ThankYou from '../pages/ThankYou.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/obrigado/:uuid',
    name: 'ThankYou',
    component: ThankYou,
    // Apenas permitir UUIDs válidos
    beforeEnter: (to, from, next) => {
      const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (uuidPattern.test(to.params.uuid)) {
        next();
      } else {
        next('/');
      }
    }
  },
  // Redirecionar qualquer tentativa de acessar /obrigado sem UUID para a Home
  {
    path: '/obrigado',
    redirect: '/'
  },
  // Rota para qualquer outro caminho não definido
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80, // Offset for fixed header
      }
    }
    return { top: 0 }
  }
})

export default router