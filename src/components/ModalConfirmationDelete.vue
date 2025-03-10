<template>
  <AppModal v-model:show="show">
    <div class="modal-confirmation-delete">
      <p>
        Are you sure you want to delete {{ detailEmployee(props.emp_id as number)?.name }} Data ?
      </p>
      <div class="modal-confirmation-delete-button">
        <AppButton variant="navy" @click="show = false">Cancel</AppButton>
        <AppButton variant="red" @click="handleDeleteEmployee">Yes</AppButton>
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
import { useEmployee } from '@/composable/useEmployee'
import AppButton from './app/AppButton.vue'
import AppModal from './app/AppModal.vue'
import { inject } from 'vue'

const { detailEmployee } = useEmployee()

const show = defineModel<boolean>('show', {
  default: false,
})

const props = defineProps<{
  emp_id: number | null
}>()

const toast = inject<any>('toast')
const handleDeleteEmployee = () => {
  show.value = false
  toast({
    message: `Success Delete Employee Data ${detailEmployee(props.emp_id as number)?.name}`,
    variant: 'success',
    duration: 3000,
  })
}
</script>

<style scoped>
.modal-confirmation-delete {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
}

.modal-confirmation-delete-button {
  display: flex;
  gap: 8px;
}

.modal-confirmation-delete-button > * {
  width: 160px;
}
</style>
