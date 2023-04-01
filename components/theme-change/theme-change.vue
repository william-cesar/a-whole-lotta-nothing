<template>
  <div
    class="theme-change-toggle"
    data-testid="themeChangeToggle"
  >
    <Icon
      data-testid="themeChangeToggle-iconLight"
      :class="!isDarkModeOn && 'light--active'"
      :name="ICON_PROPS.light"
      :size="ICON_PROPS.size"
    />
    <label
      class="toggle"
      data-testid="themeChangeToggle-label"
      :title="isDarkModeOn ? $t('navbar.dark_mode') : $t('navbar.light_mode')"
    >
      <input
        type="checkbox"
        data-testid="themeChangeToggle-input"
        :checked="isDarkModeOn"
        @change="changeColorMode"
      >
      <span class="slider round" />
    </label>
    <Icon
      data-testid="themeChangeToggle-iconDark"
      :class="isDarkModeOn && 'dark--active'"
      :name="ICON_PROPS.dark"
      :size="ICON_PROPS.size"
    />
  </div>
</template>

<script setup>
import { ICON_PROPS, COLOR_SCHEME } from './constants';

const colorMode = useColorMode();
const isDarkModeOn = computed(() => {
  return !colorMode.unknown && colorMode.value !== 'light'
})

const emit = defineEmits(['change-color-mode'])
const changeColorMode = (evt) => {
  const pageColorMode = evt.target.checked
    ? COLOR_SCHEME.dark
    : COLOR_SCHEME.light;

  emit('change-color-mode', pageColorMode);
}

</script>

<style lang="scss" scoped>
.theme-change-toggle {
  display: flex;
  gap: $spacing-8;
}

.theme-change-toggle svg.icon > path {
  fill: $text-base-inverse;
}

.theme-change-toggle svg.icon.dark--active > path,
.theme-change-toggle svg.icon.light--active > path {
  fill: $color-base;
}

.theme-change-toggle > .toggle {
  position: relative;
  display: flex;
  width: $size-32;
  height: $size-16;

  & > input {
    opacity: 0;
    width: $size-0;
    height: $size-0;
  }

  & > .slider {
    position: absolute;
    cursor: pointer;
    inset: $spacing-0;
    background-color: $color-base-inverse;
    -webkit-transition: $animation-speed-slow;
    transition: $animation-speed-slow;
  }

  & > .slider:before {
    position: absolute;
    content: "";
    height: $spacing-16;
    width: $spacing-16;
    left: $spacing-0;
    bottom: $spacing-0;
    background-color: $color-base;
    -webkit-transition: $animation-speed-slow;
    transition: $animation-speed-slow;
  }

  & > input:checked + .slider {
    background-color: $color-base-inverse;
  }

  & > input:focus + .slider {
    box-shadow: 0 0 1px $color-base;
  }

  & > input:checked + .slider:before {
    background-color: $color-base;
    -webkit-transform: translateX($spacing-16);
    -ms-transform: translateX($spacing-16);
    transform: translateX($spacing-16);
  }

  & > .slider.round {
    border-radius: $size-8;
  }

  & > .slider.round:before {
    border-radius: 50%;
  }
}
</style>