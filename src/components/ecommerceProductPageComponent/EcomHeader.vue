<script setup>
import EcomNavigation from './EcomNavigation.vue'
import EcomCart from './EcomCart.vue'
import EcomAccount from './EcomAccount.vue'
</script>

<template>
  <header>
    <p class="logo">sneakers</p>
    <EcomNavigation />
    <div class="account-container">
      <EcomCart />
      <EcomAccount />
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';

header {
  border-bottom: $c-grayish-blue 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  height: 7rem;
  padding: 0 10%;
  width: 100%;

  .logo {
    font-size: 1.8rem;
    font-weight: $font-w-bold;
    color: #000000;
    line-height: 100%;
  }

  .account-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 12%;
  }
}
</style>
