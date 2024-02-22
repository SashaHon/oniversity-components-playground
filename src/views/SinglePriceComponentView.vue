<script setup>
import MyDescription from '@/components/general/MyDescription.vue'
</script>

<template>
  <div class="main-container">
    <MyDescription :routeName="`single-price-component`" />
    <div class="component-container">
      <section class="component-container">
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

.main-container {
  width: 100%;
}
.component-container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100%;

  font-size: $font-size-normal;
  font-family: $font-family;
  background-color: $c-light-gray;

  .grid {
    display: grid;
    max-width: 60rem;
    height: 100%;
    box-shadow: 0 1rem 2rem $c-container-shadow;
    line-height: 1.5rem;
    color: #ffff;
    background-color: $c-light-gray;

    &__subgrid {
      padding: 3rem;
      display: grid;
      gap: 1rem;

      &--info {
        background-color: white;
        grid-column: 1 / span 2;
        border-top-left-radius: $border-radius-container;
        border-top-right-radius: $border-radius-container;
      }
      &--subscription {
        background-color: $c-cyan;
        border-bottom-left-radius: $border-radius-container;
      }
      &--about {
        background-color: $c-light-cyan;
        border-bottom-right-radius: $border-radius-container;
      }
    }

    &__title {
      &--primary {
        color: $c-cyan;
        font-weight: $font-weight-bold;
        font-size: 1.6rem;
        white-space: pre;
      }
    }

    &__subtitle {
      color: $c-bright-yellow;
      font-weight: $font-weight-bold;
      margin-top: 1rem;
    }

    &__description {
      &--primary {
        color: $c-grayish-blue;
      }
      &--price {
        font-size: 2.4rem;
      }

      &--period {
        font-size: $font-size-normal;
        margin-left: 1rem;
      }
      &--primary,
      &--secondary {
        font-weight: $font-weight-normal;
      }
    }

    &__subcontainer {
      display: flex;
      align-items: center;
    }

    &__button {
      color: #ffff;
      background-color: $c-bright-yellow;
      font-size: $font-size-normal;
      width: 100%;
      padding: 1rem 0;
      border: none;
      border-radius: $border-radius-button;
      box-shadow: 0 1rem 1rem $c-button-shadow;
    }

    &__list {
      list-style: none;
    }

    &__list-item,
    &__description--period {
      font-weight: $font-weight-light;
      opacity: 0.7;
    }
  }
}

@media (width <= 40rem) {
  .main-container {
    padding: 2rem;
    .grid {
      height: 100%;
      &__subgrid {
        width: 100%;
        padding: 2rem;
        &--info {
          grid-column: 1;
        }

        &--subscription {
          border-bottom-left-radius: 0;
        }
        &--about {
          background-color: $c-light-cyan;
          border-bottom-left-radius: $border-radius-container;
        }
      }
    }
  }
}

@media (width <= 28rem) {
  //to do: fix width of background main container on smallest screens;
  .main-container {
    .grid {
      max-width: 100%;

      &__title {
        &--primary {
          font-size: 1.2rem;
        }

        &--secondary {
          font-size: 1rem;
        }
      }
      &__subtitle {
        font-size: 1rem;
      }

      &__description {
        &--primary,
        &--secondary,
        &--period {
          font-size: 0.8rem;
        }

        &--price {
          font-size: 1.8rem;
        }
      }

      &__list-item {
        font-size: 0.8rem;
      }
    }
  }
}

@media (width <= 20rem) {
  .main-container {
    padding: 0;
  }
}
</style>
