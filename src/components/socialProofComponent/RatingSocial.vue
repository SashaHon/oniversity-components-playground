<script setup>
const ratedPlatform = ['Reviews', 'Report Guru', 'BestTech']
</script>

<template>
  <ul class="rating__list">
    <li
      v-for="(platform, index) in ratedPlatform"
      :key="platform + index"
      class="rating__list-item"
    >
      <div class="rating__stars-container"></div>
      <p class="rating__text">Rated 5 Stars in {{ platform }}</p>
    </li>
  </ul>
</template>
