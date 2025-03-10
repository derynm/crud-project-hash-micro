import { ref } from 'vue';
import { employee } from '@/dummy';


export function useEmployee() {

  const employeesData = ref(employee);
  const isLoading = ref(false);

  const doFilterEmployee = (keyword: string) => {
    isLoading.value = true;
    setTimeout(() => {
      if (keyword) {
        const filteredData = employee.filter((emp) => {
          return emp.name.toLowerCase().includes(keyword.toLowerCase());
        });
        employeesData.value = filteredData;
      } else {
        employeesData.value = employee;
      }
      isLoading.value = false;
    }, 1000);
  }

  return {
    employeesData,
    isLoading,
    doFilterEmployee
  }
}
