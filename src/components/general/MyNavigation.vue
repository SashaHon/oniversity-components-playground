<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <div class="d-flex-around">
      <RouterLink :to="{ name: '3Cards' }" class="router">3 card component</RouterLink>
      <RouterLink :to="{ name: 'design3Cards' }" class="router"> ---design</RouterLink>
    </div>
    <div class="d-flex-around">
      <RouterLink :to="{ name: 'orderSummary' }" class="router">Order summary component</RouterLink>
      <RouterLink :to="{ name: 'designOrderSummary' }" class="router"> ---design</RouterLink>
    </div>
    <div class="d-flex-around">
      <RouterLink :to="{ name: 'singlePrice' }" class="router">Single price component</RouterLink>
      <RouterLink :to="{ name: 'designSinglePrice' }" class="router"> ---design</RouterLink>
    </div>

    <RouterLink :to="{ name: 'emptyPage' }" class="router"
      >Task 4..5 [under construction 🚧]</RouterLink
    >
  </nav>
</template>

<style scoped lang="scss">
a {
  display: block;
  text-align: center;
}

nav a {
  color: rgb(37, 113, 145);
}

nav a:hover {
  cursor: pointer;
  color: rgb(202, 107, 214);
}

.d-flex-around {
  display: flex;
  justify-content: space-around;
}
.router-link-active {
  color: rgb(202, 107, 214);
  font-weight: bold;
}

@media (width <= 70rem) {
  .router {
    font-size: 1.6rem;
  }
}

@media (width <= 40rem) {
  .router {
    font-size: 1.2rem;
  }
}

@media (width <= 23rem) {
  .router {
    font-size: 0.8rem;
  }
}
</style>
