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
  <div class="main-container">
    <p class="main-styles__description-text">
      Scroll down to check the component for better preview or go
    </p>
    <RouterLink to="/" class="main-styles__link-back">&lt;&lt; Back 🪂</RouterLink>
    <div class="cards-container">
      <!-- let's imagine here is some header and h1 -->
      <section class="info">
        <ul class="list">
          <CardComponent
            v-for="(card, index) in cardData"
            :key="card + index"
            :title="card.title"
            :bgColor="card.bgColor"
            :description="card.description"
          />
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
$font-size-normal: 15px;
$font-size-small: 12px;
$font-regular: 'Lexend Deca';
$transparent-white: hsla(0, 0%, 100%, 0.75);

.main-container {
  width: 100%;
  .info {
    height: auto;
    min-height: 100vh;
    padding: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: $font-size-normal;
    font-family: $font-regular;
    color: $transparent-white;
    .list {
      display: flex;
      height: 100%;
    }
  }
}

@media (width <= 70rem) {
  .cards-container {
    margin-top: 2rem;
    .list {
      flex-direction: column;
      width: 100%;
      // overflow: hidden;
    }
  }
}

@media (width <= 40rem) {
  .main-container {
    .info {
      padding: 0;
    }
  }
}
</style>
