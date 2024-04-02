<template>
	<ul class="list">
		<p-card
			@click="select(task)"
			v-for="task in taskStore.tasks"
			:key="task.id"
			class="card"
			body-style="display: flex; align-items: center; height: 35px"
			shadow="hover"
		>
			<template #content>
				<div class="item">
					<div class="item-checkbox">
						<p-checkbox @change="saveEdited(task)" v-model="task.completed" :binary="true" />
					</div>

					<p>{{ task.name }}</p>
					<div class="item-buttons">
						<p-button
							severity="danger"
							rounded
							raised
							icon="pi pi-trash"
							@click="deleteTask(task)"
							type="danger"
						/>
					</div>
				</div>
			</template>
		</p-card>
	</ul>

	<task-page></task-page>
</template>

<script setup lang="ts">
import { useTaskStore, type ITask } from '@/features/addTask';
import TaskPage from '@/entities/task';

const taskStore = useTaskStore();

const deleteTask = async (task: ITask) => {
	if (!task.id) return;

	await taskStore.deleteTask(task.id);
	await taskStore.getTasks(task.userId);
};

const saveEdited = async (task: ITask) => {
	await taskStore.updateTask(task);
	await taskStore.getTasks(task.userId);
};

const select = async (task: ITask) => {
	taskStore.selectTask(task);
	taskStore.isOpenPage = true;
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

.btn {
	margin-left: auto;
}

.btn-container {
	display: flex;
	margin-left: auto;
}
</style>
