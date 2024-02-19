<script setup>
import { RouterLink } from 'vue-router'
import MyNavigation from './MyNavigation.vue'
</script>

<template>
  <header>
    <RouterLink to="/" class="title-home-link">
      <h1>˙✧˖°👾༘ ⋆｡˚ Oniversity Components Playground ˙⋆｡🪐✧˖˚</h1>
    </RouterLink>
    <MyNavigation />
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }
}

.title-home-link {
  color: black;
}

@media (width <= 70rem) {
  h1 {
    font-size: 1.8rem;
  }
}

@media (width <= 40rem) {
  h1 {
    font-size: 1.6rem;
  }
}

@media (width <= 23rem) {
  h1 {
    font-size: 1.2rem;
  }
}
</style>
