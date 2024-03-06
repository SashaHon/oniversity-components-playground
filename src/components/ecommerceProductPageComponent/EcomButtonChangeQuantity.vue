<script setup>
import { inject } from 'vue'

const addedNumber = inject('addedNumber')

const increaseSelectedNumber = () => {
  addedNumber.value += 1
  console.log('added number', addedNumber.value)
}

const decreaseSelectedNumber = () => {
  if (addedNumber.value <= 0) return
  addedNumber.value -= 1
}
</script>

<template>
  <div class="container">
    <button @click="decreaseSelectedNumber" class="btn btn--minus">
      <svg
        width="12"
        height="4"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
            id="a"
          />
        </defs>
        <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a" />
      </svg>
    </button>
    <span class="container__number">{{ addedNumber }}</span>
    <button @click="increaseSelectedNumber" class="btn btn--plus">
      <svg
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
            id="b"
          />
        </defs>
        <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b" />
      </svg>
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

    &:hover {
      cursor: pointer;
    }

    &:hover path {
      opacity: 0.7;
    }
  }

  &__number {
    font-weight: $font-w-bold;
  }
}

@media (width < 70rem) and (orientation: landscape) {
  .container {
    min-width: 8rem;
  }
}

@media (width < 65rem) and (orientation: landscape) {
  .container {
    min-width: 10rem;
  }
}
</style>
