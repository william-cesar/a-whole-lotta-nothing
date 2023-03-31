<template>
  <NuxtLink
    to="/"
    class="app-logo"
    data-testid="appLogo"
  >
    <img
      class="logo-image"
      data-testid="appLogo-image"
      src="@/assets/images/logo.png"
      alt="Man shruggin"
    >
    <h1
      class="logo-title"
      data-testid="appLogo-title"
    >
      {{ $t('navbar.title') }}
    </h1>
  </nuxtlink>
</template>

<style lang="scss">
$line-height-low: 75%;

.app-logo {
  display: flex;
  align-items: flex-end;
  gap: $spacing-8;
}

.app-logo > .logo-title {
  color: $color-base;
  line-height: $line-height-low;
  font-size: $font-size-24;
}
</style>