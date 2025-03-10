<template>
  <div class="app-container">
    <h3 class="title-page">Employee Detail</h3>

    <CardDetailEmployee :employee="detailEmployee(parseInt(route.params.id as string))!"/>
  </div>
</template>

<script setup lang="ts">
import CardDetailEmployee from '@/components/CardDetailEmployee.vue';

import { useEmployee } from '@/composable/useEmployee';
import { useRoute } from 'vue-router';

const route = useRoute()

const { detailEmployee } = useEmployee()

</script>

<style scoped>

</style>
