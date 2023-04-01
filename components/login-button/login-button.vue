<template>
  <NuxtLink
    class="login-button"
    data-testid="loginButton"
    :title="$t('navbar.login')"
    to="/login"
  >
    {{ $t('navbar.login') }}
  </NuxtLink>
</template>

<style lang="scss" scoped>
.login-button {
  padding: $spacing-8 $spacing-24;
  border-radius: $size-16;
  background-color: $color-base;
  color: $text-base-inverse;
  font-size: $font-size-14;
}
</style>