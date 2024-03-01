<script setup>
import MyDescription from '@/components/general/MyDescription.vue'
import EcomHeader from '@/components/ecommerceProductPageComponent/EcomHeader.vue'
import EcomProductPage from '@/components/ecommerceProductPageComponent/EcomProductPage.vue'
import EcomCart from '@/components/ecommerceProductPageComponent/EcomCart.vue'

import { ref, provide } from 'vue'

const addedNumber = ref(0)

const product = {
  id: 4444,
  name: 'Fall Limited Edition Sneakers',
  company: 'Sneaker Company',
  description: `These low-profile sneakers are your perfect
      casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.`,
  discountedPrice: 125,
  discountPercentage: 50,
  price: 250,
  imgUrlList: [
    { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-1.jpg' },
    { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-1-thumbnail.jpg' },
    { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-2-thumbnail.jpg' },
    { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-3-thumbnail.jpg' },
    { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-4-thumbnail.jpg' }
  ],
  quantityInStock: 5
}
const productList = ref([product, product, product, product, product])
const cartList = ref([product, product])

provide('addedNumber', addedNumber)
provide('productList', productList)
provide('cartList', cartList)
provide('product', product)

// const loggedUser = { id: 123, name: 'Sasha', cartList }
</script>

<template>
  <div class="main-container">
    <MyDescription :routeName="`ecommerce-product-page-component`" />
    <div class="shop">
      <EcomHeader />
      <EcomProductPage />
      <EcomCart class="cart" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
.main-container {
  min-height: 100vh;
  width: 100%;

  font-family: $font-family;

  .shop {
    position: relative;
  }

  .cart {
    position: absolute;
  }
}
</style>
