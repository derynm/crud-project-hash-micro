<template>
  <div class="app-container">
    <h3 class="title-page">Edit Employee Data</h3>
    <AppCard>
      <FormEmployee is-edit :initial-data="detailEmployee(parseInt(route.params.id as string))!" />
    </AppCard>
  </div>
</template>

<script setup lang="ts">
import AppCard from '@/components/app/AppCard.vue'
import FormEmployee from '@/components/FormEmployee.vue'
import { useEmployee } from '@/composable/useEmployee'
import { useRoute } from 'vue-router'

const route = useRoute()

const { detailEmployee } = useEmployee()
</script>

<style scoped></style>
