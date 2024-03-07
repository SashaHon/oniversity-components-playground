<script setup>
import { inject } from 'vue'
import EcomCloseBtn from './EcomCloseBtn.vue'

const toggleMenu = inject('toggleMenu')

const navList = [
  { page: 'Collections', url: '#' },
  { page: 'Men', url: '#' },
  { page: 'Woman', url: '#' },
  { page: 'About', url: '#' },
  { page: 'Contact', url: '#' }
]
</script>

<template>
  <menu class="list">
    <li class="list__item list__btn">
      <EcomCloseBtn @click="toggleMenu" />
    </li>
    <li
      v-for="({ page, url }, index) in navList"
      :key="`${page + index}`"
      class="list__item"
      @click="toggleMenu"
    >
      <a :href="url"> {{ page }}</a>
    </li>
  </menu>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
.list {
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
  color: $c-dark-grayish-blue;
  width: 100%;
  &__item {
    line-height: 7rem;

    a {
      color: $c-dark-grayish-blue;
    }

    a:hover {
      color: $c-black;
      line-height: calc(7rem - 8px); //moving border-bottom to the bottom of listigation;
      transform: translateY(
        2px
      ); //compensating text that goes up because of the border-bottom added;
      display: block;
      border-bottom: 5px solid $c-orange;
    }
  }
}

@media (width < 1040px) and (orientation: landscape) {
  .list {
    gap: 1rem;
    width: auto;
  }
}

@media (width < 850px) {
  .list {
    flex-direction: column;
    position: fixed;
    z-index: 2;
    background-color: #ffff;
    width: 70%;
    height: 100%;
    top: 0;
    &__item {
      font-size: 1rem;
      line-height: 1rem;
      width: 100%;
      padding: 1rem;
      &:nth-child(6) {
        width: 100%;
      }
      &:hover {
        cursor: pointer;
      }

      a {
        color: $c-very-dark-blue;
        font-weight: $font-w-bold;
        &:hover {
          color: $c-grayish-blue;
        }
      }
    }
  }
}
</style>
