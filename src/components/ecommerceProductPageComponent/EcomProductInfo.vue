<script setup>
import { inject } from 'vue'
import EcomPriceSection from './EcomPriceSection.vue'

const currentProductId = inject('currentProductId')
const productList = inject('productList')

const getProductById = (id, list) => {
  // !! it returns simple obj, not proxy!
  return list.value.find((el) => el.id === id.value)
}

const product = getProductById(currentProductId, productList)
</script>

<template>
  <p class="company">{{ product.company }}</p>
  <h2 class="title">{{ product.name }}</h2>
  <p class="description">{{ product.description }}</p>
  <EcomPriceSection
    :discountedPrice="product.discountedPrice"
    :discountPercentage="product.discountPercentage"
    :price="product.price"
  />
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
.company {
  text-transform: uppercase;
  font-weight: $font-w-bold;
}

.title {
  margin-top: 1.4rem;
  font-size: 2.6rem;
  font-weight: $font-w-bold;
  line-height: 2.6rem;
}

.description {
  margin-top: 1.6rem;
  color: $c-dark-grayish-blue;
}

.company,
.discount {
  color: $c-orange;
}

@media (width < 65rem) and (orientation: landscape) {
  .title {
    font-size: 1.6rem;
  }
}
</style>
