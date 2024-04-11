<template>
	<div @click="closeItems" :class="{ open: taskStore.isOpenPage }" class="task">
		<div class="task-container" v-if="taskStore.selectedTask">
			<task-header></task-header>
			<div class="task__content">
				<task-title></task-title>
				<div class="content__item">
					<span class="item__name">Дата</span>
					<div @click.stop="toggleCalendar" class="item__field">
						<div class="item__field_value">
							{{ taskStore.selectedTask.deadline?.toLocaleString() }}
						</div>
						<task-calendar :open="open" :editTask="editTask"></task-calendar>
					</div>
				</div>
				<div class="content__item">
					<span class="item__name">Приоритет</span>
					<div @click.stop="togglePriority" class="item__field">
						<div class="item__field_value">
							{{ taskStore.selectedTask.priority }}
						</div>
						<p-menu
							ref="priorityMenu"
							:model="priorityItems"
							@update:modelValue="editTask"
							:popup="true"
						></p-menu>
					</div>
				</div>
				<comments-list></comments-list>
				<comment-area :task="taskStore.selectedTask"></comment-area>
			</div>
		</div>
		<div v-else>
			<p-skeleton class="mb-2"></p-skeleton>
			<p-skeleton width="10rem" class="mb-2"></p-skeleton>
			<p-skeleton width="5rem" class="mb-2"></p-skeleton>
			<p-skeleton height="2rem" class="mb-2"></p-skeleton>
			<p-skeleton width="10rem" height="4rem"></p-skeleton>
		</div>
	</div>
</template>

<script setup lang="ts">
import { type TaskPriority, useTaskStore } from '@/entities/task';
import CommentArea from '@/features/addComment/ui/CommentArea.vue';
import TaskCalendar from './TaskCalendar.vue';
import TaskHeader from './header/TaskHeader.vue';
import TaskTitle from './TaskTitle.vue';
import CommentsList from '@/entities/comment';

import { ref, watch } from 'vue';

const taskStore = useTaskStore();

const open = ref(false);

watch(open, async () => {
	// Логика по загрузке данных о задаче
});

const selectMenu = (label: TaskPriority) => {
	if (taskStore.selectedTask) {
		taskStore.selectedTask.priority = label;
		editTask();
	}
};

const priorityMenu = ref();
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

const editTask = async () => {
	if (!taskStore.selectedTask) return;

	await taskStore.updateTask(taskStore.selectedTask);
};

const toggleCalendar = () => {
	open.value = !open.value;
	priorityMenu.value.hide();
};

const togglePriority = (event: Event) => {
	priorityMenu.value.toggle(event);
	open.value = false;
};

const closeItems = () => {
	open.value = false;
	priorityMenu.value.hide();
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
	display: flex;
	flex-direction: column;
	padding: 10px;
}

.task.open {
	transform: translateX(0%);
}

.task-container {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
}

.task__content {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	padding: 10px 40px;
	gap: 10px;
	overflow: auto;
}

.content__item {
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 5px;
	height: 40px;
	width: 100%;
}

.item__name {
	flex: 30%;
}

.item__field {
	position: relative;
	width: 100%;
	height: 100%;
	cursor: pointer;
}

.item__field_value {
	width: 100%;
	height: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;
	transition: 0.3s;
	padding: 0 5px;
}

.item__field_value:hover {
	background-color: var(--surface-200);
}
</style>
