<template>
  <ThemeChange @changeColorMode="changeColorMode" />
  <LocaleChange />
</template>

<script setup>
import LocaleChange from '~/components/locale-change/locale-change';
import ThemeChange from '~/components/theme-change/theme-change';


const changeColorMode = (color) => {
  const colorMode = useColorMode();
  colorMode.preference = color;
}
</script>
