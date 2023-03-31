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
