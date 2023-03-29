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
      :title="isDarkModeOn ? $t('dark_mode') : $t('light_mode')"
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

<style lang="scss">
.theme-change-toggle {
  display: flex;
  gap: 8px;
}

.theme-change-toggle svg.icon > path {
  fill: #ccc;
}

.theme-change-toggle svg.icon.dark--active > path,
.theme-change-toggle svg.icon.light--active > path {
  fill: #41b38a;
}

.theme-change-toggle > .toggle {
  position: relative;
  display: flex;
  width: 30px;
  height: 16px;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & > .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  & > .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 0px;
    bottom: 0px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  & > input:checked + .slider {
    background-color: #41b38a;
  }

  & > input:focus + .slider {
    box-shadow: 0 0 1px #41b38a;
  }

  & > input:checked + .slider:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
  }

  & > .slider.round {
    border-radius: 8px;
  }

  & > .slider.round:before {
    border-radius: 50%;
  }
}
</style>