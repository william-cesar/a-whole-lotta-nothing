<template>
  <nav class="logged-out-navbar">
    Logo
    <NavLinks />
    <ThemeChange @change-color-mode="changeColorMode" />
    <LocaleChange />
  </nav>
</template>

<script setup>
import LocaleChange from '~/components/locale-change/locale-change';
import ThemeChange from '~/components/theme-change/theme-change';


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
  height: $size-40;
  background-color: $color-primary;
}
</style>
