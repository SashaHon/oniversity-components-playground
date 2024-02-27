<script setup>
const imgList = [{ 1: 'lla' }, { 2: 'kkd' }]

const product = {
  company: 'Sneaker Company',
  name: 'Fall Limited Edition Sneakers',
  description: `These low-profile sneakers are your perfect
      casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.`,
  discountedPrice: 125.0,
  discountPercentage: 50,
  price: 250.0
}
</script>
<template>
  <article class="product">
    <section class="product__container--display">
      <img v-for="(img, index) in imgList" :key="index + 555" src="#" alt="#" />
    </section>
    <section class="product__container--info">
      <p>{{ product.company }}</p>
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <div class>
        <div>
          <span>{{ product.discountedPrice }}</span>
          <span>{{ product.discountPercentage }} %</span>
        </div>
        <span>{{ product.price }}</span>
      </div>
      <div>
        <button class="">-</button>
        <span>0</span>
        <button class="">+</button>
      </div>
      <button>Add to cart</button>
    </section>
  </article>
</template>
