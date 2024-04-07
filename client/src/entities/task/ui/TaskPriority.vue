<template>
	<p-menu :model="priorityItems" :popup="true"></p-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore, type TaskPriority } from '@/features/addTask';

const taskStore = useTaskStore();

const selectMenu = (label: TaskPriority) => {
	if (taskStore.selectedTask) {
		taskStore.selectedTask.priority = label;
		taskStore.updateTask(taskStore.selectedTask);
	}
};

const priorityItems = ref([
	{
		label: 'Низкий',
		code: 'NY',
		command: () => selectMenu('Низкий')
	},
	{
		label: 'Средний',
		code: 'RM',
		command: () => selectMenu('Средний')
	},
	{
		label: 'Высокий',
		code: 'LDN',
		command: () => selectMenu('Высокий')
	}
]);
</script>

<style scoped></style>
