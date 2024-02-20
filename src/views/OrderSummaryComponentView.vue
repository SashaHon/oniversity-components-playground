<script setup></script>

<template>
  <div class="main-container">
    <p class="main-styles__description-text">
      Scroll down to check the component for better preview or go
    </p>
    <RouterLink :to="{ name: 'home' }" class="link-back">&lt;&lt; Back 🪂</RouterLink>
  </div>
</template>

<style scoped lang="scss">
/* colors: primary */
$pale-blue: hsl(225, 100%, 94%);
$bright-blue: hsl(245, 75%, 52%);

/* colors: neutral */

$very-pale-blue: hsl(225, 100%, 98%);
$pale-blue-shadow: hsl(225, 49%, 88%);
$desaturated-blue: hsl(224, 23%, 55%);
$light-blue: hsl(245, 83%, 63%);
$very-light-blue: hsl(245, 78%, 68%);
$dark-blue: hsl(223, 47%, 23%);
/* typography */
$font-size-normal: 1rem;
$font-size-small: 0.8rem;
$font-size-very-small: 0.7rem;
$font-name: 'Red Hat Display';
$font-w-normal: 500;
$font-w-bold: 700;
$font-w-extrabold: 900;
.main-container {
  width: 100%;
}
</style>
