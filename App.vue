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
.page {
  @include page-padding();
}
</style>