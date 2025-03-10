<template>
  <AppCard class="card-employee" @click="router.push(`/employee/${props.employee?.id}`)">
    <div>
      <p>{{ props.employee?.emp_id }}</p>
      <div>
        <AppButton variant="orange" @click="router.push(`/employee/${props.employee?.id}/edit`)">
          <Icon icon="material-symbols:edit" />
        </AppButton>
        <AppButton variant="red" @click="emit('deleteEmployee', props.employee?.id!)">
          <Icon icon="material-symbols:delete" />
        </AppButton>
      </div>
    </div>
    <h3>{{ props.employee?.name }}</h3>
    <p>{{ props.employee?.position }} - {{ props.employee?.department }}</p>

    <p>Join Date : {{ props.employee?.join_date }}</p>
  </AppCard>
</template>

<script setup lang="ts">
import type { Employee } from '@/dummy'
import AppCard from './app/AppCard.vue'
import AppButton from '@/components/app/AppButton.vue'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  employee?: Employee
}>()

const emit = defineEmits<{
  (e: 'deleteEmployee', id: number): void
}>()
</script>

<style scoped>
.card-employee {
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: box-shadow 0.3s;
  cursor: pointer;
}

.card-employee h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.card-employee div:nth-child(1) {
  display: flex;
  justify-content: space-between;
}

.card-employee div:nth-child(1) div {
  display: flex;
  gap: 4px;
}

.card-employee div:nth-child(1) div button {
  padding: 4px 8px;
}

.card-employee p {
  margin: 0;
  font-size: 14px;
}

.card-employee:hover {
  box-shadow: 0 2px 4px 0 var(--color-red-light);
}
</style>
