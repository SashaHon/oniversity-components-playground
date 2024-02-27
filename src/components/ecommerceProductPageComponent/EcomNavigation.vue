<script setup>
const navigationList = ['Collections', 'Men', 'Women', 'About', 'Contact ']
</script>

<template>
  <ul class="nav">
    <li v-for="(link, index) in navigationList" :key="`${link}${index}`" class="nav-item">
      {{ link }}
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>
