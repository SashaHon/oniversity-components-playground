<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['routeName'])
</script>

<template>
  <div>
    <p class="main-styles__link main-styles--mt2rem">
      <RouterLink :to="{ path: `/design/${props.routeName}` }" class="router glimming-animation">
        Please check the ---DESIGN 🛼
      </RouterLink>
    </p>
    <p class="main-styles__description-text">
      Scroll down to check the component for better preview or go
    </p>
    <RouterLink :to="{ name: 'home' }" class="main-styles__link">&lt;&lt; Back 🪂</RouterLink>
  </div>
</template>
