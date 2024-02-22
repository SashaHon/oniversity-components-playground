import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ThreeCardComponentView from '../views/ThreeCardComponentView.vue'
import OrderSummaryComponentView from '../views/OrderSummaryComponentView.vue'
import DesignOrderSummaryComponentView from '@/views/DesignOrderSummaryComponentView.vue'
import EmptyPageView from '../views/EmptyPageView.vue'
import DesignThreeCardComponentView from '../views/DesignThreeCardComponentView.vue'
import SinglePriceComponentView from '@/views/SinglePriceComponentView.vue'
import DesignSinglePriceComponentView from '@/views/DesignSinglePriceComponentView.vue'

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
      path: '/design-3-card-component',
      name: 'design3Cards',
      component: DesignThreeCardComponentView
    },
    {
      path: '/order-summary-component',
      name: 'orderSummary',
      component: OrderSummaryComponentView
    },
    {
      path: '/design-order-summary-component',
      name: 'designOrderSummary',
      component: DesignOrderSummaryComponentView
    },
    {
      path: '/single-price-component',
      name: 'singlePrice',
      component: SinglePriceComponentView
    },
    {
      path: '/design-single-price-component',
      name: 'designSinglePrice',
      component: DesignSinglePriceComponentView
    },
    {
      path: '/empty-page',
      name: 'emptyPage',
      component: EmptyPageView
    }
  ]
})

export default router
