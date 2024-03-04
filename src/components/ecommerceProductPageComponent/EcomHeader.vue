<script setup>
import EcomNavigation from './EcomNavigation.vue'
import EcomCartIcon from './EcomCartIcon.vue'
import EcomAccount from './EcomAccount.vue'
</script>

<template>
  <header>
    <div class="container">
      <p class="logo">sneakers</p>
      <EcomNavigation />
      <div class="account-container">
        <EcomCartIcon />
        <EcomAccount />
      </div>
    </div>
    <div class="styled-line"></div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';

header {
  padding: 0 10%;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    height: 7rem;
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

  .styled-line {
    height: 0.5px;
    background-color: $c-grayish-blue;
  }
}
</style>
