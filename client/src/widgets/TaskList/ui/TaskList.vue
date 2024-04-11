<template>
	<div class="list">
		<p-table
			v-model:selection="taskStore.selectedTask"
			:value="taskStore.tasks"
			showGridlines
			dataKey="id"
			resizableColumns
			columnResizeMode="fit"
			@rowSelect="onSelect"
			@rowUnselect="onRowUnselect"
			editMode="cell"
			@cell-edit-complete="onCellEditComplete"
		>
			<p-table-column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
				<template #body="{ data, field }">
					{{ data[field] }}
				</template>
				<template #editor="{ data, field }">
					<template v-if="field === 'name'">
						<p-input-text v-model="data[field]" autofocus />
					</template>
				</template>
			</p-table-column>
		</p-table>
	</div>

	<task-page></task-page>
</template>

<script setup lang="ts">
import TaskPage, { type ITask, useTaskStore } from '@/entities/task';
import { useCommentStore } from '@/entities/comment';
import { ref } from 'vue';

const taskStore = useTaskStore();
const commentStore = useCommentStore();

const columns = ref([
	{ field: 'name', header: 'Название' },
	{ field: 'deadline', header: 'Дата' },
	{ field: 'priority', header: 'Приоритет' }
]);

const deleteTask = async (task: ITask, e: Event) => {
	e.stopPropagation();

	if (!task.id) return;

	await taskStore.deleteTask(task.id);
	await taskStore.getTasks(task.userId);
};

const saveEdited = async (task: ITask) => {
	console.log(task);
	await taskStore.updateTask(task);
	await taskStore.getTasks(task.userId);
};

const onCellEditComplete = async (event: any) => {
	let { data, newValue, field } = event;

	switch (field) {
		case 'name':
			if (data[field] !== newValue) {
				data[field] = newValue;
				await saveEdited(data);
			}
			break;
		default:
			break;
	}
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
