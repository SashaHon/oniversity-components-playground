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
    <li class="nav__logo nav__item">sneakers</li>
    <li
      v-for="(link, index) in navList"
      :key="`${link}${index}`"
      class="nav__item nav__item--black-hover"
    >
      <a :href="link.url"> {{ link.page }}</a>
    </li>
    <li class="nav__acccount-container">
      <div class="nav__cart-icon">
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#red"
            fill-rule="nonzero"
          />
        </svg>
      </div>

      <div class="nav__avatar-border">
        <img
          src="@/assets/img/ecommerce-product-page-component/images/image-avatar.png"
          alt="profile avatar"
          class="nav__avatar"
        />
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
.nav {
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10%;
  color: $c-dark-grayish-blue;

  &__logo {
    font-size: 1.8rem;
    font-weight: $font-w-bold;
    color: #000000;
  }

  &__item {
    &:nth-child(6) {
      width: 40%;
    }

    a {
      color: $c-dark-grayish-blue;
    }

    &--black-hover a:hover {
      color: $c-black;
    }
  }

  &__acccount-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 12%;
  }

  &__cart-icon:hover {
    cursor: pointer;
    & path {
      fill: $c-black;
    }
  }

  &__cart-icon path {
    fill: $c-dark-grayish-blue;
  }

  &__avatar {
    max-height: 3rem;
    border: 3px solid transparent;

    &:hover {
      cursor: pointer;
      border: 3px solid $c-orange;
      border-radius: 100%;
    }
  }
}
</style>
