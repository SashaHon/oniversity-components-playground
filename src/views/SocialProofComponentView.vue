<script setup>
import MyDescription from '@/components/general/MyDescription.vue'
import RatingSocial from '@/components/socialProofComponent/RatingSocial.vue'
import CardsSocial from '@/components/socialProofComponent/CardsSocial.vue'
import IntroSocial from '@/components/socialProofComponent/IntroSocial.vue'
</script>

<!-- <template>
  <div class="main-container">
    <MyDescription :routeName="`social-proof-component`" />
    <section class="component-container">
      <div class="social__top-container">
        <div class="social__top-left-container">
          <h1 class="social__title">10,000+ of our users love our products.</h1>
          <p class="social__description">
            We only provide great products combined with excellent customer service. See what our
            satisfied customers are saying about our services.
          </p>
        </div>
        <div class="social__rating-container">
          <RatingSocial />
        </div>
      </div>

      <div class="social__bottom-container">
        <CardsSocial />
      </div>
    </section>
  </div>
</template> -->

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
.component-container {
  background-color: grey;
}

.grid {
  display: grid;
  grid-column: 2;
  background-color: blue;

  &__rating {
    grid-column: 1 / span 2;
    background-color: green;
  }
}
</style>
