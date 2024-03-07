<script setup>
import { inject } from 'vue'
import EcomCartItem from './EcomCartItem.vue'
import EcomButtonPrimary from './EcomButtonPrimary.vue'

const cartList = inject('cartList')
const isHidden = inject('isHidden')
</script>
<template>
  <section v-if="!isHidden" class="cart">
    <h3 class="cart__title">Cart</h3>
    <div class="cart__container">
      <p v-if="!cartList.length" cart="cart__empty">Your cart is empty.</p>
      <ul v-else class="cart__list">
        <li
          v-for="(product, index) in cartList"
          :key="`${product.name}${index}`"
          class="cart__list-item"
        >
          <EcomCartItem :productInCart="product" />
        </li>
        <li>
          <EcomButtonPrimary class="cart__btn" :text="'Checkout'" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
.cart {
  background-color: #ffff;
  border-radius: 1rem;
  box-shadow: 0 1rem 1.5rem hsl(0, 0, 0, 0.2);
  top: 6rem;
  right: 2rem;
  min-width: 20rem;
  max-height: 100%;
  z-index: 2;

  &__title {
    font-size: $font-size-paragraph;
  }

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__container {
    border-top: solid 0.5px $c-dark-grayish-blue;
    min-height: 10rem;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  &__list {
    width: 100%;
    list-style: none;
  }

  &__list-item {
    margin-top: 1rem;
    &:nth-child(1) {
      margin-top: 0;
    }
  }

  &__empty {
    color: $c-dark-grayish-blue;
  }

  &__title,
  &__empty {
    font-weight: $font-w-bold;
  }

  &__title,
  &__container {
    padding: 1.5rem;
  }

  &__btn {
    margin-top: 1.5rem;
  }
}

@media (width < 500px) and (orientation: portrait) {
  .cart {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    top: 8rem;
    width: 90%;

    &__title,
    &__container {
      font-size: 0.8rem;
    }

    &__container {
      height: 15rem;
    }
  }
}

@media (width < 375px) and (orientation: portrait) {
  .cart {
    min-width: 10rem;
    &__container {
      height: 12rem;
    }
  }
}

@media (width < 320px) and (orientation: portrait) {
  .cart {
    &__container {
      height: 8rem;
    }
    &__title,
    &__container {
      font-size: 0.7rem;
    }
  }
}
</style>
