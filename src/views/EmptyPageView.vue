<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="empty-container">
    <div class="empty-text">
      <p>No, srsly, I don't exist yet! > . &lt;</p>
      <p>Please go <RouterLink to="/"> &lt;&lt; back </RouterLink></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.empty {
  &-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
  &-text {
    text-align: center;
  }
}
</style>
