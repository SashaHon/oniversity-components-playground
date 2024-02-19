<script setup>
const props = defineProps(['bgColor', 'title', 'description'])
const imgSrc = 'src/assets/img/three-card-component/icon--' + props.title + '.svg'
// :src="'src/assets/images/portfolio/' + item.image"
</script>

<template>
  <li :class="'bg--' + props.bgColor">
    <img :src="imgSrc" :alt="props.title + ' icon'" />

    <h2>{{ props.title }}</h2>
    <p>
      {{ props.description }}
    </p>

    <button :class="'c--' + props.bgColor">Learn More</button>
  </li>
</template>

<style scoped lang="scss">
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
    text-transform: uppercase;
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

  .bg {
    &--bright-orange {
      background-color: $bright-orange;
    }
    &--dark-cyan {
      background-color: $dark-cyan;
    }
    &--very-dark-cyan {
      background-color: $very-dark-cyan;
    }
  }

  .c {
    &--bright-orange {
      color: $bright-orange;
    }
    &--dark-cyan {
      color: $dark-cyan;
    }

    &--very-dark-cyan {
      color: $very-dark-cyan;
    }
  }
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
</style>
