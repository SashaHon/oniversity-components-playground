<script setup>
const imgList = [
  { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-1.jpg' },
  { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-1-thumbnail.jpg' },
  { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-2-thumbnail.jpg' },
  { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-3-thumbnail.jpg' },
  { url: 'src/assets/img/ecommerce-product-page-component/images/image-product-4-thumbnail.jpg' }
]

const product = {
  company: 'Sneaker Company',
  name: 'Fall Limited Edition Sneakers',
  description: `These low-profile sneakers are your perfect
      casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.`,
  discountedPrice: 125.0,
  discountPercentage: 50,
  price: 250.0
}
</script>
<template>
  <article class="product">
    <section class="product__container--display">
      <img
        v-for="(img, index) in imgList"
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
      <div class="product__container--price">
        <div class="product__price-container">
          <span class="product__price product__price--new">${{ product.discountedPrice }}.00</span>
          <span class="product__discount">{{ product.discountPercentage }}%</span>
        </div>
        <span class="product__price product__price--old">${{ product.price }}.00</span>
      </div>

      <div class="product__btn-container">
        <div class="product__container--add">
          <button class="product__btn product__btn--minus">
            <img
              src="@/assets/img/ecommerce-product-page-component/images/icon-minus.svg"
              alt="plus icon"
            />
          </button>
          <span class="product__number">0</span>
          <button class="product__btn product__btn--plus">
            <img
              src="@/assets/img/ecommerce-product-page-component/images/icon-plus.svg"
              alt="plus icon"
            />
          </button>
        </div>
        <button class="product__btn product__btn--add">
          <img
            src="@/assets/img/ecommerce-product-page-component/images/icon-cart.svg"
            alt="cart icon"
            class="product__cart-icon"
          />
          Add to cart
        </button>
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
  padding: 10%;

  &__photo {
    aspect-ratio: 1 / 1;
    width: 20%;
    border-radius: 0.3rem;

    &:first-child {
      width: 100%;
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

  &__price-container {
    display: flex;
    align-items: center;
  }

  &__btn-container {
    display: flex;
    height: fit-content;
    margin-top: 2rem;
  }

  &__price {
    font-weight: $font-w-bold;
    &--new {
      font-size: 2rem;
    }

    &--old {
      text-decoration: line-through;
      color: $c-grayish-blue;
    }
  }

  &__discount {
    font-weight: $font-w-bold;
    border-radius: 0.3rem;
    margin-left: 1rem;
    padding: 0 0.4rem;
    background-color: $c-pale-orange;
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

  &__container--price {
    margin-top: 2rem;
  }

  &__container--add {
    background-color: $c-light-grayish-blue;
    border-radius: 0.3rem;
    width: fit-content;
    padding: 1rem 1rem;
    min-width: 10rem;
    width: 30%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__number {
    font-weight: $font-w-bold;
  }

  &__cart-icon {
    width: 1rem;
    margin-right: 0.5rem;
  }

  &__btn {
    background-color: transparent;
    border-width: 0;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: 0;

    &--minus {
      transform: translateY(-3px);
    }

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
  }
}
</style>
