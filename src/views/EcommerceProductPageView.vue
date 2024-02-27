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

<style scoped lang="scss">
.main-container {
  min-height: 100vh;
  width: 100%;
}
</style>
