<script setup></script>

<template>
  <div class="main-container">
    <p class="main-styles__description-text">
      Scroll down to check the component for better preview or go
    </p>
    <RouterLink :to="{ name: 'home' }" class="main-styles__link-back">&lt;&lt; Back 🪂</RouterLink>
    <div class="component-container">
      <article class="summary">
        <img
          src="../assets/img/order-summary-component/images/illustration-hero.svg"
          alt="Person enjoying music"
          class="summary__illustration"
        />
        <div class="summary__content">
          <h1 class="summary__title">Order Summary</h1>
          <p class="summary__description">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere
            you like!
          </p>
          <div class="plan-content">
            <img
              src="../assets/img/order-summary-component/images/icon-music.svg"
              alt="music icon"
              class="plan-content__icon"
            />
            <div class="plan-content__container">
              <h2 class="plan-content__title">Annual Plan</h2>
              <p class="plan-content__price">$59.99/year</p>
            </div>
            <a href="#" class="plan-content__link">Change</a>
          </div>
          <button class="summary__btn summary__btn--proceed">Proceed to Payment</button>
          <button class="summary__btn summary__btn--cancel">Cancel Order</button>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* colors: primary */
$pale-blue: hsl(225, 100%, 94%);
$bright-blue: hsl(245, 75%, 52%);

/* colors: neutral */

$very-pale-blue: hsl(225, 100%, 98%);
$pale-blue-shadow: hsl(225, 49%, 88%);
$desaturated-blue: hsl(224, 23%, 55%);
$light-blue: hsl(245, 83%, 63%);
$very-light-blue: hsl(245, 78%, 68%);
$dark-blue: hsl(223, 47%, 23%);
/* typography */
$font-size-normal: 1rem;
$font-size-small: 0.8rem;
$font-size-very-small: 0.7rem;
$font-name: 'Red Hat Display';
$font-w-normal: 500;
$font-w-bold: 700;
$font-w-extrabold: 900;

.main-container {
  width: 100%;
}

.component-container {
  min-height: 100vh;
  width: 100%;
  padding: 10% 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('/images/pattern-background-desktop.svg');
  background-repeat: no-repeat;
  background-color: $pale-blue;
  background-size: 100%;
}

.summary {
  text-align: center;
  width: 30vw;
  background-color: #ffff;
  border-radius: 1rem;
  box-shadow: 0 1rem 1rem $pale-blue-shadow;

  &__illustration {
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  &__content {
    padding: 2rem;
  }

  &__title {
    color: $dark-blue;
    font-size: 1.4rem;
    font-weight: $font-w-bold;
    white-space: pre;
  }

  &__description {
    padding: 1rem;
  }

  .plan-content {
    display: flex;
    background-color: $very-pale-blue;
    padding: 1rem;
    border-radius: 0.4rem;

    text-align: start;

    &__icon {
      align-self: center;
      height: max-content;
    }

    &__container {
      flex-basis: 100%;
      line-height: 1.5rem;
      margin-left: 2rem;
    }

    &__title {
      color: $dark-blue;
    }

    &__title,
    &__price {
      white-space: pre;
    }

    &__link {
      align-self: center;
      color: $bright-blue;
      font-size: $font-size-small;
      font-weight: $font-w-bold;
      &:hover {
        color: $very-light-blue;
        text-decoration: none;
      }
    }
  }

  &__btn {
    display: block;
    font-size: $font-size-small;
    font-weight: $font-w-bold;
    margin-top: 1rem;
    width: 100%;
    &:hover {
      cursor: pointer;
    }
    &--proceed {
      background-color: $bright-blue;
      border: none;
      border-radius: 0.4rem;
      padding: 0.5rem;
      color: $pale-blue;
      width: 100%;
      box-shadow: 0 0.5rem 2rem #b4aef1;

      &:hover {
        background-color: $light-blue;
      }
    }
    &--cancel {
      background-color: transparent;
      border: none;
      padding: 0.5rem;
      &:hover {
        color: $dark-blue;
        font-weight: $font-w-extrabold;
      }
    }
  }
}

@media (width > 90rem) {
  .summary {
    .plan-content {
      padding: 2rem;
    }
    &__btn {
      padding: 1rem;
    }
  }
}

@media (width <= 70rem) {
  .summary {
    width: min-content;

    &__illustration {
      width: 100%;
    }

    &__description {
      font-size: $font-size-small;
    }

    .plan-content {
      &__icon {
        height: 36px;
      }

      &__container {
        margin-left: 1rem;
      }

      &__title,
      &__price {
        font-size: $font-size-small;
      }

      &__link {
        margin-left: 1rem;
      }
    }
  }
}

@media (width <= 40rem) {
  .summary {
    &__description {
      font-size: $font-size-very-small;
    }

    &__title {
      font-size: 1.2rem;
    }
    .plan-content {
      &__icon {
        height: 28px;
      }

      &__container {
        margin-left: 0.6rem;
      }

      &__title,
      &__price {
        font-size: $font-size-very-small;
      }

      &__link {
        margin-left: 0.6rem;
      }
    }

    &__btn--proceed,
    &__btn--cancel {
      font-size: $font-size-very-small;
    }
  }
}
</style>
