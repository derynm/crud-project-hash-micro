<template>
  <div class="layout-selector">
    <span
      :class="[{ active: props.layoutSelected === 'table' }]"
      @click="emit('changeLayout', 'table')"
    >
      <Icon icon="material-symbols-light:table-outline" />
    </span>
    <span
      :class="[{ active: props.layoutSelected === 'card' }]"
      @click="emit('changeLayout', 'card')"
    >
      <Icon icon="prime:id-card" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const emit = defineEmits<{
  (e: 'changeLayout', layout: 'table' | 'card'): void
}>()

const props = defineProps<{
  layoutSelected: 'table' | 'card'
}>()
</script>

<style scoped>
.layout-selector {
  display: flex;
  max-width: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 30px;
  overflow: hidden;
  margin-bottom: 12px;
}

.layout-selector span {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  cursor: pointer;
  flex: 1;
  background-color: var(--color-grey);
  opacity: 0.5;
  transition: background-color 0.6s;
}

.layout-selector span.active {
  background-color: white !important;
  opacity: 1 !important;
}
</style>
