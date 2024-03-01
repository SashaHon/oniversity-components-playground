<script setup>
import { inject } from 'vue'
const cartList = inject('cartList')
</script>
<template>
  <section class="cart">
    <h3 class="cart__title">Cart</h3>
    <ul class="cart__list">
      <li v-if="!cartList.length" class="cart__empty">Your cart is empty.</li>
      <li
        v-else
        v-for="(item, index) in cartList"
        :key="`${item.name + index}`"
        class="cart__list-item"
      >
        {{ item.name }}
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
.cart {
  background-color: #ffff;
  border-radius: 1rem;
  box-shadow: 0 1rem 1.5rem $c-grayish-blue;
  top: 6rem;
  right: 6rem;
  width: 24%;

  min-height: fit-content;

  &__title {
    font-size: $font-size-paragraph;
  }

  &__list {
    border-top: solid 0.5px $c-dark-grayish-blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    height: fit-content;
    min-height: 10rem;

    background-color: blue;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  &__list-item {
    background-color: green;
    width: 100%;
  }

  &__empty {
    color: $c-dark-grayish-blue;
  }

  &__title,
  &__empty {
    font-weight: $font-w-bold;
  }

  &__title,
  &__list {
    padding: 1.5rem;
  }
}
</style>
