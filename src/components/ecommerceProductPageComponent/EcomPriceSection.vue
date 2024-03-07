<script setup>
const { discountedPrice, discountPercentage, price } = defineProps([
  'discountedPrice',
  'discountPercentage',
  'price'
])
</script>

<template>
  <div class="container">
    <div class="container--price">
      <span class="price price--new">${{ discountedPrice }}.00</span>
      <span class="price__discount">{{ discountPercentage }}%</span>
    </div>
    <span class="price price--old">${{ price }}.00</span>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
.container {
  margin-top: 2rem;

  &--price {
    display: flex;
    align-items: center;
  }
}

.price {
  font-weight: $font-w-bold;
  &--new {
    font-size: 2rem;
  }

  &--old {
    text-decoration: line-through;
    color: $c-grayish-blue;
  }

  &__discount {
    font-weight: $font-w-bold;
    border-radius: 0.3rem;
    margin-left: 1rem;
    padding: 0 0.4rem;
    background-color: $c-pale-orange;
    color: $c-orange;
  }
}

@media (width < 1040rem) and (orientation: landscape) {
  .container {
    margin-top: 1rem;
  }

  .price {
    &--new {
      font-size: 1.5rem;
    }
  }
}

@media (width < 500px) and (orientation: portrait) {
  .container {
    margin-top: 1rem;
  }
}
</style>
