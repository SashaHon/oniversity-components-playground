<script setup></script>

<template>
  <div class="main-container">
    <p class="main-styles__description-text">
      Scroll down to check the component for better preview or go
    </p>
    <RouterLink :to="{ name: 'home' }" class="link-back">&lt;&lt; Back 🪂</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  width: 100%;
}
</style>
