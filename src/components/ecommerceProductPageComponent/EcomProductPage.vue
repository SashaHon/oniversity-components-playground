<script setup>
import EcomButtonChangeQuantity from './EcomButtonChangeQuantity.vue'
import EcomButtonPrimary from './EcomButtonPrimary.vue'
import EcomPriceSection from './EcomPriceSection.vue'

import { inject } from 'vue'

const addedNumber = inject('addedNumber')

const currentProductId = inject('currentProductId')
const productList = inject('productList')
const cartList = inject('cartList')
const productNumberInCart = inject('productNumberInCart')
const getProductNumberInCart = inject('getProductNumberInCart')

const getProductById = (id, list) => {
  // !! it returns simple obj, not proxy!
  return list.value.find((el) => el.id === id.value)
}

const product = getProductById(currentProductId, productList)

const addToCart = () => {
  if (!addedNumber.value) return
  //define if a product with such Id already exists in the cart or no;
  const foundProduct = getProductById(currentProductId, cartList)

  if (foundProduct) {
    foundProduct.quantity += addedNumber.value
  } else if (!foundProduct) {
    cartList.value.push({ id: currentProductId.value, quantity: addedNumber.value })
  }
  // console.log(cartList.value)
  addedNumber.value = 0
  productNumberInCart.value = getProductNumberInCart()
}
</script>
<template>
  <article class="product">
    <section class="product__container--display">
      <img
        v-for="(img, index) in product.imgUrlList"
        :key="index + 555"
        :src="img.url"
        alt="product photo"
        class="product__photo"
      />
    </section>
    <section class="product__container--info">
      <p class="product__company">{{ product.company }}</p>
      <h2 class="product__title">{{ product.name }}</h2>
      <p class="product__description">{{ product.description }}</p>
      <EcomPriceSection
        :discountedPrice="product.discountedPrice"
        :discountPercentage="product.discountPercentage"
        :price="product.price"
      />

      <div class="product__btn-container">
        <EcomButtonChangeQuantity class="product__btn" />
        <EcomButtonPrimary
          @click="addToCart"
          class="product__btn"
          :imgUrl="'src/assets/img/ecommerce-product-page-component/images/icon-cart.svg'"
          :text="'Add to cart'"
          :altText="'cart icon'"
        />
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';

.product {
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: $font-size-paragraph;
  padding: 5% 10%;

  &__photo {
    aspect-ratio: 1 / 1;
    width: 20%;
    border-radius: 0.3rem;

    &:first-child {
      width: 100%;
    }

    &:not(:first-child):hover {
      // border: solid 3px $c-orange;
      opacity: 0.5;
      cursor: pointer;
    }
  }

  &__company {
    text-transform: uppercase;
    font-weight: $font-w-bold;
  }

  &__title {
    margin-top: 1.4rem;
    font-size: 2.6rem;
    font-weight: $font-w-bold;
    line-height: 2.6rem;
  }

  &__description {
    margin-top: 1.6rem;
    color: $c-dark-grayish-blue;
  }

  &__btn-container {
    display: flex;
    height: fit-content;
    margin-top: 2rem;
    gap: 1rem;
  }

  &__company,
  &__discount {
    color: $c-orange;
  }

  &__container--display {
    padding: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: fit-content;
    gap: 1rem;
    width: 100%;
  }

  &__container--info {
    padding: 20% 10%;
  }
}
</style>
