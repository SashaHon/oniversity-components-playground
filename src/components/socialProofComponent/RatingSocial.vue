<script setup>
const ratedPlatform = ['Reviews', 'Report Guru', 'BestTech']

const numberOfStars = 5
</script>

<template>
  <ul class="rating__list">
    <li
      v-for="(platform, index) in ratedPlatform"
      :key="platform + index"
      class="rating__list-item"
    >
      <div class="rating__icon-container">
        <img
          v-for="index in numberOfStars"
          :key="index"
          src="@/assets/img/social-proof-component/icon-star.svg"
          alt="star icon"
          class="rating__icon"
        />
      </div>
      <p class="rating__text">Rated 5 Stars in {{ platform }}</p>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import '@/assets/_social-proof-variables.scss';

.rating {
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 12% 12% 6% 6%;
    list-style: none;
  }

  &__list-item {
    background-color: $c-light-grayish-magenta;
    border-radius: 0.5rem;
    display: flex;
    padding: 1rem;
    justify-content: space-around;
    width: 80%;

    &:nth-child(2) {
      align-self: center;
    }

    &:nth-child(3) {
      align-self: flex-end;
    }
  }

  &__icon {
    height: 1rem;
  }

  &__text {
    font-weight: $font-weight-bold;
  }
}

@media (width >= 52rem) and (orientation: portrait) {
  .rating {
    &__list {
      padding: 6% 12% 6% 12%;
    }
  }
}

// @media (width > 52rem) and (height >) and (orientation: portrait) {
//   .rating {
//     &__list {
//       padding: 6% 12% 6% 12%;
//     }
//   }
// }

// @media (width > 90rem) {
// }

// @media (width <= 70rem) {
// }

@media (width <= 32rem) {
  .rating {
    &__list {
      padding: 0 6% 6%;
    }

    &__list-item {
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
    }

    &__text {
      text-align: center;
    }
  }
}

@media (width <= 24rem) {
  .rating {
    &__list-item {
      width: 100%;
    }
  }
}

@media (width < 65rem) and (orientation: landscape) {
  .rating {
    &__list {
      padding: 12% 6% 6% 0;
    }

    &__list-item {
      width: 100%;
    }
  }
}

@media (width <= 32rem) and (orientation: landscape) {
  .rating {
    &__list {
      padding: 0 6% 6%;
    }
  }
}
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
