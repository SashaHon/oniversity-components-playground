<script setup>
const navigationList = ['Collections', 'Men', 'Women', 'About', 'Contact ']
</script>

<template>
  <ul>
    <li v-for="(link, index) in navigationList" :key="`${link}${index}`">{{ link }}</li>
  </ul>
</template>
