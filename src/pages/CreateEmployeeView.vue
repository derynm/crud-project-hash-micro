<template>
  <div class="app-container">
    <h3 class="title-page">Create Employee Data</h3>
    <AppCard>
      <FormEmployee />
    </AppCard>
  </div>
</template>

<script setup lang="ts">
import AppCard from '@/components/app/AppCard.vue'
import FormEmployee from '@/components/FormEmployee.vue'
</script>

<style scoped></style>
