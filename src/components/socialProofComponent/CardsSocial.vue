import { resolveDirective } from 'vue'; import { routerViewLocationKey } from 'vue-router'; import {
routerViewLocationKey } from 'vue-router';
<script setup>
const reviews = [
  {
    reviewer: 'Colton Smith',
    isVerifiedBuyer: true,
    quote: `“ We needed the same printed design as the one we had ordered a week prior. Not only did they
    find the original order, but we also received it in time. Excellent! ”`,
    imgUrl: 'src/assets/img/social-proof-component/colton.jpg'
  },
  {
    reviewer: 'Irene Roberts',
    isVerifiedBuyer: true,
    quote: `“ Customer service is always excellent and very quick turn around. Completely delighted
    with the simplicity of the purchase and the speed of delivery. ”`,
    imgUrl: 'src/assets/img/social-proof-component/irene.jpg'
  },
  {
    reviewer: 'Anne Wallace',
    isVerifiedBuyer: true,
    quote: `“ Put
    an order with this company and can only praise them for the very high standard. Will definitely
    use them again and recommend them to everyone!  ”`,
    imgUrl: 'src/assets/img/social-proof-component/anne.jpg'
  }
]
</script>

<template>
  <ul class="cards-container">
    <li v-for="(review, index) in reviews" :key="review.reviewer + index" class="card">
      <img :src="review.imgUrl" :alt="`${review.reviewer} profile photo`" class="card__photo" />
      <div class="card__container--user-info">
        <h2 class="card__reviewer">{{ review.reviewer }}</h2>
        <p v-if="review.isVerifiedBuyer" class="card__verified">Verified Buyer</p>
      </div>

      <p class="card__quote">
        {{ review.quote }}
      </p>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import '@/assets/_social-proof-variables.scss';

.cards-container {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0 6% 6%;
}

.card {
  background-color: $c-very-dark-magenta;
  color: $c-white;
  height: fit-content;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 30%;

  display: grid;
  grid-column: 2;
  grid-template-columns: min-content;

  &__photo {
    border-radius: 100%;
    height: 3rem;
  }

  &__reviewer {
    font-size: $font-size-normal;
    font-weight: $font-weight-bold;
  }

  &__verified {
    color: $c-soft-pink;
  }

  &__quote {
    grid-column: 1 / span 2;
    margin-top: 1rem;
  }

  &__container--user-info {
    margin-left: 2rem;
  }

  &:nth-child(2) {
    align-self: center;
  }

  &:last-child {
    align-self: end;
  }
}

@media (width > 52rem) and (orientation: portrait) {
  .cards-container {
    padding: 0 6% 6%;
  }
}

@media (width < 52rem) and (orientation: portrait) {
  .cards-container {
    flex-direction: column;
  }
  .card {
    width: 80%;
  }
}

@media (width <= 32rem) {
  .card {
    margin-top: 1rem;
  }
}

@media (width <= 24rem) {
  .card {
    width: 100%;
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
