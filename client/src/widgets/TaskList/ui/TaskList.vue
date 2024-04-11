<template>
	<div class="task-list">
		<p-table
			v-if="taskStore.tasks.length > 0"
			class="task-list-table"
			:value="taskStore.tasks"
			showGridlines
			dataKey="id"
			resizableColumns
			columnResizeMode="fit"
			editMode="cell"
			@cell-edit-complete="onCellEditComplete"
		>
			<p-table-column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
				<template #body="{ data, field }">
					<div class="task-table-cell">
						{{ data[field] }}
						<p-button
							v-if="field === 'name'"
							@click.stop="onSelect(data)"
							class="task-page-btn"
							raised
							icon="pi pi-clone"
						>
						</p-button>
					</div>
				</template>
				<template #editor="{ data, field }">
					<template v-if="field === 'name'">
						<p-input-text class="task-input-editor" v-model="data[field]" />
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

const onSelect = async (task: ITask) => {
	taskStore.isOpenPage = true;
	taskStore.selectTask(task);
	if (taskStore.selectedTask?.id) await commentStore.getComments(taskStore.selectedTask.id);
};
</script>

<style scoped>
.task-list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

tr:hover .task-page-btn {
	display: flex;
}

.task-input-editor {
	padding: 5px;
	margin: 0 0
}

.task-page-btn {
	display: none;
	position: absolute;
	right: -10px;
	z-index: 10;
	margin-left: auto;
	height: 2rem;
	width: 3rem;
}

.task-table-cell {
	position: relative;
	display: flex;
	align-items: center;
}
</style>
