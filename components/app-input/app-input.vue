<template>
  <label
    class="app-input"
    :data-testid="`appInput-${inputLabel}`"
  >
    {{ inputLabel }}
    <div class="input-wrapper">
      <input
        class="input"
        :type="newInputType || inputType"
        :v-model="inputValue"
      >
      <button
        v-if="isInputPassword"
        class="visibility-button"
        :title="$t(`${setToggleTitle}`)"
        :data-testid="`appInput-${inputLabel}-visibilityButton`"
        @click="toggleVisibility"
      >
        <Icon
          v-if="!newInputType"
          :name="ICON_PROPS.name.show"
          :size="ICON_PROPS.size"
        />
        <Icon
          v-else
          :name="ICON_PROPS.name.hide"
          :size="ICON_PROPS.size"
        />
      </button>
    </div>
  </label>
</template>

<script setup>
import { ICON_PROPS } from './constants';

const inputValue = ref('');
const newInputType = ref('');

const props = defineProps({
  inputLabel: {
    type: String,
    required: true,
  },
  inputType: {
    type: String,
    default: 'text'
  }
})

const isInputPassword = computed(() => {
  return props.inputType === 'password'
})

const toggleVisibility = () => {
  newInputType.value =
    props.inputType === 'password' && !newInputType.value
      ? 'text'
      : '';
}

const setToggleTitle = computed(() => {
  return newInputType.value ? 'form.toggle_off' : 'form.toggle_on'
})
</script>

<style lang="scss">
.app-input {
  display: flex;
  flex-direction: column;
  gap: $spacing-8;
  font-weight: $font-medium;
  color: $color-primary;
  font-size: $font-size-18;
}

.app-input > .input-wrapper > input {
  height: 100%;
  width: 100%;
  padding: $spacing-4;
  font-size: $font-size-16;
  border-radius: $size-4;
  border: $size-1 solid $border-color;
}

.app-input > .input-wrapper {
  height: $size-32;
  display: flex;
  align-items: center;
  flex-grow: 1;

  & > .visibility-button {
    margin-left: $spacing-8;
    padding: $spacing-2;
  }

  & > .visibility-button > .icon {
    color: $border-color-inverse;
  }
}

.dark-mode .app-input > .input-wrapper > .visibility-button > .icon {
  color: $color-primary-inverse;
}
</style>