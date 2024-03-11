<template>
  <div class="">
    <img
      src="@/assets/img/ecommerce-product-page-component/images/image-avatar.png"
      alt="profile avatar"
      class="avatar"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/_ecommerce-product-page-variables.scss';
.avatar {
  max-height: 3rem;
  border: 3px solid transparent;

  &:hover {
    cursor: pointer;
    border: 3px solid $c-orange;
    border-radius: 100%;
  }
}

@media (width < 850px) {
  .avatar {
    max-height: 2rem;
  }
}
</style>
