<template>
  <div class="app-container">
    <h3 class="title-page">Employee Data</h3>
    <div style="display: flex; justify-content: space-between; margin-bottom: 1rem">
      <InputSeacrh @search="doFilterEmployee" />
      <AppButton variant="navy" @click="router.push('/employee/new')">Add Employee</AppButton>
    </div>

    <LayoutSelector @change-layout="handleChangeLayout" :layout-selected="layoutSelected" />

    <ListCardEmployee
      :employeesData="employeesData"
      @delete-employee="handleDeleteEmployee"
      v-if="layoutSelected === 'card'"
    />

    <AppTable
      v-if="layoutSelected === 'table'"
      :columns="columns"
      :items="employeesData"
      :loading="isLoading"
    >
      <template #actions="{ item }">
        <div class="action-container">
          <AppButton variant="navy" @click="router.push(`/employee/${item.id}`)">
            <Icon icon="bxs:user-detail" />
          </AppButton>
          <AppButton variant="orange" @click="router.push(`/employee/${item.id}/edit`)">
            <Icon icon="material-symbols:edit" />
          </AppButton>
          <AppButton variant="red" @click="handleDeleteEmployee(item.id)">
            <Icon icon="material-symbols:delete" />
          </AppButton>
        </div>
      </template>
    </AppTable>
    <ModalConfirmationDelete v-model:show="showConfirmationDelete" :emp_id="deletedEmployee" />
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/components/app/AppButton.vue'
import AppTable from '@/components/app/AppTable.vue'
import InputSeacrh from '@/components/InputSeacrh.vue'
import LayoutSelector from '@/components/LayoutSelector.vue'
import ListCardEmployee from '@/components/ListCardEmployee.vue'
import ModalConfirmationDelete from '@/components/ModalConfirmationDelete.vue'

import { useEmployee } from '@/composable/useEmployee'

import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { employeesData, isLoading, doFilterEmployee } = useEmployee()

const router = useRouter()

const layoutSelected = ref<'table' | 'card'>('table')

const columns = [
  { key: 'emp_id', label: 'id' },
  { key: 'name', label: 'Name' },
  { key: 'position', label: 'Position' },
  { key: 'department', label: 'Department' },
  { key: 'join_date', label: 'Join Date' },
]

const deletedEmployee = ref<number | null>(null)
const showConfirmationDelete = ref(false)

const handleDeleteEmployee = (id: number) => {
  deletedEmployee.value = id
  showConfirmationDelete.value = true
}

const handleChangeLayout = (layout: 'table' | 'card') => {
  layoutSelected.value = layout
}
</script>
