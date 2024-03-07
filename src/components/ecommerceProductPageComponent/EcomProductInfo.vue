<script setup>
import { inject } from 'vue'
import EcomPriceSection from './EcomPriceSection.vue'

const currentProductId = inject('currentProductId')
const productList = inject('productList')

const getProductById = (id, list) => {
  // !! it returns simple obj, not proxy!
  return list.value.find((el) => el.id === id.value)
}

const { company, name, description, discountedPrice, discountPercentage, price } = getProductById(
  currentProductId,
  productList
)
</script>

<template>
  <p class="company">{{ company }}</p>
  <h2 class="title">{{ name }}</h2>
  <p class="description">{{ description }}</p>
  <EcomPriceSection
    :discountedPrice="discountedPrice"
    :discountPercentage="discountPercentage"
    :price="price"
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

@media (width < 1040px) and (orientation: landscape) {
  .title {
    font-size: 1.6rem;
  }
}

@media (width < 500px) and (orientation: portrait) {
  .title {
    font-size: 2rem;
  }

  .company,
  .title,
  .description {
    margin-top: 1rem;
  }
}
</style>
