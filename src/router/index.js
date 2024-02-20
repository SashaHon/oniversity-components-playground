import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ThreeCardComponentView from '../views/ThreeCardComponentView.vue'
import OrderSummaryComponentView from '../views/OrderSummaryComponentView.vue'
import EmptyPageView from '../views/EmptyPageView.vue'
import DesignThreeCardComponentView from '../views/DesignThreeCardComponentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/3-card-component',
      name: '3-card-component',

      component: ThreeCardComponentView
    },
    {
      path: '/order-summary-component',
      name: 'order-summary-component',
      component: OrderSummaryComponentView
    },
    {
      path: '/empty-page',
      name: 'empty-page',
      component: EmptyPageView
    },
    {
      path: '/design-3-card-component',
      name: 'design-3-card-component',
      component: DesignThreeCardComponentView
    }
  ]
})

export default router
