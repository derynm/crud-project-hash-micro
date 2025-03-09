<template>
  <Teleport to="body">
    <Transition name="slide-fade">
      <div v-if="show" ref="modal" class="modal-overlay" @click.self="closeModal" @keyup.escape="closeModal" tabindex="0">
        <div class="modal-body">
          <div class="modal-content">
            <slot />
          </div>
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const show = defineModel<boolean>('show', {
  default: false,
});

const modal = ref<HTMLElement | null>(null);

onMounted(() => {
  if (modal.value) {
    modal.value.focus();
  }
});

const closeModal = () => {
  show.value = false;
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s;
}

.slide-fade-leave-active {
  transition: all 0.3s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

</style>
