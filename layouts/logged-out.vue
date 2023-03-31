<template>
  <nav class="logged-out-navbar">
    <AppLogo />
    <div class="nav-buttons">
      <ThemeChange @change-color-mode="changeColorMode" />
      <LocaleChange />
      <SignupButton />
      <LoginButton />
    </div>
  </nav>
  <slot />
</template>

<script setup>
const changeColorMode = (color) => {
  const colorMode = useColorMode();
  colorMode.preference = color;
}
</script>

<style lang="scss">
.logged-out-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $size-60;
  background-color: $color-primary-inverse;
  padding: $spacing-0 $spacing-16;
}

.logged-out-navbar > .nav-buttons {
  display: flex;
  align-items: center;
  gap: $spacing-24;
}
</style>
