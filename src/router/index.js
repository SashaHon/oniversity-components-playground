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
      path: '/hello',
      name: 'home',
      component: HomeView
    },
    {
      path: '/3-card-component',
      name: '3Cards',

      component: ThreeCardComponentView
    },
    {
      path: '/order-summary-component',
      name: 'orderSummary',
      component: OrderSummaryComponentView
    },
    {
      path: '/empty-page',
      name: 'emptyPage',
      component: EmptyPageView
    },
    {
      path: '/design-3-card-component',
      name: 'design3Cards',
      component: DesignThreeCardComponentView
    }
  ]
})

export default router
