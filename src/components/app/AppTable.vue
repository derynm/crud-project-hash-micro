<template>
  <div class="app-table">
    <table class="data-table">
      <thead>
        <tr>
          <th v-for="column in props.columns" :key="column.key">
            <div>
              {{ column.label }}
            </div>
          </th>
          <th v-if="$slots.actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="props.loading">
          <td
            :colspan="$slots.actions ? props.columns.length + 1 : props.columns.length"
            class="loading-state"
          >
            <div class="loading-content">
              <slot name="loading" v-if="$slots.loading" />
              <Icon icon="eos-icons:loading" v-else>Loading data...</Icon>
            </div>
          </td>
        </tr>

        <template v-else>
          <tr v-for="(item, index) in props.items" :key="index" class="data-row">
            <td v-for="column in props.columns" :key="column.key">
              <slot :name="`column-${column.key}`" :item="item" :index="index">
                {{ item[column.key] }}
              </slot>
            </td>

            <td v-if="$slots.actions" class="actions-cell">
              <slot name="actions" :item="item" :index="index" />
            </td>
          </tr>

          <tr v-if="props.items.length === 0">
            <td
              :colspan="$slots.actions ? props.columns.length + 1 : props.columns.length"
              class="empty-state"
            >
              <slot name="empty"> No data available </slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

export interface TableColumn {
  key: string
  label: string
}

interface Props {
  columns: TableColumn[]
  items?: any[]
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  loading: false,
})
</script>

<style scoped></style>
