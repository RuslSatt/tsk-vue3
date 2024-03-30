<template>
	<ul class="list">
		<li v-for="task in taskStore.tasks" :key="task.id" class="item">
			<input :readonly="readonly" v-model="task.name" class="text" type="text" />
			<div class="btn-container">
				<button @click="saveEdited(task)" v-if="isEdit" class="btn green">Save</button>
				<button @click="toggleEdit" v-else class="btn green">Edit</button>

				<button @click="deleteTask(task)" class="btn">Delete</button>
			</div>
		</li>
	</ul>
</template>

<script lang="ts">
import { useTaskStore, type ITask } from '@/features/addTask';
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {
		const taskStore = useTaskStore();

		return { taskStore };
	},

	data() {
		return {
			isEdit: false,
			readonly: true
		};
	},

	methods: {
		async deleteTask(task: ITask) {
			if (!task.id) return;

			await this.taskStore.deleteTask(task.id);
			await this.taskStore.getTasks(task.userId);

			console.log('delete');
		},

		toggleEdit() {
			this.isEdit = !this.isEdit;
			this.readonly = !this.isEdit;
		},

		async saveEdited(task: ITask) {
			this.isEdit = !this.isEdit;

			await this.taskStore.updateTask(task);
			await this.taskStore.getTasks(task.userId);
		}
	}
});
</script>

<style scoped>
.list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.item {
	background-color: var(--bluegray-200);
	min-height: 30px;
	display: flex;
	align-items: center;
	padding: 5px;
	border-radius: 5px;
}

.text {
	background-color: var(--bluegray-200);
	border: none;
}

.btn-container {
	display: flex;
	gap: 10px;
	margin-left: auto;
}

.btn {
	padding: 5px;
	background-color: var(--bluegray-500);
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;
	color: #fafafa;
}

.btn:hover {
	background-color: var(--bluegray-600);
}
</style>
