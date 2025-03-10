<template>
  <div class="app-container">
    <h1 class="title-page">Home</h1>
    <!-- <AppButton variant="orange">Orange</AppButton>
    <button @click="openModal">Open Modal</button>

    <AppModal v-model:show="isModalVisible">
      <p>This is the main content of the modal.</p>

      <template #footer>
        <button @click="closeModal">Close</button>
        <button @click="handleSubmit">Submit</button>
      </template>
    </AppModal>
    <button @click="showToast">Show Toast</button> -->
    <!-- <AppTable :columns="columns" :items="employee">
      <template #actions="{ item }">
        <button @click="editItem(item)">Edit</button>
        <button @click="deleteItem(item)">Delete</button>
      </template>
    </AppTable> -->
    <!-- <AppTextField label="name" v-model="name" type="number" required /> -->
  </div>
</template>

<script lang="ts" setup>
// import AppButton from '@/components/app/AppButton.vue'
// import AppModal from '@/components/app/AppModal.vue'
// import AppTextField from '@/components/app/AppTextField.vue'
// import AppToast from '@/components/app/AppToast.vue';
import { inject, ref } from 'vue'




// function editItem(item) {
//   console.log('Edit:', item);
// }

// function deleteItem(item) {
//   console.log('Delete:', item);
// }

// const name = ref('')

// const isModalVisible = ref(false)

// // Function to open the modal
// const openModal = () => {
//   isModalVisible.value = true
// }

// // Function to close the modal
// const closeModal = () => {
//   isModalVisible.value = false
// }

// // Function to handle submit action
// const handleSubmit = () => {
//   alert('Form submitted!')
//   closeModal()
// }

// const toast = inject<any>('toast')

// const showToast = () => {
//   toast({
//     message: 'Hello, this is a toast!',
//     variant: 'error', // Optional: 'success', 'error', or 'info'
//     duration: 3000, // Optional: Duration in milliseconds
//   })
// }
</script>
