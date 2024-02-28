<script setup></script>

<template>
  <div class="container">
    <button class="btn btn--minus">
      <img
        src="@/assets/img/ecommerce-product-page-component/images/icon-minus.svg"
        alt="plus icon"
      />
    </button>
    <span class="container__number">0</span>
    <button class="btn btn--plus">
      <img
        src="@/assets/img/ecommerce-product-page-component/images/icon-plus.svg"
        alt="plus icon"
      />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
@import '@/assets/_ecommerce-product-page-utils.scss';
.container {
  background-color: $c-light-grayish-blue;
  border-radius: 0.3rem;
  width: fit-content;
  padding: 1rem 1rem;
  min-width: 10rem;
  width: 30%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn {
    &--minus {
      transform: translateY(-3px);
    }
  }

  &__number {
    font-weight: $font-w-bold;
  }
}
</style>
