<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <div class="d-flex-around">
      <RouterLink to="/3-card-component">3 card component</RouterLink>
      <RouterLink to="/design-3-card-component">---design</RouterLink>
    </div>

    <RouterLink to="/order-summary-component" class="test"
      >Order summary component [under construction 🚧]</RouterLink
    >
    <RouterLink to="/empty-page">Task 3..5 [under construction 🚧]</RouterLink>
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
