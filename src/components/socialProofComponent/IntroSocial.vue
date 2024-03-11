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
  padding: 12% 6% 6% 12%;

  &__title {
    font-size: 3rem;
    font-weight: $font-weight-extrabold;
    line-height: 3rem;
    width: 70%;
  }

  &__description {
    margin-top: 2rem;
    font-size: 1.2rem;
  }
}

@media (width > 52rem) and (orientation: portrait) {
  .social {
    padding: 12% 12% 6% 12%;
  }
}

@media (width <= 24rem) {
  .social {
    text-align: center;
    padding: 6% 6% 0 6%;
    &__title {
      width: 100%;
    }
  }
}

@media (width < 65rem) and (orientation: landscape) {
  .social {
    &__title {
      font-size: 2rem;
      line-height: 2rem;
    }

    &__description {
      font-size: 0.9rem;
    }
  }
}

@media (orientation: portrait), (width <= 32rem) and (orientation: landscape) {
  .social {
    text-align: center;

    &__title {
      width: 100%;
    }
  }
}
// @media (width > 90rem) {
// }

// @media (width <= 70rem) {
// }

// @media (width <= 40rem) {
// }

// @media (width <= 18rem) {
// }

// // media for landscape orientation;

// @media (width <= 70rem) and (orientation: landscape) {
// }

// @media (width <= 40rem) and (orientation: landscape) {
// }

// @media (width <= 18rem) and (orientation: landscape) {
// }
</style>
