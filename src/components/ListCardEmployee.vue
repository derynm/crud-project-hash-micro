<template>
  <div class="list-card-employee">
    <CardEmployee
      v-for="(employee, index) in props.employeesData"
      :key="index"
      :employee="employee"
      @delete-employee="handleDelete"
    />
  </div>
</template>

<script setup lang="ts">
import type { Employee } from '@/dummy'
import CardEmployee from './CardEmployee.vue'

const props = defineProps<{
  employeesData: Employee[]
}>()

const emit = defineEmits<{
  (e: 'deleteEmployee', id: number): void
}>()

const handleDelete = (id: number) => {
  emit('deleteEmployee', id)
}
</script>

<style scoped>
.list-card-employee {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
