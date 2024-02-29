<script setup>
const navList = [
  { page: 'Collections', url: '#' },
  { page: 'Men', url: '#' },
  { page: 'Woman', url: '#' },
  { page: 'About', url: '#' },
  { page: 'Contact', url: '#' }
]
</script>

<template>
  <ul class="nav">
    <li
      v-for="(link, index) in navList"
      :key="`${link}${index}`"
      class="nav__item nav__item--black-hover"
    >
      <a :href="link.url"> {{ link.page }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
.nav {
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
  color: $c-dark-grayish-blue;
  width: 100%;
  &__item {
    line-height: 7rem;

    &:nth-child(6) {
      width: 40%;
    }
    a {
      color: $c-dark-grayish-blue;
    }

    &--black-hover a:hover {
      color: $c-black;
      line-height: calc(7rem - 8px); //moving border-bottom to the bottom of navigation;
      transform: translateY(
        2px
      ); //compensating text that goes up because of the border-bottom added;
      display: block;
      border-bottom: 5px solid $c-orange;
    }
  }
}
</style>
