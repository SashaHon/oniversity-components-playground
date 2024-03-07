<script setup>
import { inject } from 'vue'
import EcomButtonChangeQuantity from './EcomButtonChangeQuantity.vue'
import EcomButtonPrimary from './EcomButtonPrimary.vue'
import EcomSlide from './EcomSlide.vue'
import EcomProductInfo from './EcomProductInfo.vue'

const addedNumber = inject('addedNumber')
const currentProductId = inject('currentProductId')
const cartList = inject('cartList')
const productNumberInCart = inject('productNumberInCart')
const getProductNumberInCart = inject('getProductNumberInCart')

const getProductById = (id, list) => {
  // !! it returns simple obj, not proxy!
  return list.value.find((el) => el.id === id.value)
}

const addToCart = () => {
  if (!addedNumber.value) return
  //define if a product with such Id already exists in the cart or no;
  const foundProduct = getProductById(currentProductId, cartList)

  if (foundProduct) {
    foundProduct.quantity += addedNumber.value
  } else if (!foundProduct) {
    cartList.value.push({ id: currentProductId.value, quantity: addedNumber.value })
  }
  addedNumber.value = 0
  productNumberInCart.value = getProductNumberInCart()
}
</script>
<template>
  <article class="product">
    <section class="product__container--display">
      <EcomSlide />
    </section>
    <section class="product__container--info">
      <EcomProductInfo />
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

  &__btn-container {
    display: flex;
    margin-top: 2rem;
    gap: 1rem;
  }

  &__container--display {
    padding: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: fit-content;
    gap: 1rem;
  }

  &__container--info {
    padding: 20% 10%;
  }
}

// @media (width < 1040px) and (orientation: landscape) {
//   .product {
//     font-size: 0.8rem;
//     gap: 5%;

//     &__btn-container {
//       flex-direction: column;
//     }

//     &__container--info,
//     &__container--display {
//       padding: 0;
//       max-width: fit-content;
//     }
//   }
// }

@media (width < 1040px) {
  .product {
    font-size: 0.8rem;
    gap: 5%;

    &__btn-container {
      flex-direction: column;
    }

    &__container--info,
    &__container--display {
      padding: 0;
      max-width: fit-content;
    }
  }
}

@media (width < 850px) and (orientation: landscape), (width < 850px) and (orientation: portrait) {
  .product {
    padding: 1rem 2rem;
  }
}

@media (width < 500px) and (orientation: portrait) {
  .product {
    display: block;
    padding: 0 1rem 2rem;

    &__btn-container {
      margin-top: 1rem;
    }
  }
}
</style>
