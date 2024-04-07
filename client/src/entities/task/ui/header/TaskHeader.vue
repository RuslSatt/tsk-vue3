<template>
	<header class="header">
		<p-checkbox
			v-if="taskStore.selectedTask"
			@change="onChangeComplete(taskStore.selectedTask)"
			v-model="taskStore.selectedTask.completed"
			:binary="true"
		/>
		<p-button @click="closePage" text icon="pi pi-angle-double-right"></p-button>
	</header>
</template>

<script setup lang="ts">
import { useTaskStore, type ITask } from '@/features/addTask';

const taskStore = useTaskStore();

const onChangeComplete = async (task?: ITask) => {
	if (task) await taskStore.updateTask(task);
};

const closePage = () => (taskStore.isOpenPage = false);
</script>

<style scoped>
.header {
	height: 40px;
	display: flex;
	align-items: center;
	gap: 5px;
	padding: 5px;
	margin-bottom: 20px;
}
</style>
