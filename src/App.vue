<script setup>
import { RouterView } from 'vue-router'

import MyHeading from './components/general/MyHeading.vue'
</script>

<template>
  <main>
    <MyHeading />
    <RouterView />
  </main>
</template>

<style lang="scss">
main {
  padding: 2rem;
}
</style>
