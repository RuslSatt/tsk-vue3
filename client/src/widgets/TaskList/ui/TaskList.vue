<template>
	<div class="list">
		<p-table
			v-model:selection="taskStore.selectedTask"
			:value="taskStore.tasks"
			showGridlines
			dataKey="id"
			selectionMode="single"
			resizableColumns
			columnResizeMode="fit"
			@rowSelect="onSelect"
			@rowUnselect="onRowUnselect"
		>
			<p-table-column field="name" header="Название"></p-table-column>
			<p-table-column field="deadline" header="Дата"></p-table-column>
			<p-table-column field="priority" header="Приоритет"></p-table-column>
		</p-table>
	</div>

	<task-page></task-page>
</template>

<script setup lang="ts">
import TaskPage, { type ITask, useTaskStore } from '@/entities/task';
import { useCommentStore } from '@/entities/comment';

const taskStore = useTaskStore();
const commentStore = useCommentStore();

const deleteTask = async (task: ITask, e: Event) => {
	e.stopPropagation();

	if (!task.id) return;

	await taskStore.deleteTask(task.id);
	await taskStore.getTasks(task.userId);
};

const saveEdited = async (task: ITask) => {
	await taskStore.updateTask(task);
	await taskStore.getTasks(task.userId);
};

const onSelect = async () => {
	taskStore.isOpenPage = true;
	if (taskStore.selectedTask?.id) await commentStore.getComments(taskStore.selectedTask.id);
};

const onRowUnselect = () => {
	taskStore.isOpenPage = false;
};
</script>

<style scoped>
.list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.item {
	display: flex;
	align-items: center;
	height: 10px;
}

.item-checkbox {
	margin-right: 15px;
}

.item-buttons {
	margin-left: auto;
	display: flex;
	gap: 10px;
}

.card {
	cursor: pointer;
}
</style>
