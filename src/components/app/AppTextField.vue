<template>
  <div
    class="app-text-field outlined"
      :class="{
        'has-value': hasValue,
        'focused': isFocused,
        'error': !!errorMessage, 'disabled': disabled, 'required': required
      }">
    <div class="app-text-field-container">
      <label :for="id" class="app-text-field-label">
        {{ label }}
        <span v-if="required" class="required-indicator">*</span>
      </label>

      <div class="outline"></div>

      <input
        :id="id"
        ref="inputRef"
        :type="type"
        v-model="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        class="app-text-field-input"
        v-bind="$attrs"
        @focus="isFocused = true"
        @blur="onBlur"
      />

      <div class="helper-text" v-if="helperText || errorMessage">
        {{ errorMessage || helperText }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  label: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  helperText: '',
  errorMessage: '',
  disabled: false,
  readonly: false,
  required: false,
});

const modelValue = defineModel();

const id = `app-text-field-${props.label.replace(/\s+/g, '-').toLowerCase()}`;
const inputRef = ref<HTMLInputElement | null>(null);
const isFocused = ref(false);

const hasValue = computed(() => {
  return modelValue.value !== null && modelValue.value !== undefined && modelValue.value !== '';
});

const onBlur = () => {
  isFocused.value = false;
};

</script>
