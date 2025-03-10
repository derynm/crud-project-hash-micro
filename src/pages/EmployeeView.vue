<template>
  <div class="app-container">
    <h3 class="title-page">Employee Data</h3>
    <InputSeacrh @search="doFilterEmployee" />
    <AppTable :columns="columns" :items="employeesData" :loading="isLoading">
      <template #actions="{ item }">
        <div class="action-container">
          <AppButton variant="navy">
            <Icon icon="bxs:user-detail"/>
          </AppButton>
          <AppButton variant="orange">
            <Icon icon="material-symbols:edit"/>
          </AppButton>
          <AppButton variant="red">
            <Icon icon="material-symbols:delete"/>
          </AppButton>
        </div>
      </template>
    </AppTable>
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/components/app/AppButton.vue';
import AppTable from '@/components/app/AppTable.vue';
import InputSeacrh from '@/components/InputSeacrh.vue';

import { useEmployee } from '@/composable/useEmployee';

import { Icon } from '@iconify/vue';

const { employeesData, isLoading, doFilterEmployee } = useEmployee()

const columns = [
  { key: 'emp_id', label: 'id' },
  { key: 'name', label: 'Name' },
  { key: 'position', label: 'Position' },
  { key: 'department', label: 'Department' },
  { key: 'join_date', label: 'Join Date' },
];
</script>

<style scoped>

</style>
