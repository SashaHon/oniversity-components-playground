<script setup></script>

<template>
  <div class="main-container">
    <p class="main-styles__description-text">
      Scroll down to check the component for better preview or go
    </p>
    <RouterLink :to="{ name: 'home' }" class="link-back">&lt;&lt; Back 🪂</RouterLink>
    <div>
      <article class="summary">
        <img
          src="./images/illustration-hero.svg"
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
            <img src="/images/icon-music.svg" alt="music icon" class="plan-content__icon" />
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
</style>
