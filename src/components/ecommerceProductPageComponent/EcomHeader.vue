<script setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'
import EcomMenu from './EcomMenu.vue'
import EcomCartIcon from './EcomCartIcon.vue'
import EcomAccount from './EcomAccount.vue'

const showMenu = ref(null)
const windowWidth = ref(window.innerWidth)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
const handleResize = () => {
  windowWidth.value = window.innerWidth
  showMenu.value = windowWidth.value > 850
  console.log('resize', showMenu.value)
}

provide('showMenu', showMenu)
provide('toggleMenu', toggleMenu)

showMenu.value = windowWidth.value > 850

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header>
    <nav class="navigation" role="navigation">
      <button class="burger btn" @click="toggleMenu">
        <div class="burger__line"></div>
        <div class="burger__line"></div>
        <div class="burger__line"></div>
      </button>
      <p class="logo">sneakers</p>
      <EcomMenu class="menu" v-show="showMenu" />
      <div class="account-container">
        <EcomCartIcon />
        <EcomAccount />
      </div>
    </nav>
    <div class="styled-line"></div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
@import '@/assets/_ecommerce-product-page-utils.scss';

header {
  padding: 0 4rem;
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
    width: 100%;
    min-width: fit-content;
    gap: 5%;

    .burger {
      &__line {
        background-color: $c-dark-grayish-blue;
        height: 3px;
        width: 16px;
        margin-top: 3px;
      }
      display: none;
    }

    .logo {
      font-size: 1.8rem;
      font-weight: $font-w-bold;
      color: #000000;
      line-height: 100%;
      flex: 4;
    }

    .account-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex: 1;
    }
  }
  .styled-line {
    height: 0.5px;
    background-color: $c-grayish-blue;
  }
}

@media (width <= 1040px) and (orientation: landscape) {
  header {
    padding: 0 2rem;
  }
}

@media (width < 850px) {
  header {
    // padding: 0 1rem;
    .navigation {
      .logo {
        font-size: 1.6rem;
      }
      .burger {
        display: block;
      }
      .account-container {
        // margin-right: 2rem;
      }
    }
  }
}
</style>
