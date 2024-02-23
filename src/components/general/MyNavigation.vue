<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const components = ref([
  { routeName: '3-card-component', fullName: '3 Card component' },
  { routeName: 'order-summary-component', fullName: 'Order Summary component' },
  { routeName: 'single-price-component', fullName: 'Single Price component' },
  { routeName: 'social-proof-component', fullName: 'Social Proof component' }
])
</script>

<template>
  <nav>
    <ul>
      <li v-for="component in components" class="d-flex-around" :key="component.routeName">
        <RouterLink :to="{ name: component.routeName }" class="router">
          {{ component.fullName }}</RouterLink
        >
      </li>
    </ul>
    <RouterLink :to="{ name: 'emptyPage' }" class="router"
      >Task 5 [under construction 🚧]</RouterLink
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
