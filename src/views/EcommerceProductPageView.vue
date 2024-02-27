<script setup>
import MyDescription from '@/components/general/MyDescription.vue'
import EcomHeader from '@/components/ecommerceProductPageComponent/EcomHeader.vue'
import EcomProductPage from '@/components/ecommerceProductPageComponent/EcomProductPage.vue'
</script>

<template>
  <div class="main-container">
    <MyDescription :routeName="`ecommerce-product-page-component`" />
    <div class="">
      <EcomHeader />
      <EcomProductPage />
    </div>
  </div>
</template>
