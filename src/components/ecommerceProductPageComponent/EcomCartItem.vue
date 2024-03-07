<script setup>
import { inject } from 'vue'

import EcomDeleteButton from './EcomDeleteButton.vue'

const productList = inject('productList')
const cartList = inject('cartList')
const productNumberInCart = inject('productNumberInCart')
const getProductNumberInCart = inject('getProductNumberInCart')

const props = defineProps(['productInCart'])

const getProductById = (productInCart, list) => {
  // !! it returns simple obj, not proxy!
  // console.log(id, list)
  return list.value.find((el) => el.id === productInCart.id)
}

const getProductIndex = (productId, list) => {
  return list.value.findIndex((el) => el.id === productId)
}

const product = getProductById(props.productInCart, productList)
const productImgUrl = product.imgUrlList[1].url

const deleteProductFromCart = () => {
  const indexInCart = getProductIndex(props.productInCart.id, cartList)
  cartList.value.splice(indexInCart, 1)
  productNumberInCart.value = getProductNumberInCart()
}
</script>

<template>
  <article class="product">
    <img v-if="productImgUrl" :src="productImgUrl" alt="product image" class="product__img" />
    <div class="product__info">
      <h4 class="product__title">{{ product.name }}</h4>
      <p class="product__quantity">
        {{ `$${product.discountedPrice}.00 x ${props.productInCart.quantity}` }}
        <span class="product__price">
          ${{ product.discountedPrice * props.productInCart.quantity }}.00
        </span>
      </p>
    </div>
    <EcomDeleteButton class="btn" @click="deleteProductFromCart" />
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
@import '@/assets/_ecommerce-product-page-utils.scss';
.product {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;

  &__img {
    aspect-ratio: 1 / 1;
    height: 3rem;
    border-radius: 0.3rem;
  }

  &__info {
    width: 100%;
  }

  &__price {
    color: $c-black;
    font-weight: $font-w-bold;
  }

  &__title,
  &__quantity {
    color: $c-dark-grayish-blue;
  }
}

@media (width < 320px) and (orientation: portrait) {
  .product {
    &__img {
      height: 2rem;
    }
  }
}
</style>
