<template>
  <div class="app-sidebar">
    <img src="../../assets/images/logo-hashmicro-white.webp" alt="hashmicro logo" />

    <ul class="app-sidebar-menu">
      <li
        v-for="item in menu"
        :key="item.routeName"
        class="app-sidebar-menu-item"
        :class="{ 'active-menu': route.name === item.routeName }"
      >
        <RouterLink :to="item.to">
          <Icon :icon="item.icon" />
          <span>{{ item.title }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { RouterLink, useRoute } from 'vue-router'

const menu = [
  {
    icon: 'material-symbols:home-rounded',
    title: 'Home',
    routeName: 'home',
    to: '/',
  },
  {
    icon: 'clarity:employee-group-solid',
    title: 'Employee',
    routeName: 'employee',
    to: '/employee',
  },
]

const route = useRoute()
</script>
