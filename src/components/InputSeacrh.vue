<template>
  <div class="input-search">
    <input
      type="text"
      placeholder="Search Employee Name"
      v-model="searchValue"
      @input="debouncedSearch"
    />
    <Icon icon="bi:search" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, onBeforeUnmount } from 'vue';

const emit = defineEmits<{
  (e: 'search', value: string): void;
}>();

const searchValue = ref<string>('');
let debounceTimeout: number | null = null;

const debouncedSearch = () => {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  debounceTimeout = setTimeout(() => {
    emit('search', searchValue.value);
  }, 300);
};

const clearDebounceTimeout = () => {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
};

onBeforeUnmount(() => {
  clearDebounceTimeout();
});
</script>

<style scoped>
.input-search {
  display: flex;
  align-items: center;
  float: right;
  max-width: 400px;
  width: 100%;
  border: 1px solid var(--color-grey);
  border-radius: 5px;
  padding: 4px 18px;
  margin-bottom: 24px;
}

.input-search input {
  flex: 1;
  border: none;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
}

.input-search input:focus {
  outline: none;
}
</style>
