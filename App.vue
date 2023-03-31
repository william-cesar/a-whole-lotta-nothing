<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

// TODO: take user info to display different layouts 
const layout = 'logged-out';
</script>

<style lang="scss">
@import '~/assets/styles/main';

* {
  box-sizing: border-box;
  padding: $spacing-0;
  margin: $spacing-0;
}


body {
  font-family: $font-family-1;
  background-color: $background-base;
  color: $text-base;
  transition: background-color $animation-speed-slow;

  & button {
    cursor: pointer;
    border: none;
  }

  & a {
    text-decoration: none;
  }
}

.dark-mode body {
  background-color: $background-base-inverse;
  color: $text-base-inverse;
}

.page {
  @include page-padding();
}
</style>