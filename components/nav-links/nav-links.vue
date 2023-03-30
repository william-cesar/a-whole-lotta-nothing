<template>
  <ul
    v-for="link in links"
    :key="link.label"
    class="nav-links"
  >
    <NuxtLink
      :to="link.link"
      :data-testid="`navLink-${link.label}Link`"
    >
      {{ $t(`navbar.${link.label}`) }}
    </NuxtLink>
  </ul>
</template>

<script setup>
import { LOGGED_OUT_LINKS } from './constants';

const links = LOGGED_OUT_LINKS;

</script>

<style lang="scss">
.nav-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>