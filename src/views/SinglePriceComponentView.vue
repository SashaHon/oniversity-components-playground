<template>
  <div class="main-container">
    <p class="main-styles__description-text">
      Scroll down to check the component for better preview or go
    </p>
    <RouterLink :to="{ name: 'home' }" class="main-styles__link-back">&lt;&lt; Back 🪂</RouterLink>
    <div class="component-container">
      <section class="main-container">
        <div class="grid">
          <div class="grid__subgrid grid__subgrid--info">
            <h2 class="grid__title grid__title--primary">Join our community</h2>
            <h3 class="grid__subtitle">30-day, hassle-free money back guarantee</h3>
            <span class="grid__description--primary">
              Gain access to our full library of tutorials along with expert code reviews. Perfect
              for any developers who are serious about honing their skills.
            </span>
          </div>

          <div class="grid__subgrid grid__subgrid--subscription">
            <h2 class="grid__title grid__title--secondary">Monthly Subscription</h2>
            <div class="grid__subcontainer">
              <p class="grid__description--price">&dollar;29</p>
              <span class="grid__description--period">per month</span>
            </div>
            <p class="grid__description--secondary">2 Full access for less than &dollar;1 a day</p>
            <button class="grid__button">Sign Up</button>
          </div>

          <div class="grid__subgrid grid__subgrid--about">
            <h2 class="grid__title grid__title--secondary">Why Us</h2>
            <ul class="grid__list">
              <li class="grid__list-item">Tutorials by industry experts</li>
              <li class="grid__list-item">Peer &amp; expert code review</li>
              <li class="grid__list-item">Coding exercises</li>
              <li class="grid__list-item">Access to our GitHub repos</li>
              <li class="grid__list-item">Community forum</li>
              <li class="grid__list-item">Flashcard decks</li>
              <li class="grid__list-item">New videos every week</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
// primary colors
$c-cyan: hsl(179, 62%, 43%);
$c-light-cyan: hsl(179, 45%, 57%);
$c-bright-yellow: hsl(71, 73%, 54%);

// neutral colors
$c-light-gray: hsl(204, 43%, 93%);
$c-grayish-blue: hsl(218, 22%, 67%);

//supplementary colors
$c-container-shadow: hsl(216, 40%, 84%);
$c-button-shadow: hsl(179, 63%, 37%);

// typography
$font-size-normal: 16px;
$font-family: 'Karla';
$font-weight-light: 100;
$font-weight-normal: 300;
$font-weight-bold: 600;

// supplementary
$border-radius-container: 0.5rem;
$border-radius-button: 0.24rem;
</style>
