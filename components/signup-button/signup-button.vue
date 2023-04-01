<template>
  <NuxtLink
    class="signup-button"
    data-testid="signupButton"
    :title="$t('navbar.signup')"
    to="/signup"
  >
    {{ $t('navbar.signup') }}
  </NuxtLink>
</template>

<style lang="scss" scoped>
.signup-button {
  padding: $spacing-8 $spacing-24;
  border-radius: $size-16;
  background-color: $color-base-inverse;
  color: $text-base;
  font-size: $font-size-14;
}
</style>