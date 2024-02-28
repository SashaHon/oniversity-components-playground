<script setup>
import EcomNavigation from './EcomNavigation.vue'
</script>

<template>
  <header>
    <EcomNavigation />
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';

header {
  border-bottom: $c-grayish-blue 1px solid;
}
</style>
