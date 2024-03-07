<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff'
    }"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
  >
    <swiper-slide v-for="(img, index) in product.imgUrlList" :key="index + 555"
      ><img :src="img.url" alt="product photo" class="photo"
    /></swiper-slide>
  </swiper>

  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(img, index) in product.imgUrlList" :key="index + 666"
      ><img :src="img.url" alt="product photo" class="photo"
    /></swiper-slide>
  </swiper>
</template>

<script setup>
import { ref, inject } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const currentProductId = inject('currentProductId')
const productList = inject('productList')

const getProductById = (id, list) => {
  // !! it returns simple obj, not proxy!
  return list.value.find((el) => el.id === id.value)
}

const product = getProductById(currentProductId, productList)

const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

const modules = [FreeMode, Navigation, Thumbs]
</script>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';

.mySwiper2 {
  .photo {
    &:hover {
      opacity: 1;
      border: none;
      cursor: default;
    }
  }
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 0.4;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo {
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
    border: 4px solid orange;
  }
}

@media (width < 500px) and (orientation: portrait) {
}
</style>
