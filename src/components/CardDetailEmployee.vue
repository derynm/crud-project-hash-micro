<template>
  <AppCard class="card-detail-employee">
    <div class="card-detail-employee-name">
      <p>Employee ID</p>
      <p>{{ props.employee.emp_id }}</p>
    </div>

    <div>
      <p>Name</p>
      <p>{{ props.employee.name }}</p>
    </div>

    <div>
      <p>Email</p>
      <p>{{ props.employee.email }}</p>
    </div>

    <div>
      <p>Position</p>
      <p>{{ props.employee.position }}</p>
    </div>

    <div>
      <p>Department</p>
      <p>{{ props.employee.department }}</p>
    </div>

    <div>
      <p>Salary</p>
      <p>{{ numberToRupiah }}</p>
    </div>

    <div>
      <p>Join Date</p>
      <p>{{ props.employee.join_date }}</p>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import type { Employee } from '@/dummy'
import AppCard from './app/AppCard.vue'
import { computed } from 'vue'

const props = defineProps<{
  employee: Employee
}>()

const numberToRupiah = computed(() => {
  return `Rp ${props.employee.salary.toLocaleString('id-ID')}`
})
</script>

<style scoped>
.card-detail-employee {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.card-detail-employee div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-detail-employee p:nth-child(2) {
  font-weight: bold;
  margin: 0;
}

.card-detail-employee-name {
  grid-column: span 3;
}
</style>
