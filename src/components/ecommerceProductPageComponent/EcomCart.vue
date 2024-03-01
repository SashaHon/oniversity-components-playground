<script setup>
const mock = null
</script>
<template>
  <section class="cart">
    <h3 class="cart__title">Cart</h3>
    <ul class="cart__list">
      <li v-if="!mock" class="cart__empty">Your cart is empty.</li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
.cart {
  background-color: #ffff;
  border-radius: 1rem;
  box-shadow: 0 1rem 1.5rem $c-grayish-blue;
  height: 100px;
  width: 100px;
  top: 6rem;
  right: 6rem;
  width: 24%;
  min-height: 24%;
  padding: 1.5rem;

  &__title {
    font-size: $font-size-paragraph;
    padding: 0 0 1.5rem;
  }

  &__list {
    border-top: solid 0.5px $c-dark-grayish-blue;
    margin: 0 -1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    list-style: none;
    height: 100%;
  }

  &__empty {
    margin-top: -1.5rem;
    color: $c-dark-grayish-blue;
  }

  &__title,
  &__empty {
    font-weight: $font-w-bold;
  }
}
</style>
