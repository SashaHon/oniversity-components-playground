<script setup>
import CardComponent from '@/components/threeCardComponent/CardComponent.vue'

const cardData = [
  {
    bgColor: 'bright-orange',
    title: 'sedans',
    description: `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in
              the city or on your next road trip.`
  },
  {
    bgColor: 'dark-cyan',
    title: 'suvs',
    description: `Take an SUV for its spacious interior, power, and versatility. Perfect for your next
              family vacation and off-road adventures.`
  },
  {
    bgColor: 'very-dark-cyan',
    title: 'luxury',
    description: `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort
              of a luxury rental and arrive in style.`
  }
]
</script>

<template>
  <div>
    <p class="description-text">Scroll down to check the component for better preview or go</p>
    <RouterLink to="/" class="link-back">&lt;&lt; Back 🪂</RouterLink>
    <div class="view-container">
      <!-- let's imagine here is some header and h1 -->
      <section class="info">
        <ul class="d-flex">
          <!-- <li class="bg-bright-orange">
            <img src="../assets/img/three-card-component/icon-sedans.svg" alt="Sedans icon" />
            <h2>SEDANS</h2>
            <p>
              Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in
              the city or on your next road trip.
            </p>
            <button class="c-bright-orange">Learn More</button>
          </li> -->
          <CardComponent
            v-for="(card, index) in cardData"
            :key="card + index"
            :title="card.title"
            :bgColor="card.bgColor"
            :description="card.description"
          />

          <!-- <li class="bg-dark-cyan">
            <img src="../assets/img/three-card-component/icon-suvs.svg" alt="Suvs icon" />
            <h2>SUVS</h2>
            <p>
              Take an SUV for its spacious interior, power, and versatility. Perfect for your next
              family vacation and off-road adventures.
            </p>
            <button class="c-dark-cyan">Learn More</button>
          </li> -->

          <!-- <li class="bg-very-dark-cyan">
            <img src="../assets/img/three-card-component/icon-luxury.svg" alt="Luxury icon" />
            <h2>LUXURY</h2>
            <p>
              Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort
              of a luxury rental and arrive in style.
            </p>
            <button class="c-very-dark-cyan">Learn More</button>
          </li> -->
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
$font-size-normal: 15px;
$font-regular: 'Lexend Deca';
$transparent-white: hsla(0, 0%, 100%, 0.75);

.view-container {
  min-height: 100vh;
  padding: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: $font-size-normal;
  font-family: $font-regular;
  color: $transparent-white;
}

.d-flex {
  display: flex;
}
</style>

<!-- <style scoped lang="scss">
/* colors: primary */
$bright-orange: hsl(31, 77%, 52%);
$dark-cyan: hsl(184, 100%, 22%);
$very-dark-cyan: hsl(179, 100%, 13%);
/* colors: neutral */
$transparent-white: hsla(0, 0%, 100%, 0.75);
$very-light-gray: hsl(0, 0%, 95%);
/* typography */
$font-size-normal: 15px;
$font-regular: 'Lexend Deca';
$font-title: 'Big Shoulders Display';

.view-container {
  min-height: 100vh;
  padding: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: $font-size-normal;
  font-family: $font-regular;
  color: $transparent-white;

  h2 {
    font-family: $font-title;
    font-size: 2.8rem;
  }
  button {
    background-color: $transparent-white;
    bottom: 4rem;
    border-radius: 2em;
    border-style: none;
    border: 2px solid;
    font-family: $font-regular;
    padding: 1em 2em;
    width: fit-content;
    &:hover {
      cursor: pointer;
    }

    &:active {
      background: none;
      border: 2px solid $transparent-white;
      color: $transparent-white;
    }
  }
  .info {
    height: auto;
    ul {
      display: flex;
      height: 100%;
      li {
        padding: 4rem;
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        gap: 2em;
        min-width: 24rem;
        &:first-child {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }

        &:last-child {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
    }
  }

  // .bg {
  //   &--bright-orange {
  //     background-color: $bright-orange;
  //   }
  //   &--dark-cyan {
  //     background-color: $dark-cyan;
  //   }
  //   &--very-dark-cyan {
  //     background-color: $very-dark-cyan;
  //   }
  // }

  // .c {
  //   &--bright-orange {
  //     color: $bright-orange;
  //   }
  //   &--dark-cyan {
  //     color: $dark-cyan;
  //   }

  //   &--very-dark-cyan {
  //     color: $very-dark-cyan;
  //   }
  // }
}

/* for smartphone & tablet screens */
@media (width <= 70rem) {
  .view-container {
    .info {
      ul {
        flex-direction: column;
        li {
          &:first-child {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 0;
          }
          &:last-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
          }
        }
      }
    }
  }

  button {
    position: initial;
  }
}

@media (width <= 40rem) {
  h2 {
    font-size: 2rem;
  }
}

@media (width < 23rem) {
  main {
    padding: 0.4rem;
  }
}
</style> -->
