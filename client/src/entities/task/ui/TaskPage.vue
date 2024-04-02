<template>
	<div :class="{ open: taskStore.isOpenPage }" class="task">
		<header class="task__header">
			<p-button @click="closePage" text icon="pi pi-angle-double-right"></p-button>
		</header>
		<div class="task__content">
			<input
				@input="editTask"
				v-if="taskStore.selectedTask"
				v-model="taskStore.selectedTask.name"
				class="content__name"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/features/addTask';

const taskStore = useTaskStore();

const closePage = () => (taskStore.isOpenPage = false);

const editTask = async () => {
	if (!taskStore.selectedTask) return;
	await taskStore.updateTask(taskStore.selectedTask);
};
</script>

<style scoped>
.task {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 2000;
	width: 50%;
	height: 100%;
	background-color: var(--surface-100);
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
	transform: translateX(100%);
	transition: transform 0.3s;
}

.task.open {
	transform: translateX(0%);
}

.task__header {
	height: 40px;
	display: flex;
	align-items: center;
	padding: 5px;
	margin-bottom: 20px;
}

.task__content {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	padding: 10px 40px;
}
</style>
