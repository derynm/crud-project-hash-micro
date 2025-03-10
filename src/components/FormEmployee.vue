<template>
  <form @submit.prevent="submitForm" class="employee-form">
    <AppTextField
      label="Employee ID"
      v-model="form.emp_id"
      placeholder="Enter employee ID"
      required
    />

    <AppTextField label="Name" v-model="form.name" placeholder="Enter employee name" required />

    <AppTextField label="Email" v-model="form.email" placeholder="Enter employee email" required />

    <AppTextField
      label="Position"
      v-model="form.position"
      placeholder="Enter employee position"
      required
    />

    <div class="employee-form-grid">
      <AppTextField
        label="Department"
        v-model="form.department"
        placeholder="Enter employee department"
        required
      />

      <AppTextField
        label="Salary"
        type="number"
        v-model.number="form.salary"
        placeholder="Enter employee salary"
        required
      />

      <AppTextField label="Join Date" v-model="form.join_date" type="date" required />
    </div>

    <AppButton type="submit" variant="red">{{ isEdit ? 'Update' : 'Create' }} Employee</AppButton>
  </form>
</template>

<script setup lang="ts">
import { reactive, defineProps, inject } from 'vue'
import AppTextField from './app/AppTextField.vue'
import AppButton from './app/AppButton.vue'
import { useRouter } from 'vue-router'

interface Employee {
  id?: number
  emp_id: string
  name: string
  position: string
  department: string
  salary: number
  email: string
  join_date: string
}

const router = useRouter()

const props = defineProps<{
  initialData?: Employee
  isEdit?: boolean
}>()

const form = reactive<Employee>({
  emp_id: '',
  name: '',
  email: '',
  position: '',
  department: '',
  salary: 0,
  join_date: '',
})

if (props.initialData) {
  Object.assign(form, props.initialData)
}

const toast = inject<any>('toast')

const submitForm = () => {
  toast({
    message: `Success ${props.isEdit ? 'Edit' : 'Create'} Employee Data ${form.name}`,
    variant: props.isEdit ? 'info' : 'success',
    duration: 3000,
  })
  router.push('/employee')
}
</script>

<style scoped>
.employee-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.employee-form > *:nth-child(2) {
  grid-column: span 2;
}

.employee-form button {
  grid-column: span 2;
}

.employee-form-grid {
  grid-column: span 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
