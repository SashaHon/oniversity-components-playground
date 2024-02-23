<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const designName = route.params.designName

const imgUrl = (name) => {
  const imgUrl = new URL(`../assets/img/${designName}/design/${name}.jpg`, import.meta.url).href
  return /^(?!.*undefined).*$/.test(imgUrl) ? imgUrl : false
}

const desktopDesign = imgUrl('desktop-design')
const desktopPreview = imgUrl('desktop-preview')
const activeStates = imgUrl('active-states')
const mobileDesign = imgUrl('mobile-design')
</script>

<template>
  <section class="design-container">
    <div v-if="desktopDesign">
      <h2 class="main-styles__description-text">Desktop Design</h2>
      <img :src="desktopDesign" alt="desktop design" />
    </div>

    <div v-if="desktopPreview">
      <h2 class="main-styles__description-text">Desktop Preview</h2>
      <img :src="desktopPreview" alt="desktop preview" />
    </div>

    <div v-if="activeStates">
      <h2 class="main-styles__description-text">Active States</h2>
      <img :src="activeStates" alt="active states" />
    </div>

    <div v-if="mobileDesign">
      <h2 class="main-styles__description-text">Mobile Design</h2>
      <img :src="mobileDesign" alt="mobile design" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.design-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
