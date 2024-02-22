<script setup>
const props = defineProps(['bgColor', 'title', 'description'])
const imgSrc = `src/assets/img/3-card-component/icon--${props.title}.svg`
</script>

<template>
  <li :class="'bg--' + props.bgColor" class="card">
    <img :src="imgSrc" :alt="props.title + ' icon'" />

    <h2 class="card__title">{{ props.title }}</h2>
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

.card {
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

  &__title {
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
    white-space: pre;
    &:hover {
      cursor: pointer;
    }

    &:active {
      background: none;
      border: 2px solid $transparent-white;
      color: $transparent-white;
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

/* for smartphone & tablet screens */
@media (width <= 70rem) {
  .card {
    min-width: fit-content;
    padding: 3rem;

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

  button {
    position: initial;
  }
}

@media (width <= 40rem) {
  .card {
    padding: 2rem;
    &__title {
      font-size: 2rem;
    }
  }
}

@media (width <= 40rem) {
  .card {
    min-width: fit-content;

    &__title {
      font-size: 2rem;
    }
  }
}
</style>
