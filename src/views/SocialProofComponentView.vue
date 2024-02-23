<script setup>
import MyDescription from '@/components/general/MyDescription.vue'
</script>

<template>
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
          Rated 5 Stars in Reviews Rated 5 Stars in Report Guru Rated 5 Stars in BestTech
        </div>
      </div>

      <div class="social__bottom-container">
        Colton Smith Verified Buyer "We needed the same printed design as the one we had ordered a
        week prior. Not only did they find the original order, but we also received it in time.
        Excellent!" Irene Roberts Verified Buyer "Customer service is always excellent and very
        quick turn around. Completely delighted with the simplicity of the purchase and the speed of
        delivery." Anne Wallace Verified Buyer "Put an order with this company and can only praise
        them for the very high standard. Will definitely use them again and recommend them to
        everyone!"
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
