<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <div class="d-flex-around">
      <RouterLink :to="{ name: '3Cards' }">3 card component</RouterLink>
      <RouterLink :to="{ name: 'design3Cards' }">---design</RouterLink>
    </div>
    <div class="d-flex-around">
      <RouterLink :to="{ name: 'orderSummary' }">Order summary component</RouterLink>
      <RouterLink :to="{ name: 'designOrderSummary' }">---design</RouterLink>
    </div>

    <RouterLink :to="{ name: 'emptyPage' }">Task 3..5 [under construction 🚧]</RouterLink>
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
</style>
