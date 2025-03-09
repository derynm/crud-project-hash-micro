<template>
  <button
    class="app-button"
    :class="[
      `app-button-${props.variant}`,
      { [`app-button-outlined-${props.variant}`]: props.outlined },
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type variant = 'orange' | 'red' | 'navy'

interface props {
  variant?: variant
  outlined?: boolean
}

const props = defineProps<props>()
</script>

<style scoped></style>
