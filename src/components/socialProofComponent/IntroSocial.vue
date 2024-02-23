<template>
  <div class="social">
    <h1 class="social__title">10,000+ of our users love our products.</h1>
    <p class="social__description">
      We only provide great products combined with excellent customer service. See what our
      satisfied customers are saying about our services.
    </p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/_social-proof-variables.scss';

.social {
  padding: 16% 8% 8% 16%;

  &__title {
    font-size: 3rem;
    font-weight: $font-weight-extrabold;
    margin-right: 3rem;
    line-height: 3rem;
  }

  &__description {
    margin-top: 2rem;
    font-size: 1.2rem;
  }
}
</style>
