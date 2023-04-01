<template>
  <button
    class="locale-change-btn"
    data-testid="localeChangeBtn"
    :title="$t('navbar.translate_to', { lang: availableLocales[0].name })"
    @click="setLocale(availableLocales[0].code)"
  >
    <Icon
      :name="ICON_PROPS.name[availableLocales[0].code]"
      :size="ICON_PROPS.size"
    />
  </button>
</template>

<script setup>
import { ICON_PROPS } from './constants';

const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  const valuesFromLocales = locales.value;
  return valuesFromLocales.filter(i => i.code !== locale.value);
})
</script>

<style lang="scss" scoped>
.locale-change-btn {
  cursor: pointer;
  background: transparent;
  border: none;
}
</style>