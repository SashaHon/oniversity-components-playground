import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/3-card-component',
      name: '3-card-component',
      component: () => import('@/views/ThreeCardComponentView.vue')
    },
    {
      path: '/order-summary-component',
      name: 'order-summary-component',
      component: () => import('@/views/OrderSummaryComponentView.vue')
    },
    {
      path: '/single-price-component',
      name: 'single-price-component',
      component: () => import('@/views/SinglePriceComponentView.vue')
    },
    {
      path: '/design/:designName',
      name: 'design',
      component: () => import('@/views/DesignView.vue')
    },
    {
      path: '/empty-page',
      name: 'emptyPage',
      component: () => import('@/views/EmptyPageView.vue')
    }
  ]
})

export default router
