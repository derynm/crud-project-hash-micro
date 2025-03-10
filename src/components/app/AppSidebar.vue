<template>
  <div class="app-sidebar">
    <div>
      <img src="../../assets/images/logo-hashmicro-white.webp" alt="hashmicro logo" />

      <ul class="app-sidebar-menu">
        <li
          v-for="item in menu"
          :key="item.routeName"
          class="app-sidebar-menu-item"
          :class="{
            'active-menu': route.name === item.routeName || route.fullPath.includes(item.routeName),
          }"
        >
          <RouterLink :to="item.to">
            <Icon :icon="item.icon" />
            <span>{{ item.title }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="app-sidebar-footer">
      <p>Dery Nugroho Marjuki</p>
      <div>
        <a href="https://github.com/derynm/crud-project-hash-micro" target="_blank">
          <Icon icon="mdi:github" />
        </a>
        <a href="https://www.linkedin.com/in/derynm/" target="_blank">
          <Icon icon="mdi:linkedin" />
        </a>
      </div>
    </div>
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
