<script setup>
const reviews = [
  {
    reviewer: 'Colton Smith',
    isVerifiedBuyer: true,
    quote: `We needed the same printed design as the one we had ordered a week prior. Not only did they
    find the original order, but we also received it in time. Excellent!`,
    imgUrl: ``
  },
  {
    reviewer: 'Irene Roberts',
    isVerifiedBuyer: true,
    quote: `Customer service is always excellent and very quick turn around. Completely delighted
    with the simplicity of the purchase and the speed of delivery.`,
    imgUrl: ``
  },
  {
    reviewer: 'Anne Wallace',
    isVerifiedBuyer: true,
    quote: `Put
    an order with this company and can only praise them for the very high standard. Will definitely
    use them again and recommend them to everyone!`,
    imgUrl: ``
  }
]
</script>

<template>
  <ul class="cards-container">
    <li v-for="(review, index) in reviews" :key="review.reviewer + index" class="card">
      <div class="card__top-content">
        <img :src="`#`" :alt="`${review.reviewer} profile photo`" class="card__photo" />
        <h2 class="card__reviewer">{{ review.reviewer }}</h2>
        <p v-if="review.isVerifiedBuyer" class="card__verified">Verified Buyer</p>
      </div>
      <div class="card__quote">
        {{ review.quote }}
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.cards-container {
  list-style: none;
}
</style>
