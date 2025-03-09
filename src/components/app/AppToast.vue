<template>
  <div
    class="app-toast"
    :class="`app-toast--${props.variant}`">
    {{ props.message }}
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    message: string
    variant?: 'success' | 'error' | 'info',
  }>(),
  {
    variant: 'success' ,
  },
)

</script>

<style scoped>
.app-toast {
  position: fixed;
  max-width: 768px;
  right: 20px;
  top: 20px;
  z-index: 9999;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  padding: 8px;
  border-radius: 5px;
}

.app-toast--success {
  background-color: #179059;
  color: #fff;
}

.app-toast--error {
  background-color: #e74c3c;
  color: #fff;
}

.app-toast--info {
  background-color: #3498db;
  color: #fff;
}

.slide-toast-enter-active {
  transition: all 0.3s ease-out;
}

.slide-toast-leave-active {
  transition: all 0.3s ease-out;
}

.slide-toast-enter-from,
.slide-toast-leave-to {
  transform: translatey(-150%);
  opacity: 1;
}
</style>
