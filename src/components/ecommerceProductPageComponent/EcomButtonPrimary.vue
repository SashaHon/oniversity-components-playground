<script setup>
const props = defineProps(['imgUrl', 'text', 'altText'])
</script>

<template>
  <button class="btn btn--add">
    <img :src="props.imgUrl" :alt="props.altText" class="btn__cart-icon" />
    {{ props.text }}
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
@import '@/assets/_ecommerce-product-page-utils.scss';
.btn {
  &--add {
    margin-left: 1rem;
    background-color: $c-orange;
    color: $c-light-grayish-blue;
    font-weight: $font-w-bold;
    padding: 1rem 1rem;
    border-radius: 0.3rem;
    width: 100%;
    box-shadow: 0 1rem 1rem $c-pale-orange;
    white-space: pre;
  }
  &__cart-icon {
    width: 1rem;
    margin-right: 0.5rem;
  }
}
</style>
