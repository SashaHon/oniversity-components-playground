<script setup>
import MyDescription from '@/components/general/MyDescription.vue'
import RatingSocial from '@/components/socialProofComponent/RatingSocial.vue'
import CardsSocial from '@/components/socialProofComponent/CardsSocial.vue'
import IntroSocial from '@/components/socialProofComponent/IntroSocial.vue'
</script>

<template>
  <div class="main-container">
    <MyDescription :routeName="`social-proof-component`" />
    <section class="component-container grid">
      <IntroSocial />
      <RatingSocial />
      <CardsSocial class="grid__rating" />
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/_social-proof-variables.scss';
.component-container {
  font-family: $font-family;
  font-size: $font-size-normal;
  color: $c-very-dark-magenta;
  min-height: 100vh;

  background-image: url('@/assets/img/social-proof-component/bg-pattern-top-desktop.svg'),
    url('@/assets/img/social-proof-component/bg-pattern-bottom-desktop.svg');
  background-position:
    left top,
    right bottom;
  background-repeat: no-repeat;
}

.grid {
  display: grid;
  grid-column: 2;
  grid-template-columns: 50%;

  &__rating {
    grid-column: 1 / span 2;
  }
}
</style>
