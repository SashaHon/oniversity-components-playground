<script setup>
import { ref, provide } from 'vue'

import MyDescription from '@/components/general/MyDescription.vue'
import EcomHeader from '@/components/ecommerceProductPageComponent/EcomHeader.vue'
import EcomProductPage from '@/components/ecommerceProductPageComponent/EcomProductPage.vue'
import EcomCart from '@/components/ecommerceProductPageComponent/EcomCart.vue'

const addedNumber = ref(0)
const productList = ref([
  {
    id: 1111,
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
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-1-thumbnail.jpg'
      },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-2-thumbnail.jpg'
      },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-3-thumbnail.jpg'
      },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-4-thumbnail.jpg'
      }
    ],
    quantityInStock: 5
  },
  {
    id: 2222,
    name: 'Second Product',
    company: 'T-shirt Company',
    description: `These low-profile sneakers are your perfect
      casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.`,
    discountedPrice: 50,
    discountPercentage: 50,
    price: 100,
    imgUrlList: [
      { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-1.jpg' },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-1-thumbnail.jpg'
      },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-2-thumbnail.jpg'
      },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-3-thumbnail.jpg'
      },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-4-thumbnail.jpg'
      }
    ],
    quantityInStock: 15
  },
  {
    id: 3333,
    name: 'Third Product',
    company: 'On ',
    description: `These low-profile sneakers are your perfect
      casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.`,
    discountedPrice: 110,
    discountPercentage: 50,
    price: 220,
    imgUrlList: [
      { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-1.jpg' },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-1-thumbnail.jpg'
      },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-2-thumbnail.jpg'
      },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-3-thumbnail.jpg'
      },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-4-thumbnail.jpg'
      }
    ],
    quantityInStock: 30
  },
  {
    id: 4444,
    name: 'Third Product',
    company: 'On ',
    description: `These low-profile sneakers are your perfect
      casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.`,
    discountedPrice: 110,
    discountPercentage: 50,
    price: 220,
    imgUrlList: [
      { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-1.jpg' },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-1-thumbnail.jpg'
      },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-2-thumbnail.jpg'
      },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-3-thumbnail.jpg'
      },
      {
        url: 'src/assets/img/ecommerce-product-page-component/images/image-product-4-thumbnail.jpg'
      }
    ],
    quantityInStock: 30
  }
])
const cartList = ref([])
const totalPrice = ref('340')
const currentProductId = ref(productList.value[0].id)
const productNumberInCart = ref(getProductNumberInCart())
const isHidden = ref('true')

function getProductNumberInCart() {
  return cartList.value.reduce((total, cartItem) => {
    return (total += cartItem.quantity)
  }, 0)
}

// function toggleWhenBigger(width, value) {
//   return width > value
// }

provide('addedNumber', addedNumber)
provide('productList', productList)
provide('cartList', cartList)
provide('totalPrice', totalPrice)
provide('currentProductId', currentProductId)
provide('productNumberInCart', productNumberInCart)
provide('getProductNumberInCart', getProductNumberInCart)
provide('isHidden', isHidden)
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
