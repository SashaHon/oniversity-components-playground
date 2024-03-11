<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const designName = route.params.designName

const imgUrl = (name) => {
  const imgUrl = new URL(`../assets/img/${designName}/design/${name}.jpg`, import.meta.url).href
  return imgUrl.includes(name) ? imgUrl : false
}

const designs = [
  { url: imgUrl('desktop-design'), name: 'Desktop' },
  { url: imgUrl('desktop-preview'), name: 'Desktop preview' },
  { url: imgUrl('desktop-design-lightbox'), name: 'Desktop lightbox' },
  { url: imgUrl('active-states'), name: 'Active states' },
  { url: imgUrl('active-states-basket-empty'), name: 'Active states empty basket' },
  { url: imgUrl('active-states-basket-filled'), name: 'Active states filled basket' },
  { url: imgUrl('active-states-lightbox'), name: 'Active states lightbox' },
  { url: imgUrl('mobile-design'), name: 'Mobile' },
  { url: imgUrl('mobile-menu'), name: 'Mobile menu' },
  { url: imgUrl('mobile-design-basket-empty'), name: 'Mobile empty basket' },
  { url: imgUrl('mobile-design-basket-filled'), name: 'Mobile filled basket' }
]

const currentDesigns = designs.filter((el) => el.url)
</script>

<template>
  <section class="design-container">
    <div v-for="(design, index) in currentDesigns" :key="index + design.name">
      <h2 class="main-styles__description-text">{{ design.name }} 🔻</h2>
      <img :src="design.url" :alt="`${design.name} design`" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.design-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 4rem;
  }
}
</style>
