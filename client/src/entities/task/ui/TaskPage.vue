<template>
	<div v-if="taskStore.selectedTask" :class="{ open: taskStore.isOpenPage }" class="task">
		<header class="task__header">
			<p-button @click="closePage" text icon="pi pi-angle-double-right"></p-button>
		</header>
		<div class="task__content">
			<div class="content__item">
				<input @input="editTask" v-model="taskStore.selectedTask.name" />
			</div>
			<div class="content__item">
				<span>Due</span>
				<p-calendar
					class="content__item_calendar"
					dateFormat="dd.mm.yy"
					v-model="taskStore.selectedTask.deadline"
					@update:modelValue="editTask"
				></p-calendar>
			</div>
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
	z-index: 100;
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
	gap: 10px;
}

.content__item {
	display: flex;
	align-items: center;
	gap: 20px;
}

.content__item_calendar {
	width: 100%;
}
</style>
