<template>
  <main class="app-layout">
    <AppSidebar />
    <div class="app-layout-content-container">
      <AppNavbar />
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import AppNavbar from './AppNavbar.vue';
import AppSidebar from './AppSidebar.vue';


</script>

<style scoped>

</style>
