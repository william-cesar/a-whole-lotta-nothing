<script setup>
const ICONS = {
  name: {
    en: 'cif:us',
    pt: 'cif:br'
  },
  size: '24',
}

const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  const valuesFromLocales = locales.value;
  return valuesFromLocales.filter(i => i.code !== locale.value);
})

</script>
<template>
  <button
    class="locale-change-btn"
    data-testid="localeChangeBtn"
    :title="$t('translate_to', { lang: availableLocales[0].name })"
    @click="setLocale(availableLocales[0].code)"
  >
    <Icon
      :name="ICONS.name[availableLocales[0].code]"
      :size="ICONS.size"
    />
  </button>
  <p>{{ $t('welcome') }}</p>
</template>

<style lang="scss">
.locale-change-btn {
  cursor: pointer;
  background: transparent;
  border: none;
}
</style>